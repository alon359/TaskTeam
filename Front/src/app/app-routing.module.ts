import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

import { from } from 'rxjs';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'signIn', component: SignInComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
