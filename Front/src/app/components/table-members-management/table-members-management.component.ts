import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// Services
import { MemberService } from 'src/app/services/member.service';
// Models
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-table-members-management',
  templateUrl: './table-members-management.component.html',
  styleUrls: ['./table-members-management.component.css']
})
export class TableMembersManagementComponent implements OnInit, OnDestroy {
  projectMembers: Member[] = [];
  projectMembersSub: Subscription;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    // Members listener
    this.projectMembersSub = this.memberService.members$.subscribe(members => { this.projectMembers = members });
  }

  ngOnDestroy(): void {
    this.projectMembersSub.unsubscribe();
  }

}
