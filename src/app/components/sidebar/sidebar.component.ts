import { Component } from '@angular/core';

@Component({
  selector: 'aside[tb-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items = [
    { id: 0, title: 'Backlog', path: 'backlog', idx: 0 },
    { id: 1, title: 'Board', path: 'board', idx: 1 }
  ]

  trackByFn = (item: any) => `${item.id}__${item.title}`
}
