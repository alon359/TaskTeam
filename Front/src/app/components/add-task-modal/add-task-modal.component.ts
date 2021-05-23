import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// Services
import { TaskService } from 'src/app/services/task.service';
// Models
import { Task } from 'src/app/models/task.model';
declare var $: any;


@Component({
  selector: 'add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent implements OnInit, OnDestroy {
  currentTask: Task = null
  // Subscriptions
  taskMsgSub: Subscription;
  currentTaskSub: Subscription;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskMsgSub = this.taskService.taskMsg$.subscribe(
      msg => { $('#addTaskModal').modal('hide') }
    )
    this.currentTaskSub = this.taskService.currentTask$.subscribe(
      currentTask => { this.currentTask = currentTask; }
    )
  }

  ngOnDestroy(): void {
    this.taskMsgSub.unsubscribe();
    this.currentTaskSub.unsubscribe();
  }

  onClose(): void {
    this.currentTask = null;
  }
}
