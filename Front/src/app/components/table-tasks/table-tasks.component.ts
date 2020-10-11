import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-tasks',
  templateUrl: './table-tasks.component.html',
  styleUrls: ['./table-tasks.component.css']
})
export class TableTasksComponent implements OnInit {
  @Input() tableObj: any; // Table object
  @Input() tableIdx: string; // Table index

  isClose = true; // If the table-task close

  constructor() {
  }

  ngOnInit(): void {
  }

  /** Scroll the screen to the tasks-table when it opens */
  scrollToTable(): null {
    this.isClose = !this.isClose;
    // If the tasks-table is close end the function
    if (this.isClose) { return; }
    const className = 'table' + this.tableIdx;
    setTimeout(() => {
      // Get element tasks-table
      const tableEl = document.querySelector('.' + className);
      // Scroll the window  to the tasks-table
      tableEl.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' });
    }, 300);
  }

}
