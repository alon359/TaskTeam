import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
// Environment variables
import { environment } from 'src/environments/environment';
// Models
import { Task } from '../models/task.model';
import { Project } from '../models/project.model';
import { DataProject } from '../models/dataProject.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private BASE_URL = environment.baseUrl;
  private endpoint = 'task';

  private _tasks$ = new BehaviorSubject<Task[]>([]);
  public tasks$ = this._tasks$.asObservable();

  public taskMsg$ = new Subject<string>();
  public taskErr$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  loadTasks(filter: { userID?: string, projectID?: string } = {}) {
    this.http.get<Task[]>(`${this.BASE_URL}${this.endpoint}`, { params: filter }).subscribe(
      tasks => {
        this._tasks$.next(tasks);

      }, error => {
        console.error(error)
        this.taskErr$.next(error);
      });
  }

  create(task: Task) {
    this.http.post<Task>(`${this.BASE_URL}${this.endpoint}`, task).subscribe(
      createdTask => {
        this._tasks$.next([createdTask, ...this._tasks$.value])
      }, error => {
        console.error(error);
        this.taskErr$.next(error);
      });
  }

  remove(taskID) {
    this.http.delete<Task>(`${this.BASE_URL}${this.endpoint}/${taskID}`).subscribe(
      res => {
        const tasks = this._tasks$.value.filter(task => task._id != taskID);
        this._tasks$.next(tasks);
        this.taskMsg$.next('Task deleted');
      }, error => {
        console.error(error);
        this.taskErr$.next(error);
      });
  }

  update(taskToUpdate: Task) {
    this.http.put<Task>(`${this.BASE_URL}${this.endpoint}`, taskToUpdate).subscribe(
      updatedTask => {
        const tasks = this._tasks$.value.map(task => {
          if (task._id != taskToUpdate._id) {
            return task;
          } else { return updatedTask; }
        });
        this._tasks$.next(tasks);
      }, error => {
        console.error(error)
        this.taskErr$.next(error);
      });
  }

  getTasksProjectCount(projectID: Project['_id']) {
    return this.http.get<DataProject['countTasks']>(`${this.BASE_URL}${this.endpoint}/countTasks/${projectID}`);
  }
}


