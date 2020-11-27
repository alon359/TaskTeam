import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// Services
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmedValidator } from '../../services/confirmed.validator';
// Models
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUp = new FormGroup({});

  errSub: Subscription;
  userLoggedSub: Subscription;

  isWasSubmit = false;
  isLoading = false;

  // Form massages
  emailUseMsg: string = null;
  errMsg: string = null;

  // Profile image
  imgUrl: string = null;

  constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthService) {
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
    this.errSub = this.authService.errSignUp$.subscribe(err => {
      if (err.param === 'email') {
        this.emailUseMsg = err.msg;
      } else {
        this.errMsg = err.msg;
      }
      this.isLoading = false;
    });

    this.userLoggedSub = this.authService.loggedUser$.subscribe(user => {
      console.log({ user });
      this.isLoading = false;
    });
  }

  // Getter form-controls
  get fc() {
    return this.signUp.controls;
  }

  ngOnDestroy(): void {
    this.errSub.unsubscribe();
    this.userLoggedSub.unsubscribe();
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
      user.imgUlr = this.imgUrl;
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
    console.log({ singup_imgUrl: imgUrl });

    this.imgUrl = imgUrl;
  }

}
