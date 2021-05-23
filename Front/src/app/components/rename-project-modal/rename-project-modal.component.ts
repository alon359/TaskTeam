import { Component, Input, OnInit } from '@angular/core';
declare var $: any
// Models
import { Project } from 'src/app/models/project.model';


@Component({
  selector: 'app-rename-project-modal',
  templateUrl: './rename-project-modal.component.html',
  styleUrls: ['./rename-project-modal.component.css']
})
export class RenameProjectModalComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit(): void {
  }

  closeMoal() {
    $('#renmaeProjectMoadl').modal('hide');
  }
}
