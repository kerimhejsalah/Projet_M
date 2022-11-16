import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreDisponibleComponent } from './offre-disponible.component';

describe('OffreDisponibleComponent', () => {
  let component: OffreDisponibleComponent;
  let fixture: ComponentFixture<OffreDisponibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreDisponibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
