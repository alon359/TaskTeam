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
  private BASE_URL = environment.baseUrl;

  // tslint:disable-next-line: variable-name
  private _loggedUser$ = new BehaviorSubject<User>(null);
  public loggedUser$ = this._loggedUser$.asObservable();

  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    const data = { email, password };
    this.http.post<User>(`${this.BASE_URL}${this.END_POINT}/login`, data)
      .subscribe(loggedUser => {
        this._loggedUser$.next(loggedUser);
      });
  }

  signUp(user: User) {
    user.phone = '012345678';
    this.http.post<User>(`${this.BASE_URL}${this.END_POINT}/signup`, user)
      .subscribe(loggedUser => {
        this._loggedUser$.next(loggedUser);
      })
  }
}
