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
  private BASE_URL = environment.baseUrl;
  private endpoint = 'project';

  private _projects$ = new BehaviorSubject<Project[]>([]);
  public projects$ = this._projects$.asObservable();

  private _currentProject$ = new BehaviorSubject<Project>(null);
  public currentProject$ = this._currentProject$.asObservable();

  public errMsg$ = new Subject<any>();

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
    this.http.post<Project>(`${this.BASE_URL}${this.endpoint}`, data)
      .subscribe(
        createdProject => {
          this._currentProject$.next(createdProject);
          const projects = this._projects$.value;
          this._projects$.next([createdProject, ...projects]);
        }, err => {
          console.error(err)
          this.errMsg$.next('We are sorry, we got a problem.\nPlease try again later.');
        });
  }

  async getByID(projectID: Project['_id']): Promise<Observable<Project>> {
    return this.http.get<Project>(`${this.BASE_URL}${this.endpoint}/${projectID}`);
  }

  setCurrentProject(project: Project) {
    this._currentProject$.next(project);
  }

  removeProject(projectID:Project['_id']){
    this.http.delete<Project>(`${this.BASE_URL}${this.endpoint}/${projectID}`).subscribe(
      res=>{
        console.log('Project deleted');
      }, error => {
        this.errMsg$.next('Delete project failed');
        console.error(error);
      });
  }
}
