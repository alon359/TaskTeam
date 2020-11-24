import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-pass-email-card',
  templateUrl: './forget-pass-email-card.component.html',
  styleUrls: ['./forget-pass-email-card.component.css']
})
export class ForgetPassEmailCardComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() msgErr: string;
  @Input() isEmailSended: string;

  constructor() { }

  ngOnInit(): void {
  }

}
