import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// Services
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
// Models
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit, OnDestroy {
  userLogged: User = null;
  imgUrl: string = null;

  isLoading = false;
  isWasSubmit = false;
  isChangePass = false;

  // Subscriptions
  userLoggedSub: Subscription;
  successMsgSub: Subscription;
  errSub: Subscription;
  errMsgPassSub: Subscription;

  // From groups
  userFrom = new FormGroup({});

  // From massages
  msgError: string = null;
  successMsg: string = null;
  alreadyUseMsg: string = null;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.userFrom = this.fb.group({
      email: ['', [Validators.required, Validators.email,
      Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_]+@[a-zA-Z]+(\\.[a-zA-Z]{2,3})+$')]],
      fName: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]+$')]],
      lName: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]+\( [A-Z][a-z]+\)*$')]],
      phone: ['', [Validators.required, Validators.pattern('^0[1-9][0-9]{7,8}$')]],
      title: ['', [Validators.required, Validators.pattern('( |[0-9]|[a-zA-Z]|-)+')]]
    });
  }

  ngOnInit(): void {
    this.userLoggedSub = this.authService.loggedUser$.subscribe(
      user => {
        this.userLogged = user;
        this.resetForm();
      });

    this.errSub = this.userService.errUser$.subscribe(
      err => {
        // tslint:disable-next-line: curly
        if (this.successMsg) this.successMsg = null;

        if (err.param === 'email') {
          this.alreadyUseMsg = err.msg;
        } else if (err.param !== 'oldPass') {
          $('.collapse').removeClass('show');
          this.msgError = err.msg;
        }
        this.isLoading = false;
      });

    this.successMsgSub = this.userService.successMsg$.subscribe(
      res => {
        // tslint:disable-next-line: curly
        if (this.msgError) this.msgError = null;

        this.successMsg = res.msg;
        if (res.param === 'update') {
          setTimeout(() => {
            this.router.navigateByUrl('/profile/' + this.userLogged._id);
          }, 1000);
        } else {
          $('.collapse').removeClass('show');
          this.isChangePass = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.userLoggedSub.unsubscribe();
    this.successMsgSub.unsubscribe();
  }

  onGotImgUrl(imgUrl: string) {
    this.imgUrl = imgUrl;
    $('.collapse').removeClass('show');
  }

  get fc() {
    return this.userFrom.controls;
  }

  onSubmit() {
    if (this.msgError) {
      this.msgError = null;
    }
    if (this.alreadyUseMsg) {
      this.alreadyUseMsg = null;
    }

    if (this.userFrom.status === 'VALID') {
      this.isLoading = true;
      const dataForm: User = this.userFrom.value;
      dataForm._id = this.userLogged._id;
      dataForm.imgUrl = this.imgUrl;
      this.userService.update(dataForm);
    } else {
      this.isWasSubmit = true;
    }
  }

  GetValidationClass(inputName: string) {
    if (!this.isWasSubmit) {
      return '';
    } else if (this.userFrom.controls[inputName].errors) {
      return 'is-invalid';
    } else {
      return 'is-valid';
    }
  }

  resetForm() {
    this.userFrom.setValue({
      email: this.userLogged.email,
      fName: this.userLogged.fName,
      lName: this.userLogged.lName,
      phone: this.userLogged.phone,
      title: this.userLogged.title,
    });
    this.imgUrl = this.userLogged.imgUrl;
  }

}
