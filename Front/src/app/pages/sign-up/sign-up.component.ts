import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// Services
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmedValidator } from '../../services/confirmed.validator';
// Models
import { User } from 'src/app/models/user.model';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUp = new FormGroup({});
  isWasSubmit = false;

  constructor(private fb: FormBuilder, private userService: UserService, private authService: AuthService) {
    this.signUp = this.fb.group({
      email: ['', [Validators.required, Validators.email,
      Validators.pattern('^[a-zA-Z]([a-zA-Z]|[0-9]|-|_)+@[a-zA-Z]+(\.[a-zA-Z]{2,3})+$')]],
      fName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      lName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      title: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passconfrim: ['', [Validators.required]],
    }, {
      validator: ConfirmedValidator('password', 'passconfrim'),
    });
  }

  ngOnInit(): void {
  }

  // Getter form-controls
  get fc() {
    return this.signUp.controls;
  }

  onSignUp = () => {
    if (this.signUp.status === 'VALID') {
      const user: User = this.signUp.value;
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

}
