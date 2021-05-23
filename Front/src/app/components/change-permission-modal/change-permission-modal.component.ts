import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Member } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';

declare var $: any;

@Component({
  selector: 'app-change-permission-modal',
  templateUrl: './change-permission-modal.component.html',
  styleUrls: ['./change-permission-modal.component.css']
})
export class ChangePermissionModalComponent implements OnInit, OnChanges {
  @Input() member: Member;
  isLoading = false;
  errorMsg: String = null;
  successMsg: string = null;
  selectOption: Member['permission'];
  // Subscriptions
  errMsgSub: Subscription;
  succMsgSub: Subscription;
  //  Permission options
  options = ['Normal', 'Admin'];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.selectOption = this.member ? this.member.permission : 'admin';

    // When member removed
    this.succMsgSub = this.memberService.successMsg$.subscribe(() => {
      this.successMsg = 'Member\'s permission updated';
      setTimeout(() => { $('#memberPermissionModal').modal('hide') }, 700);
      setTimeout(this.onClose, 1200);
    });

    // If got error
    this.errMsgSub = this.memberService.errMsg$.subscribe(() => {
      this.errorMsg = 'Sorry, we got problem please try later.'
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.member.firstChange) {
      const member = changes.member.currentValue;
      this.selectOption = member.permission;
    }
  }

  ngOnDestroy(): void {
    this.errMsgSub.unsubscribe();
    this.succMsgSub.unsubscribe();
  }

  onSubmit() {
    this.isLoading = true;
    this.member.permission = this.selectOption;

    this.memberService.updateMember(this.member);
  }

  onClose() {
    this.isLoading = false;
    this.errorMsg = null;
    this.successMsg = null;
  }
}
