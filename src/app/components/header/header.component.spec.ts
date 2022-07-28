import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { ApiServicesService } from '../../services/api-services.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { EMPTY, Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';

class MockPokemonService {
  getPokemonsByName(name: string): Observable<any> {
    return EMPTY;
  }
}

let injector: TestBed;
let component: HeaderComponent;
let fixture: ComponentFixture<HeaderComponent>;
let service: ApiServicesService;

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [
        { provide: ApiServicesService, useClass: MockPokemonService },
      ],
    }).compileComponents();

    service = TestBed.inject(ApiServicesService);
    fixture = TestBed.createComponent(HeaderComponent);
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

  it('should call onSubmitForm', () => {

    const mockResponse = {
      data: {
        data: [{ name: 'Bulbasaurs' }],
      },
    };
    //arrange
    spyOn(component, 'setTerm');
    component.searchTerm = 'Bulbasaur';
    //act
    
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    component.setTerm(component.searchTerm);
    //assert
    expect(component.searchTerm).toBe('Bulbasaur');
    expect(component.setTerm).toHaveBeenCalledTimes(2);
    expect(component.setTerm).toHaveBeenCalledWith("Bulbasaur");
    expect(component).toBeTruthy();
  });
});
