import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  users: User[];
  subscription: Subscription;

  constructor(private elementRef: ElementRef, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.loadUsers();

    this.subscription = this.userService.users$.subscribe(users => {
      this.users = users;
      console.log({ users });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
