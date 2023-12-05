import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoStatusEnum } from '../enums/todo-status.enum';
import { IBoardDefault, IBoardHead, IBoards, IBoardsHead } from './board.interface';
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

  boardsInitial: IBoardsHead<IBoardDefault>;
  todoList$: Observable<ITodos>;
  boards$: Observable<IBoards<IBoardDefault>>;

  constructor(private todoService: TodoService) {
    this.todoList$ = this.todoService.selectTodos();
    
    this.boardsInitial = Object.keys(TodoStatusEnum)
    .filter((key) => isNaN(Number(key)))
    .filter((key) => key != 'BackLog')
    .map((name) => {
      return this.getBoardNameByStatus(name as IBoardDefault) || { code: 'Todo', name: 'Todo' }
    })

    this.boards$ = from(this.boardsInitial) 
    .pipe(

      // "1" --- "2" --- "3"
      mergeMap((board) => combineLatest(
        [of(board), 
        this.selectTodoByStatus(board.code)]
      )), 
      
      // ["1", [...]] --- ["2", [...] --- ["3", [...]]
      map(([board, filtered]) => {
        return {
          code: board.code,
          title: board.name,
          tasks: filtered
        }
      }),  
      
      // {...} --- {...} --- {...} 
      scan((acc: IBoards<IBoardDefault>, curr) => {
        const idx = acc.findIndex(i => i.code == curr.code);
        
        if(idx != -1) {
          acc[idx].tasks = curr.tasks;
          return [...acc]
        }

        return [...acc, curr]
      }, []), 
      
      // result => [{...}, {...}, {...}]
    )
  }

  ngOnInit(): void {
    this.todoService.loadTodos();
  }

  getBoardNameByStatus(status: IBoardDefault): IBoardHead<IBoardDefault> | undefined {
    const boardNames: IBoardsHead<IBoardDefault> = [
      {
        code: 'BackLog',
        name: $localize`:board|In the page board. Name column:BackLog`
      },
      {
        code: 'Done',
        name: $localize`:board|In the page board. Name column:Done`
      },
      {
        code: 'InProgress',
        name: $localize`:board|In the page board. Name column:In Progress`
      },
      {
        code: 'Todo',
        name: $localize`:board|In the page board. Name column:Todo`
      }
    ];

    return boardNames.find(b => b.code === status);
  }

  selectTodoByStatus(status: keyof typeof TodoStatusEnum): Observable<ITodos> {
    return this.todoList$.pipe(map((items => items.filter(item => item.status == TodoStatusEnum[status]))))
  }

  trackByFn = (item: any) => `${item.id}__${item.title}`;
}