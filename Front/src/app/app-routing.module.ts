import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CurrentTasksComponent } from './pages/current-tasks/current-tasks.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';

const routes: Routes = [
  { path: 'tasks', pathMatch: 'full', component: CurrentTasksComponent },
  { path: 'projects', pathMatch: 'full', component: MyProjectsComponent },
  { path: 'signup', pathMatch: 'full', component: SignUpComponent },
  { path: 'signIn', pathMatch: 'full', component: SignInComponent },
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: '**', component: NotFoundComponent },
  { path: '/404', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
