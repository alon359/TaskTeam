import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
// Services
import { ProjectService } from 'src/app/services/project.service';
//  Models
import { Project } from 'src/app/models/project.model';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit, OnDestroy {
  errorMsg: string = null;
  successMsg: string = null;
  errorMsgSub: Subscription;
  successMsgSub: Subscription;
  createdProjectSub: Subscription;
  createdProject: Project = null;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.setCurrentProject(null);

    this.createdProjectSub = this.projectService.currentProject$.subscribe(createdProject => this.createdProject = createdProject);

    this.errorMsgSub = this.projectService.errMsg$.subscribe(errMsg => { this.errorMsg = errMsg });

    this.successMsgSub = this.projectService.successMsg$.subscribe(successMsg => {
      this.successMsg = successMsg;
      $('.create-project').slideUp('200');
      setTimeout(() => { $('.add-member').slideDown('200'); }, 300);
    });
  }

  ngOnDestroy(): void {
    this.errorMsgSub.unsubscribe();
    this.successMsgSub.unsubscribe();
    this.createdProjectSub.unsubscribe();
  }
}
