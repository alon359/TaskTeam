import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Imports rxjs
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map, catchError, retry } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private END_POINT = 'auth/';

  // tslint:disable-next-line: variable-name
  private _loggedUser$ = new BehaviorSubject<User>(null);
  private loggedUser$ = this._loggedUser$.asObservable();

  constructor(private http: HttpClient) { }

  getLoggedUser = () => this.loggedUser$;


  login(email: string, password: string) {
    const data = { email, password };
    return this.http.post<User>(`${environment.baseUrl}${this.END_POINT}/login`, data)
      .pipe(map(user => {
        this._loggedUser$.next(user);
        return user;
      }, err => {
        return null;
      }));
  }
}
