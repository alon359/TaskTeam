import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Routing Module
import { AppRoutingModule } from './app-routing.module';
// app component
import { AppComponent } from './app.component';
// Components
import { TableTasksComponent } from './components/table-tasks/table-tasks.component';
import { RowTaskComponent } from './components/row-task/row-task.component';
import { MenuLoginComponent } from './components/menu-login/menu-login.component';
import { ProjectRowComponent } from './components/project-row/project-row.component';
import { ImgProfileInputComponent } from './components/img-profile-input/img-profile-input.component';
import { CropperImgComponent } from './components/cropper-img/cropper-img.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';
import { ProjectMembersModalComponent } from './components/project-members-modal/project-members-modal.component';
import { TableInviteesManagementComponent } from './components/table-invitees-management/table-invitees-management.component';
import { DeleteProjectModalComponent } from './components/delete-project-modal/delete-project-modal.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { RenameProjectModalComponent } from './components/rename-project-modal/rename-project-modal.component';
import { DeleteTaskModalComponent } from './components/delete-task-modal/delete-task-modal.component';
import { InviteMemberModalComponent } from './components/invite-member-modal/invite-member-modal.component';
import { ChangePermissionModalComponent } from './components/change-permission-modal/change-permission-modal.component';
// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CurrentTasksComponent } from './pages/current-tasks/current-tasks.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { OneProjectComponent } from './pages/one-project/one-project.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { SettingComponent } from './pages/setting/setting.component';
// Pipes
import { PhonePipe } from './pipes/phone.pipe';
// Services
import { CustomInterceptor } from './services/httpInterceptor';
import { RemoveMemberModalComponent } from './components/remove-member-modal/remove-member-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
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
    AddTaskModalComponent,
    SettingComponent,
    SigninFormComponent,
    ImgProfileInputComponent,
    CropperImgComponent,
    UpdatePasswordComponent,
    AddMemberComponent,
    PhonePipe,
    ProjectMembersModalComponent,
    TableInviteesManagementComponent,
    DeleteProjectModalComponent,
    TaskFormComponent,
    ProjectFormComponent,
    RenameProjectModalComponent,
    DeleteTaskModalComponent,
    InviteMemberModalComponent,
    RemoveMemberModalComponent,
    ChangePermissionModalComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
