import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// app component
import { AppComponent } from './app.component';

// Components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TableTasksComponent } from './components/table-tasks/table-tasks.component';
import { RowTaskComponent } from './components/row-task/row-task.component';
import { MenuLoginComponent } from './components/menu-login/menu-login.component';
import { ProjectRowComponent } from './components/project-row/project-row.component';
import { ForgetPassEmailCardComponent } from './components/forget-pass-email-card/forget-pass-email-card.component';
import { ForgetPassEmailSendedComponent } from './components/forget-pass-email-sended/forget-pass-email-sended.component';
import { ImgProfileInputComponent } from './components/img-profile-input/img-profile-input.component';
import { CropperImgComponent } from './components/cropper-img/cropper-img.component';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CurrentTasksComponent } from './pages/current-tasks/current-tasks.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { OneProjectComponent } from './pages/one-project/one-project.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { SettingComponent } from './pages/setting/setting.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    SignUpComponent,
    SignInComponent,
    CurrentTasksComponent,
    TableTasksComponent,
    RowTaskComponent,
    MenuLoginComponent,
    NotFoundComponent,
    MyProjectsComponent,
    ProjectRowComponent,
    OneProjectComponent,
    ProfileComponent,
    CreateProjectComponent,
    AddTaskComponent,
    SettingComponent,
    ForgetPasswordComponent,
    ForgetPassEmailCardComponent,
    ForgetPassEmailSendedComponent,
    SigninFormComponent,
    ImgProfileInputComponent,
    CropperImgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
