import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
//Services
import { MemberService } from 'src/app/services/member.service';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
// Models
import { Member } from 'src/app/models/member.model';
import { Task } from 'src/app/models/task.model';
import { Project } from 'src/app/models/project.model';
import { first } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-one-project',
  templateUrl: './one-project.component.html',
  styleUrls: ['./one-project.component.css']
})
export class OneProjectComponent implements OnInit, OnDestroy {
  currentProject: Project;
  projectTasks: Task[];
  userMember: Member;
  isLoading = true;
  taskMsg: String = null;
  projectMember: Member;
  // Subscriptions
  tasksSub: Subscription;
  taskMsgSub: Subscription;

  constructor(
    private memberService: MemberService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Sets the project (Save the project for later)
    this.projectService.setCurrentProject(this.route.snapshot.data.project);

    // Gets the project (When "setCurrentProject" will end)
    this.projectService.currentProject$.pipe(
      // If have currentProject will do the subscribe
      first(currentProject => currentProject ? true : false)).subscribe(this._projectInitialize.bind(this));

    // Listener to project's task
    this.tasksSub = this.taskService.tasks$.subscribe(
      tasks => {
        if (this.projectTasks) this.isLoading = false;
        this.projectTasks = tasks;
      });

    // Task massages
    this.taskMsgSub = this.taskService.taskMsg$.subscribe(this._showMessage.bind(this));
  }

  ngOnDestroy(): void {
    this.taskMsgSub.unsubscribe();
    this.tasksSub.unsubscribe();
  }

  setProjectMember(memberID: Member['_id']) {
    this.projectMember = this.memberService.getProjectMemberById(memberID);
  }

  // Initializing the project (Load members and tasks of project)
  private _projectInitialize(project) {
    this.currentProject = project;
    const projectID = project._id
    // Load the project's members
    this.memberService.loadProjectMembers(projectID);
    this.memberService.members$.pipe(
      // Once the project's members have been received will save the userLogged's member
      first(members => members.length > 0)).subscribe((members) => {
        // Save userLogged's member for later
        this.memberService.saveUserMember();

        // When the user's member saved will get from the service it
        this.memberService.userMember$.pipe(first(member => member ? true : false))
          .subscribe(member => { this.userMember = member });
      });

    // Load the project's tasks
    this.taskService.loadTasks({ projectID });
  }

  // Displays received messages for 3 seconds
  private _showMessage(msg) {
    this.taskMsg = msg;
    // Will remove the message from the screen after 3 seconds
    setTimeout(() => {
      $('.taskMsg').alert('close')
      // After "fade" animation of the message will end
      setTimeout(() => { this.taskMsg = null }, 2000);
    }, 3000);
  }

  onAddTask(): void {
    this.taskService.setCurrentTask(null);
  }
}
