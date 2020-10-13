import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
  projects = [
    {
      _id: '1',
      name: 'ios app',
      Progress: 80,
      RemainTasks: 10
    },
    {
      _id: '2',
      name: 'project2',
      Progress: 13,
      RemainTasks: 13
    },
    {
      _id: '1',
      name: 'project3',
      Progress: 11,
      RemainTasks: 11
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
