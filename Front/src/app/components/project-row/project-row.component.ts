import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-project-row]',
  templateUrl: './project-row.component.html',
  styleUrls: ['./project-row.component.css']
})
export class ProjectRowComponent implements OnInit {
  @Input() project;

  constructor() { }

  ngOnInit(): void {
  }

}
