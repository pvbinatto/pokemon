import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { RouterTestingModule } from '@angular/router/testing';

import { CardViewerComponent } from './card-viewer.component';

describe('CardViewerComponent', () => {
  let component: CardViewerComponent;
  let fixture: ComponentFixture<CardViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViewerComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
