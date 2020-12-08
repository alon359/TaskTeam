import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Models
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _projects$ = new BehaviorSubject<Project[]>([]);
  public projects$ = this._projects$.asObservable();

  constructor() { }
}
