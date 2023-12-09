import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { StatusContainerComponent } from './components/status-container/status-container.component';
import { StatusItemComponent } from './components/status-item/status-item.component';


@NgModule({
  declarations: [
    BoardComponent,
    StatusContainerComponent,
    StatusItemComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
