import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, delayWhen, map, switchMap } from 'rxjs';
import { ITodo } from 'src/app/interfaces/todo/todo-item.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-backlog-detail',
  templateUrl: './backlog-detail.component.html',
  styleUrls: ['./backlog-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BacklogDetailComponent {

  currentTodo$: Observable<ITodo | undefined>

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService) {
      
    this.currentTodo$ = this.activatedRoute.params.pipe(
      map(params => Number(params['id'])),
      delayWhen((id) => this.todoService.loadTodosAsync()),
      switchMap((id) => this.todoService.selectTodoById(id)),
    )
  }

}
