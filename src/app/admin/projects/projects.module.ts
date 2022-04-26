import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from './project-list/data.service';
import { TableStickyHeaderExampleComponent } from './table-sticky-header-example/table-sticky-header-example.component'; 
import { MatMenuModule } from '@angular/material/menu';
import { MigrationManagementComponent } from './switching-tab/migration-management/migration-management.component';
import { ParameterListComponent } from './switching-tab/parameter-list/parameter-list.component';
import { ParameterMigrationListComponent } from './switching-tab/parameter-migration-list/parameter-migration-list.component';
import { LegacySystemComponent } from './legacy-system/legacy-system.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectListComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    ProjectDeleteComponent,
    TableStickyHeaderExampleComponent,
    ParameterListComponent,
    ParameterMigrationListComponent,
    LegacySystemComponent,
    MigrationManagementComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ProjectRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
  ],
  providers:[
    DataService
    ]
})
export class ProjectsModule { }
