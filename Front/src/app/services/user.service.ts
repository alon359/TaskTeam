import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Imports rxjs
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject, throwError } from 'rxjs';

// Environment variables
import { environment } from '../../environments/environment';

// Import model
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private endpoint = 'user';
  private BASE_URL = environment.baseUrl;

  // tslint:disable-next-line: variable-name
  private _users$ = new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable();

  constructor(private http: HttpClient) { }

  loadUsers() {
    this.http.get<User[]>(this.BASE_URL + this.endpoint)
      .subscribe(users => {
        console.log('user.service: getUsers \n', { users });
        this._users$.next(users);
      });
  }
  getByID(userID: string) {

  }

  update(user: User) {
    user.phone = '0123456789';
    this.http.put<User>(this.BASE_URL + this.endpoint, user)
      .subscribe((userUpdated) => {
        console.log('user.service: update \n', { userUpdated });
        this._users$.next([userUpdated, ...this._users$.value]);
      });
  }
  remove(userID: string) {

  }

} // END CLASS
