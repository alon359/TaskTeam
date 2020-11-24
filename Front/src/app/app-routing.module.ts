import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CurrentTasksComponent } from './pages/current-tasks/current-tasks.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { OneProjectComponent } from './pages/one-project/one-project.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { SettingComponent } from './pages/setting/setting.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';



const routes: Routes = [
  { path: 'tasks', pathMatch: 'full', component: CurrentTasksComponent },
  { path: 'projects', pathMatch: 'full', component: MyProjectsComponent },
  { path: 'project', pathMatch: 'full', component: OneProjectComponent },
  { path: 'signup', pathMatch: 'full', component: SignUpComponent },
  { path: 'signIn', pathMatch: 'full', component: SignInComponent },
  { path: 'profile', pathMatch: 'full', component: ProfileComponent },
  { path: 'createProject', pathMatch: 'full', component: CreateProjectComponent },
  { path: 'addtask', pathMatch: 'full', component: AddTaskComponent },
  { path: 'setting', pathMatch: 'full', component: SettingComponent },
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'forget', pathMatch: 'full', component: ForgetPasswordComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
