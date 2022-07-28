import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { HomeComponent } from './home.component';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { ApiServicesService } from '../../services/api-services.service';

class MockPokemonService {
  getPokemons(): Observable<any> {
    return EMPTY;
  }
}

describe('HomeComponent', () => {
  let injector: TestBed;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: ApiServicesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, MockComponent(HomeComponent)],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [
        { provide: ApiServicesService, useClass: MockPokemonService },
      ],
    }).compileComponents();

    service = TestBed.inject(ApiServicesService);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    injector = getTestBed();
    component = fixture.componentInstance;
    service = injector.get(ApiServicesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPokemons()', () => {

    const mockResponse = {
      data: {
        data: [{ name: 'Bulbasaur' }],
      },
    };

    spyOn(service, 'getPokemons').and.returnValue(of(new HttpResponse({body: mockResponse})));

    //const button = fixture2.nativeElement.querySelector('button');
    //button.click()
    component.getPokemons();
    expect(service.getPokemons).toHaveBeenCalled();
  });

});
