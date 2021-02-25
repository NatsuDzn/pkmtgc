import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsResultComponent } from './cards-result.component';

describe('CardsResultComponent', () => {
  let component: CardsResultComponent;
  let fixture: ComponentFixture<CardsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
