import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { TooltipDirective } from './tooltip/directive/tooltip.directive';
import { TooltipComponent } from './tooltip/container/tooltip.component';

import { NotificationContainerComponent } from './notification/notification-container/notification-container.component';
import { NotificationMessageComponent } from './notification/notification-message/notification-message.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonComponent,
    

    SidebarComponent,

    TooltipDirective,
    TooltipComponent,

    NotificationContainerComponent,
    NotificationMessageComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ButtonComponent,
    SidebarComponent,
    TooltipDirective,
    NotificationContainerComponent,
    LoadingSpinnerComponent,
  ],
})
export class SharedModule { }
