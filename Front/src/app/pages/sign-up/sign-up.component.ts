import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';
// Services
import { AuthService } from 'src/app/services/auth.service';
// Models
import { User } from 'src/app/models/user.model';
// Validators
import { ConfirmedValidator } from '../../validators/confirmed.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUp = new FormGroup({});

  isWasSubmit = false;
  isLoading = false;

  // Subscriptions
  errSub: Subscription;
  userLoggedSub: Subscription;

  // Form massages
  emailUseMsg: string = null;
  errMsg: string = null;
  successMsg: string = null;

  // Profile image
  imgUrl: string = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.signUp = this.fb.group({
      email: ['', [Validators.required, Validators.email,
      Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_]+@[a-zA-Z]+(\\.[a-zA-Z]{2,3})+$')]],
      fName: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]+$')]],
      lName: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]+\( [A-Z][a-z]+\)*$')]],
      phone: ['', [Validators.required, Validators.pattern('^0[1-9][0-9]{7,8}$')]],
      title: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passconfrim: ['', [Validators.required]],
    }, {
      validator: ConfirmedValidator('password', 'passconfrim'),
    });
  }

  ngOnInit(): void {
    this.errSub = this.authService.errAuth$.subscribe(err => {
      if (err.param === 'email') {
        this.emailUseMsg = err.msg;
      } else {
        this.errMsg = err.msg;
      }
      this.isLoading = false;
    });

    this.userLoggedSub = this.authService.loggedUser$.subscribe(user => {
      if (user) {
        this.isLoading = false;
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    this.errSub.unsubscribe();
    this.userLoggedSub.unsubscribe();
  }

  // Getter form-controls
  get fc() {
    return this.signUp.controls;
  }

  onSignUp = () => {
    if (this.errMsg) {
      this.errMsg = null;
    }
    if (this.emailUseMsg) {
      this.emailUseMsg = null;
    }

    if (this.signUp.status === 'VALID') {
      this.isLoading = true;
      const user: User = this.signUp.value;
      user.imgUrl = this.imgUrl;
      this.authService.signUp(user);
    } else {
      this.isWasSubmit = true;
    }
  }

  GetValidationClass(inputName: string) {
    if (!this.isWasSubmit) {
      return '';
    } else if (this.signUp.controls[inputName].errors) {
      return 'is-invalid';
    } else {
      return 'is-valid';
    }
  }

  onGotImgUrl(imgUrl: string) {
    this.imgUrl = imgUrl;
    $('.collapse').removeClass('show');
  }

}
