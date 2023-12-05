import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITodos } from 'src/app/interfaces/todo/todo-item.interface';

@Component({
  selector: 'app-status-container',
  templateUrl: './status-container.component.html',
  styleUrls: ['./status-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusContainerComponent {
  
  @Input('title')
  title: string = '';

  @Input('items')
  items: ITodos = [];

  trackByFn = (item: any) => `${item.id}__${item.title}`
}
