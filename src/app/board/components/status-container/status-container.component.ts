import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input } from '@angular/core';
import { ITodo, ITodos } from 'src/app/interfaces/todo/todo-item.interface';
import { TodoService } from 'src/app/services/todo.service';
import { IBoardDefault, IBoardHead, INITIAL_BOARD } from '../../board.interface';
import { TodoStatusEnum } from 'src/app/enums/todo-status.enum';

@Component({
  selector: 'app-status-container',
  templateUrl: './status-container.component.html',
  styleUrls: ['./status-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusContainerComponent {
  
  @Input('board')
  board: IBoardHead<IBoardDefault> = INITIAL_BOARD;

  @Input('items')
  items: ITodos = [];
  
  @HostBinding('class.drag-here') 
  dragHereBinding: boolean = false;


  @HostListener('dragover', ['$event']) 
  onDragOver(event: any) {
    this.dragHereBinding = true
    event.preventDefault();
  }
  
  @HostListener('dragleave', ['$event']) 
  onDragLeave(event: any) {
    this.dragHereBinding = false
  }
  
  @HostListener('drop', ['$event']) public onDrop(event: any) {
    this.dragHereBinding = false;
    this.todoService.dragEnd(TodoStatusEnum[this.board.code]);
  }
  
  constructor(private todoService: TodoService) { }

  onDragStart(item: ITodo): void {
    this.todoService.dragStart(item)
  }

  trackByFn = (item: any) => `${item.id}__${item.title}`;
}
