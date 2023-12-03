import { Component, OnInit } from '@angular/core';
import { ISidebarItems } from '../components/shared/sidebar/sidebar-item.interface';
import { TodoStatusEnum } from '../enums/todo-status.enum';
import { ITodos } from '../interfaces/todo/todo-item.interface';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  items: ITodos = [
    { id: 0, text: 'Some task', description: '0', status: TodoStatusEnum.Done },
    { id: 1, text: 'Some task', description: '1', status: TodoStatusEnum.Done }
  ]

  sidebarItems: ISidebarItems = []

  ngOnInit(): void {
    this.sidebarItems = this.createSidebarItems(this.items)
  }

  createSidebarItems(items: ITodos): ISidebarItems {
    return items.map((item) => {
      return {
        id: item.id,
        path: String(item.id),
        title: item.text
      }
    })
  }
}
