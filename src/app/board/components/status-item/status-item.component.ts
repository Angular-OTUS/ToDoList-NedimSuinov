import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-status-item',
  templateUrl: './status-item.component.html',
  styleUrls: ['./status-item.component.scss']
})
export class StatusItemComponent {

  showContent: boolean = false;

  @Input('title')
  title: string = '';

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.showContent = ! this.showContent;
  }
}
