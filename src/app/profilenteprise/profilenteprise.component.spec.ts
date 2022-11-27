import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilentepriseComponent } from './profilenteprise.component';

describe('ProfilentepriseComponent', () => {
  let component: ProfilentepriseComponent;
  let fixture: ComponentFixture<ProfilentepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilentepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilentepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
