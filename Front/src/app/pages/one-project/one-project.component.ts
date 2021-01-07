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

@Component({
  selector: 'app-one-project',
  templateUrl: './one-project.component.html',
  styleUrls: ['./one-project.component.css']
})
export class OneProjectComponent implements OnInit, OnDestroy {
  currentProject: Project;

  projectTasks: Task[];
  userMember: Member;

  currentProjectSub: Subscription;
  tasksSub: Subscription;
  userMemberSub: Subscription;

  constructor(
    private memberService: MemberService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Set project
    this.projectService.setCurrentProject(this.route.snapshot.data.project);

    // Get project
    this.currentProjectSub = this.projectService.currentProject$.subscribe(project => {
      this.currentProject = project;
      if (this.currentProject) {
        const projectID = project._id
        // Load members project
        this.memberService.loadProjectMembers(projectID);
        // Load user-members
        this.memberService.members$.subscribe((members) => {
          if (members.length) {
            this.memberService.loadUserMember();
          }
        });
        // Load tasks project
        this.taskService.loadTasks({ projectID });
      }
    });

    // Get tasks project
    this.tasksSub = this.taskService.tasks$.subscribe(
      tasks => {
        this.projectTasks = tasks;
        console.log({ tasks });

      });

    // Get member user
    this.userMemberSub = this.memberService.userMember$.subscribe(
      member => { this.userMember = member; });

  }

  ngOnDestroy(): void {
    this.currentProjectSub.unsubscribe();
  }



}
