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
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

// Guards
import { AuthGuard } from './services/auth.guard';

// Resolves
import { ProfileResolveService } from './services/profile.resolve.service';



const routes: Routes = [
  { path: 'tasks', pathMatch: 'full', canActivate: [AuthGuard], component: CurrentTasksComponent },
  { path: 'projects', pathMatch: 'full', canActivate: [AuthGuard], component: MyProjectsComponent },
  { path: 'project', pathMatch: 'full', canActivate: [AuthGuard], component: OneProjectComponent },
  { path: 'signup', pathMatch: 'full', component: SignUpComponent },
  { path: 'profile/:userID', pathMatch: 'full', resolve: { user: ProfileResolveService }, component: ProfileComponent },
  { path: 'createProject', pathMatch: 'full', canActivate: [AuthGuard], component: CreateProjectComponent },
  { path: 'addtask', pathMatch: 'full', canActivate: [AuthGuard], component: AddTaskComponent },
  { path: 'setting', pathMatch: 'full', canActivate: [AuthGuard], component: SettingComponent },
  { path: 'forget', pathMatch: 'full', component: ForgetPasswordComponent },
  { path: 'reset', pathMatch: 'full', component: ResetPasswordComponent },
  { path: 'notfound', pathMatch: 'full', component: NotFoundComponent },
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
