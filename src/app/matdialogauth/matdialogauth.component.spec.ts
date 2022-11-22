import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatdialogauthComponent } from './matdialogauth.component';

describe('MatdialogauthComponent', () => {
  let component: MatdialogauthComponent;
  let fixture: ComponentFixture<MatdialogauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatdialogauthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatdialogauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
