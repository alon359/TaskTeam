import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { name: "admin", isAdmin: true }
  ]
  loggedinUser;
  constructor() { }

  doLogin(name) {
    const user = this.users.find(user => user.name === name);
    this.loggedinUser = user;
    return user;
  }
}
