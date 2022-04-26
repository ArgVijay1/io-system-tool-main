import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { MigrationManagementComponent } from '../migration-management/migration-management.component';
import { ParameterListComponent } from '../parameter-list/parameter-list.component';
import { ParameterMigrationListComponent } from '../parameter-migration-list/parameter-migration-list.component';

const routes:Routes=[
    {
      path: 'migration-mgmt',
      component: MigrationManagementComponent,
      children: [
        {path:'param-list',component:ParameterListComponent},
        {path:'param-mgr-list',component:ParameterMigrationListComponent}
      ],
    },
    
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchRoutingModule { }
