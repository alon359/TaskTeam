import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmedValidator } from '../../services/confirmed.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUp: FormGroup = new FormGroup({});
  isWasSubmit = false;

  constructor(private fb: FormBuilder) {
    this.signUp = fb.group({
      email: ['', [Validators.required, Validators.email]],
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      lName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required]],
    }, {
      validator: ConfirmedValidator('password', 'passwordConfirm'),
    });
  }

  ngOnInit(): void {
  }

  // Getter form-controls
  get fc() {
    return this.signUp.controls;
  }

  onSignUp = () => {
    this.isWasSubmit = true;
    console.log('submit on');
    console.log(this.signUp.controls);
    console.log(('required' in this.signUp.controls.email.errors));
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
