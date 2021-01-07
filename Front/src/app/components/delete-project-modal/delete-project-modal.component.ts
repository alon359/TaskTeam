import { Component, Input, OnInit } from '@angular/core';
// Models
import { Project } from 'src/app/models/project.model';
// Services
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-delete-project-modal',
  templateUrl: './delete-project-modal.component.html',
  styleUrls: ['./delete-project-modal.component.css']
})
export class DeleteProjectModalComponent implements OnInit {

  @Input() project:Project;
  inputProjectName ='';


  isBtnDelDisabled=false;

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
  }

  onInputChage(){
    console.log(this.inputProjectName);
    
    if(this.inputProjectName==this.project.title){
     this.isBtnDelDisabled = false; 
    }
  }

  onDelete(){
   this.projectService.removeProject(this.project._id);
  }

}
