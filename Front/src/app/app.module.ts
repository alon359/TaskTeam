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
import { CurrentTasksComponent } from './pages/current-tasks/current-tasks.component';
import { TableTasksComponent } from './components/table-tasks/table-tasks.component';
import { RowTaskComponent } from './components/row-task/row-task.component';
import { MenuLoginComponent } from './components/menu-login/menu-login.component';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { ProjectRowComponent } from './components/project-row/project-row.component';
import { OneProjectComponent } from './pages/one-project/one-project.component';



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
