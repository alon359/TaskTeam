import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
// Services
import { UserService } from 'src/app/services/user.service';
// Validators
import { ConfirmedValidator } from 'src/app/validators/confirmed.validator';

@Component({
  selector: '[app-update-password]',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit, OnDestroy {
  passwordForm = new FormGroup({});

  isLoading = false;
  isWasSubmit = false;

  incorrectPassMsg: string = null;

  errMsgPassSub: Subscription;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.passwordForm = this.fb.group({
      oldPass: ['', [Validators.required]],
      newPass: ['', [Validators.required, Validators.minLength(8)]],
      confirmPass: ['', [Validators.required]]
    }, {
      validator: ConfirmedValidator('newPass', 'confirmPass'),
    });
  }

  ngOnInit(): void {
    this.errMsgPassSub = this.userService.errUser$.subscribe(
      err => {
        // tslint:disable-next-line: triple-equals
        if (err.param == 'oldPass') {
          this.incorrectPassMsg = 'Incorrect password, please check and try again';
          this.isLoading = false;
        }
      });
  }


  ngOnDestroy(): void {
    this.errMsgPassSub.unsubscribe();
  }

  onChange() {
    this.isWasSubmit = true;

    if (this.passwordForm.status === 'VALID') {
      this.isLoading = true;
      const { oldPass, newPass, confirmPass } = this.passwordForm.value;
      this.userService.updatePassword(oldPass, newPass, confirmPass);
    }
  }

  get fc() { return this.passwordForm.controls; }

  GetValidationClass(inputName: string): string {
    if (!this.isWasSubmit) {
      return '';
    } else if (this.passwordForm.controls[inputName].errors) {
      return 'is-invalid';
    } else {
      return 'is-valid';
    }
  }
}
