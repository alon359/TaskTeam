import { Router } from '@angular/router';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';

  constructor(private router: Router) { }

  // A function for move from page to page
  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

}
