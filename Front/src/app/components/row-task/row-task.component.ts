import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
// Services
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: '[app-row-task]',
  templateUrl: './row-task.component.html',
  styleUrls: ['./row-task.component.css']
})
export class RowTaskComponent implements OnInit {

  @Input() task: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    console.log(this.task)
  }

  onRemoveTask(taskID: string) {
    this.taskService.remove(taskID);
  }

  onStatusChange(status: Task['status']) {
    this.task.status = status;
    this.updateTask();
  }

  onPriorityChange(priority: Task['priority']) {
    this.task.priority = priority;
    this.updateTask();
  }

  updateTask() {
    let taskToUpdate: any = Object.assign({}, this.task);
    taskToUpdate.projectID = taskToUpdate.projectID._id;
    if (taskToUpdate.owner && taskToUpdate.owner.length) {
      taskToUpdate.owner = taskToUpdate.owner[0]._id;
    }
    this.taskService.update(taskToUpdate);
  }

  getStatusClass(statusTask: Task['status']): string {
    switch (statusTask) {
      case 'on hold':
        return 'status-hold';
      case 'working on it':
        return 'status-working';
      case 'waiting for response':
        return 'status-waiting';
      case 'blocked':
        return 'status-blocked';
      case 'done':
        return 'status-done';
      case 'not started yet':
        return 'status-not-started';
    }
  }

  getPriorityClass(priorityTask:Task['priority']):string{
    switch (priorityTask) {
      case 'low':
        return 'priority-low';
      case 'medium':
        return 'priority-medium';
      case 'high':
        return 'priority-high';
    }
  }

}
