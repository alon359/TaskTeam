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
import { SettingComponent } from './pages/setting/setting.component';
// Guards
import { AuthGuard } from './services/auth.guard';
// Resolves
import { ProfileResolveService } from './services/resolves/profile.resolve.service';
import { OneProjectResolveService } from './services/resolves/one-project.resolve.service';



const routes: Routes = [
  // Home page
  { path: '', pathMatch: 'full', component: HomePageComponent },

  // My tasks / Current tasks page
  { path: 'tasks', pathMatch: 'full', canActivate: [AuthGuard], component: CurrentTasksComponent },

  // My projects page
  { path: 'projects', pathMatch: 'full', canActivate: [AuthGuard], component: MyProjectsComponent },

  // project page
  { path: 'project/:projectID', pathMatch: 'full', canActivate: [AuthGuard], resolve: { project: OneProjectResolveService }, component: OneProjectComponent },

  // Signup page 
  { path: 'signup', pathMatch: 'full', component: SignUpComponent },

  // User profile page
  { path: 'profile/:userID', pathMatch: 'full', resolve: { user: ProfileResolveService }, component: ProfileComponent },

  // Create new project page
  { path: 'createProject', pathMatch: 'full', canActivate: [AuthGuard], component: CreateProjectComponent },

  // Settings/Edit profile page
  { path: 'setting', pathMatch: 'full', canActivate: [AuthGuard], component: SettingComponent },

  //  Not found page (Error 404)
  { path: 'notfound', pathMatch: 'full', component: NotFoundComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
