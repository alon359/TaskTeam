import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
// Models
import { Member } from 'src/app/models/member.model';
import { Project } from 'src/app/models/project.model';
// Services
import { MemberService } from 'src/app/services/member.service';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
// Validators
import { TaskDateValidator } from 'src/app/validators/taskDate.validator';

@Component({
  selector: 'add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent implements OnInit, OnDestroy {
  members: Member[];
  currentProject: Project = null;

  errMsg: string = null;

  isLoading = false;
  isWasSubmit = false;

  // Form group
  createTask = new FormGroup({});

  // Subscriptions
  membersSub: Subscription;
  projectSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private memberService: MemberService,
    private projectService: ProjectService
  ) {
    this.createTask = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      startDate: [new Date().toISOString().substr(0, 10), Validators.required],
      endDate: [new Date().toISOString().substr(0, 10), Validators.required],
      owner: ['']
    }, {
      validator: TaskDateValidator('startDate', 'endDate'),
    });
  }

  ngOnInit(): void {
    // Get members project
    this.membersSub = this.memberService.members$.subscribe(
      members => { this.members = members });

    // Get project user
    this.projectSub = this.projectService.currentProject$.subscribe(
      project => { this.currentProject = project });

  }

  ngOnDestroy(): void {
    this.membersSub.unsubscribe();
    this.projectSub.unsubscribe();
  }

  get fc() {
    return this.createTask.controls;
  }

  onCreate() {
    this.isWasSubmit = true;
    if (this.createTask.status === 'VALID') {
      const task = this.createTask.value;

      task.projectID = this.currentProject._id;
      if (!task.owner) task.owner = [];
      this.taskService.create(task);
    }
  }

  GetValidationClass(inputName: string): string {
    if (!this.isWasSubmit) {
      return '';
    } else if (this.fc[inputName].errors || this.errMsg) {
      return 'is-invalid';
    } else {
      return 'is-valid';
    }
  }

}
