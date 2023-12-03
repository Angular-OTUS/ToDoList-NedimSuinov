import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ISidebarItems } from '../components/shared/sidebar/sidebar-item.interface';
import { TodoStatusEnum } from '../enums/todo-status.enum';
import { ITodos } from '../interfaces/todo/todo-item.interface';
import { TodoService } from '../services/todo.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BacklogComponent implements OnInit {

  backlogTodos$: Observable<ISidebarItems>;

  constructor(private todoServie: TodoService) {
    this.backlogTodos$ = this.todoServie.selectTodos().pipe(
      map(todos => todos.filter(todo => todo.status == TodoStatusEnum.BackLog)),
      map(todosBacklog => this.createSidebarItems(todosBacklog))
    )
  }

  ngOnInit(): void {
    this.todoServie.loadTodos()
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
