import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
declare var $: any
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
  @Input() project: Project;
  inputProjectName = '';
  isBtnDelDisabled = true;
  errMsg: string = null;
  // Subscriptions
  errorMsgSub: Subscription;
  successSub: Subscription;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.errorMsgSub = this.projectService.errMsg$.subscribe(errMsg => { this.errMsg = errMsg });
    this.successSub = this.projectService.successMsg$.subscribe(success => {
      $('#delProjectModal').modal('hide');
      this.router.navigateByUrl('/projects');
    });
  }

  ngOnDestroy(): void {
    this.errorMsgSub.unsubscribe()
    this.successSub.unsubscribe()
  }

  onInputChage() {
    if (this.inputProjectName == this.project.title) {
      this.isBtnDelDisabled = false;
    } else {
      this.isBtnDelDisabled = true;
    }
  }

  onDelete() {
    this.projectService.removeProject(this.project._id);
  }
}
