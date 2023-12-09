import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { INITIAL_TODO } from 'src/app/components/todo-list/todo.data';
import { ITodo } from 'src/app/interfaces/todo/todo-item.interface';

@Component({
  selector: 'app-status-item',
  templateUrl: './status-item.component.html',
  styleUrls: ['./status-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusItemComponent {

  showContent: boolean = false;

  @Input('task')
  task: ITodo = INITIAL_TODO;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.showContent = ! this.showContent;
  }
}
