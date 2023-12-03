import { Component, OnInit } from '@angular/core';
import { TodoStatusEnum } from '../enums/todo-status.enum';
import { IBoards } from './board.interface';
import { ITodos } from '../interfaces/todo/todo-item.interface';
import { TodoService } from '../services/todo.service';
import { Observable, combineLatest, concat, concatMap, from, map, mergeMap, of, scan, switchMap, switchScan, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  // 'BackLog'    - 0
  // 'Todo'       - 1
  // 'InProgress' - 2
  // 'Done'       - 3

  boards: Array<keyof typeof TodoStatusEnum>;

  todoList$: Observable<ITodos>;
  boards$: Observable<any>;

  constructor(private todoService: TodoService) {
    this.todoList$ = this.todoService.selectTodos();
    this.todoService.loadTodos();

    this.boards = Object.keys(TodoStatusEnum)
    .filter((key) => isNaN(Number(key)))
    .filter((key) => key != 'BackLog')
    .map((name) => name as keyof typeof TodoStatusEnum)


    this.boards$ = from(this.boards)
    .pipe(
      // map((i) => 
      //   i.map(j => {
      //     return { id: 1, title: String(j), tasks: [] }
      //   })
      // )
      // distinctUntilChanged(),
// tap(x => console.log(x)), 
      
      mergeMap((board) => combineLatest([of(board), this.selectTodoByStatus(board)])),
      
      // filter((a) => a.length > 0),
      
      //scan((acc, curr) => [...acc, curr]),
      // map((arr) => 
      // toArray(),



        map(([board, filtered]) => {
          return {
            id: 1, 
            title: board,
            tasks: filtered
          }
        }),
        
        //concatMap(()),
        
        scan((acc: IBoards, curr) => {
          return [...acc, curr]
        }, []),

        tap(_ => console.log(_)),

        
        // toArray(),

      // scan(([bNAcc,fTAcc], [boardName, filteredTasks]) => [ { id: 1, title: String(boardName), tasks: filteredTasks }])
      // .pipe(
      //   map(x => x.map(y => { return { id: 1, title: String(b), tasks: y}}))
      // )),

      // map((boardName) => boardName.titlethis.selectTodoByStatus(x)
      //   .pipe(map(todos => { return {id: 1, title: String(boardName), tasks: todos} as IBoard}))),
      //   tap(_ => console.log(_)),
        
      
      
      
      // scan((acc: any, next) => {
      //     if(!Array.isArray(acc)) acc = []
      //     acc.push(next)
      //     return acc
      //   })



        //, toArray()
      //reduce((acc, val) => [acc, val])
      //map((todos) => )
      
    )
      
      
    //   this.todoList$.pipe(
    //     map((todos) => {
    //       let filtered = todos.filter((todo) => todo.status == TodoStatusEnum[boardName]);
    //       console.log(boardName)
    //       return [{ id: 1, title: String(boardName), tasks: filtered }]
    //     }), scan((a, v) => {
    //     // if(!Array.isArray(a))
    //     // a = [];
      
    //     // a.push(...v); 
    //     return [...a, ...v]
    //   })
    //   ))
    // )


    //TodoStatusEnum[arr[0]]



    // Object.keys(TodoStatusEnum).forEach(console.log)
    //this.ToArray(TodoStatusEnum).forEach(i => console.log(i))

    // this.boards$ = this.todoList$.pipe(
    //   map(items => {
    //     let keys = Object.values(TodoStatusEnum)//.map(i => i as keyof typeof TodoStatusEnum);

    //     keys.forEach(key => {
    //       items.filter(item => item.status === key);

    //     })
    //     return items.filter(item => item.status === TodoStatusEnum.BackLog)
    //   })
    // )
  }

  selectTodoByStatus(status: keyof typeof TodoStatusEnum): Observable<ITodos> {
    return this.todoList$.pipe(map((items => items.filter(item => item.status == TodoStatusEnum[status]))))
  }

  ngOnInit(): void {
    // const arr = Object.keys(TodoStatusEnum)
    // .filter((v) => isNaN(Number(v)))
    // .map((name) => name as keyof typeof TodoStatusEnum);
    // TodoStatusEnum[arr[0]]
  }

  // createBoards(items: ITasks): IBoards {
  //   let idx: number = 0;

  //   for(let i = 0; i < [])

  //   return items.map((item) => {
  //     idx += 1;
      
  //     return {
  //       id: idx++,
  //       title: 
  //     }
  //   })
  // }

  trackByFn = (item: any) => `${item.id}__${item.title}`;
}