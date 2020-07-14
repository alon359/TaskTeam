import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userLoggedIn = null;

  logIn = new FormGroup({});

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.logIn = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  }


  // Getter form-controls
  get fc() {
    return this.logIn.controls;
  }

  ngOnInit(): void {
  }

  onLogin() {
    const email = this.fc.email.value;
    const password = this.fc.password.value;
    this.authService.login(email, password)
      .subscribe(
        res => console.log(res)
      );

  }

}
