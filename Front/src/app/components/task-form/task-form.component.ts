import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
// Models
import { Member } from 'src/app/models/member.model';
import { Project } from 'src/app/models/project.model';
import { Task } from 'src/app/models/task.model';
// Services
import { MemberService } from 'src/app/services/member.service';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
// Validators
import { TaskDateValidator } from 'src/app/validators/taskDate.validator';
declare var $: any;

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit, OnDestroy {
  @Input() task: Task = null;
  members: Member[];
  currentProject: Project = null;
  taskMsg: string = null;
  errMsg: string = null;
  isLoading = false;
  isWasSubmit = false;

  // Form group
  createTask = new FormGroup({});

  // Subscriptions
  membersSub: Subscription;
  projectSub: Subscription;
  taskSub: Subscription;

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

    // Get current task to edit (If have...)
    this.taskSub = this.taskService.currentTask$.subscribe(
      currentTask => {
        this.task = currentTask;
        if (currentTask) {
          let { title, description, priority, startDate, endDate, owner } = currentTask;

          if (owner && typeof owner === 'object') owner = owner._id;

          // Udate create-task form values
          this.createTask.patchValue({
            title,
            description,
            priority,
            startDate: new Date(startDate).toISOString().substr(0, 10),
            endDate: new Date(endDate).toISOString().substr(0, 10),
            owner: owner
          })
        } else {
          this.resetForm();
        }
      });

    // Get project user
    this.projectSub = this.projectService.currentProject$.subscribe(
      project => { this.currentProject = project });
  }

  ngOnDestroy(): void {
    this.membersSub.unsubscribe();
    this.taskSub.unsubscribe();
    this.projectSub.unsubscribe();
  }

  get fc() {
    return this.createTask.controls;
  }

  onCreate() {
    this.isWasSubmit = true;
    if (this.createTask.status === 'VALID') {
      this.isLoading = true;

      const data = this.createTask.value;

      if (!this.task) { // If is new-task 
        data.projectID = this.currentProject._id;
        this.taskService.create(data);
      } else { // Do update
        for (const property in data) {
          this.task[property] = data[property];
        }
        this.taskService.update(this.task);
      }
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

  resetForm() {
    this.createTask.reset();
    this.createTask.patchValue({
      title: '',
      description: '',
      priority: '',
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      owner: ''
    });
    this.isWasSubmit = false;
    this.isLoading = false;
  }

  removeCurrentTask(): void {
    this.taskService.setCurrentTask(null);
  }
}
