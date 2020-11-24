import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassEmailCardComponent } from './forget-pass-email-card.component';

describe('ForgetPassEmailCardComponent', () => {
  let component: ForgetPassEmailCardComponent;
  let fixture: ComponentFixture<ForgetPassEmailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPassEmailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPassEmailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
