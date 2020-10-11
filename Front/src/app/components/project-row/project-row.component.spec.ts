import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRowComponent } from './project-row.component';

describe('ProjectRowComponent', () => {
  let component: ProjectRowComponent;
  let fixture: ComponentFixture<ProjectRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
