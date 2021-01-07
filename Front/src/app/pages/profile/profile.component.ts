import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
// Services
import { AuthService } from 'src/app/services/auth.service';
// Models
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  userProfile: User;
  userLogged: User = null;

  // Subscriptions
  userLoggedSub: Subscription;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    this.userLoggedSub = this.authService.loggedUser$.subscribe(user => { this.userLogged = user; });
    this.userProfile = this.route.snapshot.data.user;
  }

  ngOnDestroy(): void {
    this.userLoggedSub.unsubscribe();
  }

  onBack() {
    this.location.back();
  }

}
