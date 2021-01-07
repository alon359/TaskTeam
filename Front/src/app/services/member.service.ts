import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
// Models
import { Member } from '../models/member.model';
// Services
import { AuthService } from './auth.service';
// Environment variables
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private BASE_URL = environment.baseUrl;
  private endpoint = 'member';

  private _members$ = new BehaviorSubject<Member[]>([]);
  public members$ = this._members$.asObservable();

  private _userMember$ = new BehaviorSubject<Member>(null);
  public userMember$ = this._userMember$.asObservable();

  public errMsg$ = new Subject<any>();

  constructor(private http: HttpClient, private auth: AuthService) { }

  async loadProjectMembers(projectID) {
    (await this.getMembers({ projectID })).subscribe(members => {
      this._members$.next(members);
    }, error => { console.error(error) });
  }

  async getMembers(filter: { [key: string]: string } = {}): Promise<Observable<Member[]>> {
    return await this.http.get<Member[]>(`${this.BASE_URL}${this.endpoint}`, { params: filter })
  }

  createMember(member) {
    console.log('Service: ', member);
    this.http.post<Member>(`${this.BASE_URL}${this.endpoint}`, member).subscribe(
      createdMember => {
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

  loadUserMember() {
    this.auth.loggedUser$.subscribe(
      loggedUser => {
        this._members$.subscribe(
          members => {
            const userMember = members.find(member => loggedUser._id == member.userID._id);
            console.log({ userMember });
            this._userMember$.next(userMember);
          });
      });
  }
}
