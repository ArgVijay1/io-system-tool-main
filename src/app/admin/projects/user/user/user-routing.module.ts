import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UserManagementComponent } from '../user-management/user-management.component';


const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
  },
  {
    path:'create-user',
    component:CreateUserComponent
  }
 
];
@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
