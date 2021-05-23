import { Component, OnInit } from '@angular/core';
import { map, take, takeLast } from 'rxjs/operators';
import { Task } from 'src/app/models/task.model';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-current-tasks',
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.css']
})
export class CurrentTasksComponent implements OnInit {
  projects: { projectName: string, tasks: Task[] }[] = null;


  isCollapse = true; // If the table-task collapse

  isLoading = true;

  constructor(private authService: AuthService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.authService.loggedUser$.pipe(take(1)).subscribe(user => {
      this.taskService.loadTasks({ userID: user._id });
    });

    this.taskService.tasks$.pipe(
      take(2),
      map(tasks => {
        // Create map tasks by project name
        let mapTasks = this.mapsTasks(tasks);
        // Convert "tasksMap" to array of objects by model {projectName:string, tasks:Task[]}
        const projectsWithTasks = $.map(mapTasks, (tasks, projectName) => ({ projectName, tasks }));
        return projectsWithTasks;
      })
    ).subscribe((projects) => {
      if (this.projects) this.isLoading = false;
      this.projects = projects;
    })
  }

  /** Scroll the screen to the tasks-table when it opens */
  scrollToTable(idTable: string): void {
    this.isCollapse = !this.isCollapse;
    // If the tasks-table is close end the function
    if (this.isCollapse) { return; }

    setTimeout(() => {
      // Get element tasks-table
      const tableEl = document.querySelector('#table' + idTable);
      // Scroll the window  to the tasks-table
      tableEl.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' });
    }, 300);
  }

  // Maps the tasks by project names
  mapsTasks(tasks: Task[]) {
    let mapTasks = {};
    tasks.forEach(task => {
      if (!(task.projectID.title in mapTasks)) {
        mapTasks[task.projectID.title] = [];
      }
      mapTasks[task.projectID.title].push(task)
    });
    return mapTasks;
  }
}
