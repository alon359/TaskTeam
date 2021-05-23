import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// Models
import { Member } from 'src/app/models/member.model';
// services
import { MemberService } from 'src/app/services/member.service';

declare var $: any;


@Component({
  selector: 'app-remove-member-modal',
  templateUrl: './remove-member-modal.component.html',
  styleUrls: ['./remove-member-modal.component.css']
})
export class RemoveMemberModalComponent implements OnInit, OnDestroy {
  @Input() member: Member;

  isLoading = false;
  errorMsg: String = null;

  // Subscriptions
  errMsgSub: Subscription;
  succMsgSub: Subscription;


  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    // When member removed
    this.succMsgSub = this.memberService.successMsg$.subscribe(() => {
      $('#removeMemberModal').modal('hide');
      this.isLoading = false;
    });

    // If got error
    this.errMsgSub = this.memberService.errMsg$.subscribe(() => {
      this.errorMsg = 'Sorry, we got problem please try later.'
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.errMsgSub.unsubscribe();
    this.succMsgSub.unsubscribe();
  }

  removeMember() {
    this.isLoading = true;
    this.memberService.removeMember(this.member._id);
  }

  onClose() {
    this.isLoading = false;
    this.errorMsg = null;
  }
}
