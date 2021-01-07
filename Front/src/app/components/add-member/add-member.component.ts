import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
// Models
import { Member } from 'src/app/models/member.model';
import { Project } from 'src/app/models/project.model';
// Services
import { MemberService } from 'src/app/services/member.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit, OnDestroy {
  addMemberForm: FormGroup = new FormGroup({});

  projectMembers: Member[] = [];
  currentProject: Project = null;

  isWasSubmit = false;
  isLoading = false;

  //  Permission options
  options = ['Normal', 'Admin'];

  // Massages
  successMsg: string = null;
  errorMsg: string = null;
  emailInputMsg: string = null;

  // Subscriptions
  projectMembersSub: Subscription;
  currentProjectSub: Subscription;
  errorMemberSub: Subscription;

  constructor(
    private memberService: MemberService,
    private projectService: ProjectService,
    private fb: FormBuilder
  ) {
    this.addMemberForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_]+@[a-zA-Z]+(\\.[a-zA-Z]{2,3})+$')]],
      permission: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

    // Members listener
    this.projectMembersSub = this.memberService.members$.subscribe(
      members => {
        this.projectMembers = members
        if (this.isLoading) {
          this.isLoading = false;
          this.isWasSubmit = false;
          this.successMsg = 'A new member added to the project';
          this.addMemberForm.reset();
        }
      });

    // Current project user listener
    this.currentProjectSub = this.projectService.currentProject$.subscribe
      (project => {
        this.currentProject = project;
      })

    // Error "MemberService" listener
    this.errorMemberSub = this.memberService.errMsg$.subscribe(
      errMsg => {
        this.resetMsgs();
        this.isLoading = false;
        if (errMsg.param == 'email') {
          this.emailInputMsg = errMsg.msg;
        } else {
          this.errorMsg = errMsg.msg;
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.projectMembersSub.unsubscribe();
    this.currentProjectSub.unsubscribe();
    this.errorMemberSub.unsubscribe();
  }

  get fc() { return this.addMemberForm.controls; }


  onAdd() {
    // Reset massages
    this.resetMsgs();

    this.isWasSubmit = true;

    if (this.addMemberForm.status == 'VALID') {
      this.isLoading = true;
      const data = this.addMemberForm.value;
      data.projectID = this.currentProject._id;
      this.memberService.createMember(data);
    }
  }


  GetValidationClass(inputName: string) {
    if (!this.isWasSubmit) {
      return '';
    } else if (this.addMemberForm.controls[inputName].errors) {
      return 'is-invalid';
    } else {
      return 'is-valid';
    }
  }

  resetMsgs() {
    this.emailInputMsg = null;
    this.successMsg = null;
    this.errorMsg = null;
  }
}
