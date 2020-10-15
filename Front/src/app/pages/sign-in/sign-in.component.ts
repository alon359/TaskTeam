import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  userLoggedIn: User = null;
  subscription: Subscription;

  // Incorrect password or email
  isIncorrectPassOrMail = false;

  isWasSubmit = false;
  logIn = new FormGroup({});

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.logIn = this.fb.group({
      email: ['', [Validators.required, Validators.email,
      Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')
      ]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    this.subscription = this.authService.getLoggedUser()
      .subscribe(user => {
        this.userLoggedIn = user;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Getter form-controls
  get fc() { return this.logIn.controls; }

  isIncorrectData(): boolean {
    return this.isIncorrectPassOrMail;
  }

  onLogin(): void {
    this.isWasSubmit = true;
    this.isIncorrectPassOrMail = false;
    const { email, password } = this.logIn.controls;

    if (email.status === 'VALID' && password.status === 'VALID') {
      this.authService.login(email.value, password.value)
        .subscribe(user => {
          console.log('User logged-in\n', { user });
        }, err => {
          console.log('user not exists');
          this.isIncorrectPassOrMail = true;
        });
    }
  }

  GetValidationClass(inputName: string): string {
    if (!this.isWasSubmit) {
      return '';
    } else if (this.logIn.controls[inputName].errors || this.isIncorrectPassOrMail) {
      return 'is-invalid';
    } else {
      return 'is-valid';
    }
  }

}
