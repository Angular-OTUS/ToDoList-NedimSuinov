import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-description',
  templateUrl: './todo-description.component.html',
  styleUrls: ['./todo-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDescriptionComponent {

  @Input('description')
  description: string = '';

}
