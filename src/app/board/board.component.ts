import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoStatusEnum } from '../enums/todo-status.enum';
import { IBoards } from './board.interface';
import { ITodos } from '../interfaces/todo/todo-item.interface';
import { TodoService } from '../services/todo.service';
import { Observable, combineLatest, from, map, mergeMap, of, scan } from 'rxjs';

// 'BackLog'    - 0
// 'Todo'       - 1
// 'InProgress' - 2
// 'Done'       - 3

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {

  boards: Array<keyof typeof TodoStatusEnum>;
  todoList$: Observable<ITodos>;
  boards$: Observable<any>;

  constructor(private todoService: TodoService) {
    this.todoList$ = this.todoService.selectTodos();
    
    this.boards = Object.keys(TodoStatusEnum)
    .filter((key) => isNaN(Number(key)))
    .filter((key) => key != 'BackLog')
    .map((name) => name as keyof typeof TodoStatusEnum)

    this.boards$ = from(this.boards) 
    .pipe(

      // "1" --- "2" --- "3"
      mergeMap((board) => combineLatest(
        [of(board), 
        this.selectTodoByStatus(board)]
      )), 
      
      // ["1", [...]] --- ["2", [...] --- ["3", [...]]
      map(([board, filtered]) => {
        return {
          id: 1, 
          title: board,
          tasks: filtered
        }
      }),  
      
      // {...} --- {...} --- {...} 
      scan((acc: IBoards, curr) => {
        const idx = acc.findIndex(i => i.title == curr.title);
        
        if(idx != -1) {
          acc[idx].tasks = curr.tasks;
          return [...acc]
        }

        return [...acc, curr]
      }, []), 
      
      // result => [{...}, {...}, {...}]
    )
  }

  selectTodoByStatus(status: keyof typeof TodoStatusEnum): Observable<ITodos> {
    return this.todoList$.pipe(map((items => items.filter(item => item.status == TodoStatusEnum[status]))))
  }

  ngOnInit(): void {
    this.todoService.loadTodos();
  }

  trackByFn = (item: any) => `${item.id}__${item.title}`;
}