import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
// Services
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
// Module
import { Project } from 'src/app/models/project.model';
import { DataProject } from 'src/app/models/dataProject.model';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit, OnDestroy {
  dataProjects: DataProject[] = null;
  isLoading = true;

  // Subscriptions
  dataProjectsSub: Subscription;

  constructor(private projectService: ProjectService, private taskService: TaskService) { }

  ngOnInit(): void {
    // Load projects
    this.projectService.loadUserProjects();

    this.dataProjectsSub = this.projectService.projects$.pipe(
      take(2),
      map((projects: Project[]) => {
        let dataProjects: DataProject[] = [];

        projects.forEach(project => {
          this.taskService.getTasksProjectCount(project._id).subscribe(
            countTasks => {
              dataProjects.push({ project, countTasks });
            });
        });
        return dataProjects;
      })).subscribe(dataProjects => {
        if (this.dataProjects && this.isLoading) this.isLoading = false;
        this.dataProjects = dataProjects;
      });
  }

  ngOnDestroy(): void {
    this.dataProjectsSub.unsubscribe();
  }

  getProgress({ countTasks, doneTasks }): string {
    const precent = countTasks
      ? ((doneTasks / countTasks) * 100).toFixed(2)
      : 0;
    return precent + '%'
  }
}
