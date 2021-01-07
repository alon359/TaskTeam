import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css']
})
export class MenuLoginComponent implements OnInit, OnDestroy {
  userLogged: User;
  // Subscriptions
  userLoggedSub: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userLoggedSub = this.authService.loggedUser$.subscribe((user: User) => { this.userLogged = user; });
  }

  ngOnDestroy(): void {
    this.userLoggedSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
