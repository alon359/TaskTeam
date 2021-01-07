import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
// Services
import { ProjectService } from 'src/app/services/project.service';
import { MemberService } from 'src/app/services/member.service';
// Models
import { Project } from 'src/app/models/project.model';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit, OnDestroy {
  projectFrom = new FormGroup({});

  errorMsg: string = null;
  successMsg: string = null;

  isLoading = false;
  isWasSubmit = false;

  createdProject: Project = null;

  // Subscriptions
  projectsSub: Subscription;
  errorMsgSub: Subscription;


  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private memberService: MemberService
  ) {
    this.projectFrom = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    })
  }

  ngOnInit(): void {
    this.projectsSub = this.projectService.projects$.subscribe(
      projects => {
        if (this.isLoading) {
          this.createdProject = projects[0];
          this.memberService.loadProjectMembers(this.createdProject._id);
          this.isLoading = false;
          $('.create-project').slideUp('200');
          setTimeout(() => { $('.add-member').slideDown('200'); }, 300);
          this.successMsg = 'New project created.';
        }
      });

    this.errorMsgSub = this.projectService.errMsg$.subscribe(errMsg => { this.errorMsg = errMsg });
  }

  ngOnDestroy(): void {
    this.projectsSub.unsubscribe();
  }

  // Get form-control
  get fc() {
    return this.projectFrom.controls;
  }

  onCreate() {
    this.isWasSubmit = true;
    this.errorMsg = null;
    $('.project-form input').removeClass('is-invalid');

    if (this.projectFrom.status === 'VALID') {
      this.isLoading = true;
      const data = this.projectFrom.value;
      this.projectService.createProject(data);
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
