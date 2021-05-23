import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
// Models
import { Member } from '../models/member.model';
import { Project } from '../models/project.model';
// Services
import { AuthService } from './auth.service';
// Environment variables
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  // API URL address
  private BASE_URL = environment.baseUrl;
  // End point of URL API 
  private endpoint = 'member';

  private _members$ = new BehaviorSubject<Member[]>([]);
  public members$ = this._members$.asObservable();


  private _userMember$ = new BehaviorSubject<Member>(null);
  public userMember$ = this._userMember$.asObservable();

  // Subjects for messages
  public successMsg$ = new Subject<any>();
  public errMsg$ = new Subject<any>();

  constructor(private http: HttpClient, private auth: AuthService) { }

  async loadProjectMembers(projectID: Project['_id']) {
    (await this.getMembers({ projectID })).subscribe(members => {
      this._members$.next(members);
    }, error => { console.error(error) });
  }

  async getMembers(filter: { [key: string]: string } = {}): Promise<Observable<Member[]>> {
    return await this.http.get<Member[]>(`${this.BASE_URL}${this.endpoint}`, { params: filter })
  }

  createMember(member) {
    this.http.post<Member>(`${this.BASE_URL}${this.endpoint}`, member).subscribe(
      createdMember => {
        this.successMsg$.next('New member created');
        this._members$.next([...this._members$.value, createdMember])
      }, error => {
        if (Array.isArray(error.error)) {
          error = error.error[0];
        } else {
          console.error(error)
          error = {
            msg: 'We are sorry, we got a problem.\nPlease try again later.',
            param: 'unknown',
          };
        }
        this.errMsg$.next(error);
      });
  }

  updateMember(member: Member) {
    this.http.put<Member>(`${this.BASE_URL}${this.endpoint}`, member).subscribe(
      memberUpdated => {
        // Updates member
        const members = this._members$.value.map(member => {
          return (member._id == memberUpdated._id) ? memberUpdated : member;
        });
        this._members$.next(members);
        this.successMsg$.next('Member updated successfully.');
      }, error => {
        console.error(error);
        this.errMsg$.next('Member updated failed.');
      });
  }

  removeMember(memberID: Member['_id']) {
    this.http.delete<Member>(`${this.BASE_URL}${this.endpoint}/${memberID}`).subscribe(
      res => {
        const members = this._members$.value.filter(member => member._id != memberID);
        this._members$.next(members);
        this.successMsg$.next('Member removed.');
      }, error => {
        console.error(error);
        this.errMsg$.next('Remove meber field.');
      });
  }

  getProjectMemberById(memberID: Member['_id']) {
    const projectMember: Member = this._members$.value.find(member => member._id == memberID);
    return projectMember;
  }

  saveUserMember() {
    this.auth.loggedUser$.subscribe(
      loggedUser => {
        this._members$.subscribe(
          members => {
            const userMember = members.find(member => loggedUser._id == member.userID._id);
            this._userMember$.next(userMember);
          });
      });
  }
}
