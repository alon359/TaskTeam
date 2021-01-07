import { Component, Input, OnInit } from '@angular/core';
// Models
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-table-tasks',
  templateUrl: './table-tasks.component.html',
  styleUrls: ['./table-tasks.component.css']
})
export class TableTasksComponent implements OnInit {
  @Input() tasks: Task[] = [];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.tasks);

  }


}
