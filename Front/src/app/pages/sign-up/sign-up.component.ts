import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUp: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    fName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
    lName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  isWasSubmit = false;

  constructor() { }

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
