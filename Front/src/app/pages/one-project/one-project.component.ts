import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-project',
  templateUrl: './one-project.component.html',
  styleUrls: ['./one-project.component.css']
})
export class OneProjectComponent implements OnInit {



  constructor() { }

  list = ['alon']

  ngOnInit(): void {
  }

}
