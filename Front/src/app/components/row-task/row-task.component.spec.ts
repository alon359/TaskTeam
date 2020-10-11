import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowTaskComponent } from './row-task.component';

describe('RowTaskComponent', () => {
  let component: RowTaskComponent;
  let fixture: ComponentFixture<RowTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
