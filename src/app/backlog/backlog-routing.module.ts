import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './backlog.component';
import { BacklogDetailComponent } from './components/backlog-detail/backlog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BacklogComponent,
    children: [
      {
        path: ':id',
        component: BacklogDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BacklogRoutingModule { }
