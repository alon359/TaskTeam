import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
// Services
import { ProjectService } from 'src/app/services/project.service';
// Models
import { Project } from 'src/app/models/project.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit, OnDestroy {
  @Output() closeModalEv: EventEmitter<any> = new EventEmitter();
  @Input() project: Project = null;

  projectFrom = new FormGroup({});
  isLoading = false;
  isUpdating = false;
  isWasSubmit = false;

  // Subscriptions
  projectSub: Subscription;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
  ) {
    this.projectFrom = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    })
  }

  ngOnInit(): void {
    this.projectSub = this.projectService.currentProject$.subscribe(
      project => {
        if (this.isLoading) this.isLoading = false;
        if (this.isUpdating) {
          this.isUpdating = false;
          this.closeModalEv.emit();
        }
      });

    if (this.project) {
      this.projectFrom.patchValue({ title: this.project.title, description: this.project.description });
    }
  }

  ngOnDestroy(): void {
    this.projectSub.unsubscribe();
  }
  // Get form-control
  get fc() {
    return this.projectFrom.controls;
  }

  onSubmit() {
    this.isWasSubmit = true;
    this.projectService.errMsg$.next(null)
    $('.project-form input').removeClass('is-invalid');

    if (this.projectFrom.status === 'VALID') {
      this.isLoading = true;

      const dataForm = this.projectFrom.value;

      if (!this.project) { // If there is still no project
        this.projectService.createProject(dataForm);
      } else { // If have a project...
        this.isUpdating = true;
        this.projectService.currentProject$.pipe(take(1)).subscribe(
          currProject => {
            // Update current project
            currProject.title = dataForm.title;
            currProject.description = dataForm.description;
            this.projectService.updateProject(currProject);
          });
      }
    }
  }

  GetValidationClass(inputName: string) {
    if (!this.isWasSubmit) {
      return '';
    } else if (this.projectFrom.controls[inputName].errors) {
      return 'is-invalid';
    } else {
      return 'is-valid';
    }
  }
}
