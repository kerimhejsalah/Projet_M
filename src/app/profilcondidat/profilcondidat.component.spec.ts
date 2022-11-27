import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilcondidatComponent } from './profilcondidat.component';

describe('ProfilcondidatComponent', () => {
  let component: ProfilcondidatComponent;
  let fixture: ComponentFixture<ProfilcondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilcondidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilcondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
