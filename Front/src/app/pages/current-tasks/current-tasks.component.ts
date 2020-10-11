import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-tasks',
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.css']
})
export class CurrentTasksComponent implements OnInit {
  tables = [1, 2, 3, 4];


  constructor() { }

  ngOnInit(): void {
  }
}
