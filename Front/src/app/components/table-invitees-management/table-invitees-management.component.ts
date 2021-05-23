import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
// Services
import { MemberService } from 'src/app/services/member.service';
import { ProjectService } from 'src/app/services/project.service';
import { AuthService } from 'src/app/services/auth.service';
// Models
import { Member } from 'src/app/models/member.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-table-invitees-management',
  templateUrl: './table-invitees-management.component.html',
  styleUrls: ['./table-invitees-management.component.css']
})
export class TableInviteesManagementComponent implements OnInit, OnDestroy {
  project = null;
  loggedUser: User = null;
  projectMembers: Member[] = [];

  // Subscriptions
  projectMembersSub: Subscription;
  projerctSub: Subscription;

  constructor(
    private memberService: MemberService,
    private projectService: ProjectService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.projerctSub = this.projectService.currentProject$.subscribe(
      project => {
        if (project) {
          this.project = project;
          this.memberService.loadProjectMembers(project._id);
        }
      });

    // Members listener
    this.projectMembersSub = this.memberService.members$.subscribe(members => { this.projectMembers = members });

    // Get user-logged
    this.authService.loggedUser$.pipe(take(1)).subscribe(user => { this.loggedUser = user });
  }

  ngOnDestroy(): void {
    this.projectMembersSub.unsubscribe();
    this.projerctSub.unsubscribe();
  }

  onCancel(MemberID: Member['_id']) {
    this.memberService.removeMember(MemberID)
  }
}
