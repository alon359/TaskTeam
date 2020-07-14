import { Injectable } from '@angular/core';
import { HttpService } from './http.service';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private END_POINT = 'auth/';

  public loggedInUser$ = null;
  constructor(private httpService: HttpService) { }

  public login(email: any = '', password: any = '') {
    const body = { email, password };
    const user = this.httpService.post(`${this.END_POINT}/login`, body);
    console.log(user)
    this.loggedInUser$ = user;
    return user;
  }
}
