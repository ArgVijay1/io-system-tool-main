import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectRoutingModule } from './project-routing.module';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { MatCardContent } from '@angular/material/card';
import { ProjectDataService } from './project-list/data.service';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectListComponent,
    ProjectCreateComponent,
    DialogOverviewComponent,
    ],
  imports: [
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    CommonModule,
    ProjectRoutingModule,

    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers:[
    ProjectDataService
  ]

})
export class ProjectsModule { }
