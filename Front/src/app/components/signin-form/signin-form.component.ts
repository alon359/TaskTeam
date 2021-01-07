import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: '[app-signin-form]',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit, OnDestroy {
  userLoggedIn: User = null;

  // Subscriptions
  loggedSub: Subscription;
  errSub: Subscription;

  // Error
  errMsg: string = null;

  isLoading = false;

  isWasSubmit = false;
  logIn = new FormGroup({});
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.logIn = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_]+@[a-zA-Z]+(\\.[a-zA-Z]{2,3})+$')]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loggedSub = this.authService.loggedUser$.subscribe(user => {
      this.userLoggedIn = user;
      if (user) {
        this.router.navigate(['/projects']);
      }
    });


    this.errSub = this.authService.errAuth$.subscribe(
      err => {
        this.isLoading = false;
        this.errMsg = err.msg;
      });
  }

  ngOnDestroy(): void {
    this.loggedSub.unsubscribe();
    this.errSub.unsubscribe();
  }

  // Getter form-controls
  get fc() { return this.logIn.controls; }

  isIncorrectData(): string {
    return this.errMsg;
  }

  onLogin(): void {
    this.isWasSubmit = true;
    this.errMsg = null;

    if (this.logIn.status === 'VALID') {
      this.isLoading = true;
      const { email, password } = this.logIn.value;
      this.authService.login(email, password);
    }
  }

  GetValidationClass(inputName: string): string {
    if (!this.isWasSubmit) {
      return '';
    } else if (this.logIn.controls[inputName].errors || this.errMsg) {
      return 'is-invalid';
    } else {
      return 'is-valid';
    }
  }

}
