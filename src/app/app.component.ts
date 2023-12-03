import { Component } from '@angular/core';
import { ISidebarItems } from './components/shared/sidebar/sidebar-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sidebarItems: ISidebarItems = [
    { id: 0, title: 'Backlog', path: 'backlog' },
    { id: 1, title: 'Board', path: 'board' }
  ]

}
