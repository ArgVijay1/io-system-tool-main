import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from '../user-management/user-management.component';
import { UserComponent } from '../user.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      //{path:'tab1',component:},
      {path:'userman',component:UserManagementComponent}
    ],
  },
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
