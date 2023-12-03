import { Component, Input } from '@angular/core';
import { ISidebarItems } from './sidebar-item.interface';

@Component({
  selector: 'aside[tb-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input('items')
  items: ISidebarItems = [];

  trackByFn = (item: any) => `${item.id}__${item.title}`
}
