import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-container',
  templateUrl: './status-container.component.html',
  styleUrls: ['./status-container.component.scss']
})
export class StatusContainerComponent {
  
  @Input('title')
  title: string = '';

  @Input('items')
  items: Array<any> = [];

  trackByFn = (item: any) => `${item.id}__${item.title}`
}
