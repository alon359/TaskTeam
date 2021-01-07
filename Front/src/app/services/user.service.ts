import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Imports rxjs
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable, Subject } from 'rxjs';

// Environment variables
import { environment } from '../../environments/environment';

// Import model
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private endpoint = 'user';
  private BASE_URL = environment.baseUrl;

  // tslint:disable-next-line: variable-name
  private _users$ = new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable();

  public errUser$ = new Subject<any>();
  public successMsg$ = new Subject<{ param, msg }>();


  constructor(private http: HttpClient, private auth: AuthService) { }

  loadUsers() {
    this.http.get<User[]>(this.BASE_URL + this.endpoint)
      .subscribe(users => {
        this._users$.next(users);
      },
        error => {
          console.error(error);
        });
  }

  async getByID(userID: string): Promise<Observable<User>> {
    return this.http.get<User>(`${this.BASE_URL}${this.endpoint}/${userID}`);
  }

  update(user: User) {
    this.http.put<User>(this.BASE_URL + this.endpoint, user)
      .subscribe(
        userUpdated => {
          this.auth.updateUserLogged(userUpdated);
          this.successMsg$.next({
            param: 'update',
            msg: 'User details updated successfully.'
          }
          );
        },
        error => {
          console.error(error);
          if (Array.isArray(error.error)) {
            error = error.error[0];
          } else {
            console.error(error);
            error = {
              msg: 'We are sorry, we got a problem.\nPlease try again.',
              param: 'unknown',
            };
          }
          this.errUser$.next(error);
        });
  }

  updatePassword(oldPass: string, newPass: string, confirmPass: string) {
    const data = { oldPass, newPass, confirmPass };

    this.http.patch(`${this.BASE_URL}${this.endpoint}/updatePass`, data).subscribe(
      res => {
        this.successMsg$.next({
          param: 'password',
          msg: 'Password updated successfully'
        });
      }, err => {
        if (Array.isArray(err.error)) {
          err = err.error[0];
        } else {
          console.error(err);
          err = {
            param: 'Change',
            msg: 'Password updated failed. \nPlease try again.'
          };
        }
        this.errUser$.next(err);
      });
  }
} // END CLASS
