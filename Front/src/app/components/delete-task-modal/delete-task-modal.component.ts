import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
declare var $: any;
// Models
import { Task } from '../../models/task.model';
// Services
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-delete-task-modal',
  templateUrl: './delete-task-modal.component.html',
  styleUrls: ['./delete-task-modal.component.css']
})
export class DeleteTaskModalComponent implements OnInit, OnDestroy {
  task: Task = null;
  successMsg: string = null;
  errorMsg: string = null;
  isLoading: boolean = false;
  // Subscriptions
  taskSub: Subscription;
  successSub: Subscription;
  errorSub: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.successSub = this.taskService.taskMsg$.subscribe(
      msg => {
        this.successMsg = msg;
        this.isLoading = false;
        $('#deleteTaskModal').modal('hide');
        this.taskService.setCurrentTask(null);
      });
    this.errorSub = this.taskService.taskErr$.subscribe(errMsg => {
      this.errorMsg = errMsg;
      this.isLoading = false;
    });

    this.taskSub = this.taskService.currentTask$.subscribe(currentTask => { this.task = currentTask });
  }

  ngOnDestroy(): void {
    this.successSub.unsubscribe();
    this.errorSub.unsubscribe();
    this.taskSub.unsubscribe();
  }

  removeTask() {
    this.isLoading = true;
    this.taskService.remove(this.task._id);
  }
}
