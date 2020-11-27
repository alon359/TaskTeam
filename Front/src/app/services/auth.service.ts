import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Imports rxjs
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map, catchError, retry } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private key = 'user';
  private END_POINT = 'auth/';
  private BASE_URL = environment.baseUrl;
  // tslint:disable-next-line: variable-name
  private _loggedUser$ = new BehaviorSubject<User>(null);
  public loggedUser$ = this._loggedUser$.asObservable();

  public errSignUp$ = new Subject<any>();

  constructor(private http: HttpClient, private storage: StorageService, private router: Router) { }


  login(email: string, password: string) {
    const data = { email, password };
    this.http.post<User>(`${this.BASE_URL}${this.END_POINT}/login`, data)
      .subscribe(loggedUser => {
        this.storage.store(this.key, loggedUser);
        this._loggedUser$.next(loggedUser);
      },
        error => {
          console.error(error);
        });
  }

  signUp(user: User) {
    this.http.post<User>(`${this.BASE_URL}${this.END_POINT}/signup`, user).subscribe(
      loggedUser => {
        this.storage.store(this.key, loggedUser);
        this._loggedUser$.next(loggedUser);
      },
      error => {
        if (Array.isArray(error.error)) {
          error = error.error[0];
        } else {
          console.error(error);
          error = {
            location: 'body',
            msg: 'We are sorry, we got a problem.\nPlease try again.',
            param: 'unknown',
          };
        }
        this.errSignUp$.next(error);
      });
  }

  logout() {
    this.http.get(`${this.BASE_URL}/${this.END_POINT}/logout`);
    this.storage.remove(this.key);
    this._loggedUser$.next(null);
  }
}
