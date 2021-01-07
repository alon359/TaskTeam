import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Imports rxjs
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs';
// Services
import { StorageService } from './storage.service';
// Models
import { User } from '../models/user.model';
// Environment variables
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private key = 'user';
  private END_POINT = 'auth/';
  private BASE_URL = environment.baseUrl;
  // tslint:disable-next-line: variable-name
  private _loggedUser$ = new BehaviorSubject<User>(this._loadLoggedUser());
  public loggedUser$ = this._loggedUser$.asObservable();

  public errAuth$ = new Subject<any>();

  constructor(private http: HttpClient, private storage: StorageService) { }

  private _loadLoggedUser() {
    const loggedUser = this.storage.load(this.key) || null;
    return loggedUser;
  }


  login(email: string, password: string) {
    const data = { email, password };
    this.http.post<User>(`${this.BASE_URL}${this.END_POINT}/login`, data, { withCredentials: true })
      .subscribe(
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
          this.errAuth$.next(error);
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
        this.errAuth$.next(error);
      });
  }

  logout() {
    this.http.get(`${this.BASE_URL}/${this.END_POINT}/logout`);
    this.storage.remove(this.key);
    this._loggedUser$.next(null);
  }

  updateUserLogged(userUpdate) {
    this.storage.store(this.key, userUpdate);
    this._loggedUser$.next(userUpdate);
  }
}
