import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit(): void {
    this.user = {
      _id: '123214',
      email: 'example@email.com',
      firstName: 'Lior',
      lastName: 'Ganel',
      title: 'Manager',
      phone: '05044654654654',
      imgUlr: 'https://randomuser.me/api/portraits/men/20.jpg'
    }

  }

}
