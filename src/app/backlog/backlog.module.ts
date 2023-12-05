import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BacklogRoutingModule } from './backlog-routing.module';
import { BacklogComponent } from './backlog.component';
import { SharedModule } from '../components/shared/shared.module';
import { BacklogDetailComponent } from './components/backlog-detail/backlog-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BacklogComponent,
    BacklogDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BacklogRoutingModule
  ]
})
export class BacklogModule { }
