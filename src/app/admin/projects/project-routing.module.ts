import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegacySystemComponent } from './legacy-system/legacy-system.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectsComponent } from './projects.component';
import { MigrationManagementComponent } from './switching-tab/migration-management/migration-management.component';
import { ParameterListComponent } from './switching-tab/parameter-list/parameter-list.component';
import { ParameterMigrationListComponent } from './switching-tab/parameter-migration-list/parameter-migration-list.component';
import { UserModule } from './user/user/user.module';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [{
      path:'',
      component: ProjectListComponent
    },
    {path:'legacy', component:LegacySystemComponent}
    /*{path:'switch-tab', component:MigrationManagementComponent},
    {path:'tab1',component:ParameterListComponent},
    {path:'tab2',component:ParameterMigrationListComponent}*/
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),UserModule],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
