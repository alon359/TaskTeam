import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassEmailSendedComponent } from './forget-pass-email-sended.component';

describe('ForgetPassEmailSendedComponent', () => {
  let component: ForgetPassEmailSendedComponent;
  let fixture: ComponentFixture<ForgetPassEmailSendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPassEmailSendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPassEmailSendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
