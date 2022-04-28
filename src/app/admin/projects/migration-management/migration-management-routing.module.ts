import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MigrationManagementComponent } from './migration-management.component';
import { ParamterListComponent } from './paramter-list/paramter-list.component';
import { ParamterMigrationListComponent } from './paramter-migration-list/paramter-migration-list.component';

const routes: Routes = [
  {path:'',component:MigrationManagementComponent},
  {path:'param-list',component:ParamterListComponent},
  {path:'param-mgr-list',component:ParamterMigrationListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MigrationManagementRoutingModule { }
