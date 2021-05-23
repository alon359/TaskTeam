import { Component, Input } from '@angular/core';
// Models
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-table-tasks',
  templateUrl: './table-tasks.component.html',
  styleUrls: ['./table-tasks.component.css']
})
export class TableTasksComponent {
  @Input() tasks: Task[] = [];
  @Input() editableMode: boolean = true;

  constructor() { }

}
