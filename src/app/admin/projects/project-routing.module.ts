import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [{
      path:'',
      component: ProjectListComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
