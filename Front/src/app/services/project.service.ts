import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
// Environment variables
import { environment } from 'src/environments/environment';
// Services
import { MemberService } from './member.service';
import { AuthService } from './auth.service';
// Models
import { Project } from '../models/project.model';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // API URL address
  private BASE_URL = environment.baseUrl;
  // End point of URL API 
  private END_POINT = 'project';

  private _projects$ = new BehaviorSubject<Project[]>([]);
  public projects$ = this._projects$.asObservable();

  // The current project which is now open
  private _currentProject$ = new BehaviorSubject<Project>(null);
  public currentProject$ = this._currentProject$.asObservable();

  // Subjects for messages
  public errMsg$ = new Subject<any>();
  public successMsg$ = new Subject<any>();

  constructor(
    private http: HttpClient,
    private memberService: MemberService,
    private authService: AuthService) {
    this.loadUserProjects();
  }

  loadUserProjects() {
    this.authService.loggedUser$.subscribe(async userLogged => {
      const filter = { userID: userLogged._id };
      (await this.memberService.getMembers(filter))
        .pipe(
          map(members => {
            const projects = members.map(member => member.projectID)
            return projects;
          })
        ).subscribe(
          projects => {
            this._projects$.next(projects);
          }, error => { console.error(error) });
    });
  }

  createProject(data: Project) {
    this.http.post<Project>(`${this.BASE_URL}${this.END_POINT}`, data)
      .subscribe(
        createdProject => {
          this._currentProject$.next(createdProject);
          const projects = this._projects$.value;
          this._projects$.next([createdProject, ...projects]);
          this.successMsg$.next('New project created.');
        }, err => {
          console.error(err)
          this.errMsg$.next('We are sorry, we got a problem.\nPlease try again later.');
        });
  }

  async getByID(projectID: Project['_id']): Promise<Observable<Project>> {
    return this.http.get<Project>(`${this.BASE_URL}${this.END_POINT}/${projectID}`);
  }


  removeProject(projectID: Project['_id']) {
    this.http.delete<Project>(`${this.BASE_URL}${this.END_POINT}/${projectID}`).subscribe(
      res => {
        this.successMsg$.next('Project successfully deleted.');
      }, error => {
        this.errMsg$.next('Delete project failed, please try again.');
        console.error(error);
      });
  }

  updateProject(projectToUpdate: Project) {
    this.http.put<Project>(`${this.BASE_URL}${this.END_POINT}`, projectToUpdate).subscribe(
      updatedProject => {
        this.setCurrentProject(updatedProject);
        this.successMsg$.next('Project updated successfully');
      }, error => {
        this.errMsg$.next('Sorry we got a problem, please try again later')
        console.error(error);
      })
  }

  setCurrentProject(project: Project) {
    this._currentProject$.next(project);
  }
}
