import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MigrationManagementRoutingModule } from './migration-management-routing.module';
import { MigrationManagementComponent } from './migration-management.component';
import { ParamterListComponent } from './paramter-list/paramter-list.component';
import { ParamterMigrationListComponent } from './paramter-migration-list/paramter-migration-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MigrationManagementComponent,
    ParamterListComponent,
    ParamterMigrationListComponent
  ],
  imports: [
    CommonModule,
    MigrationManagementRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    RouterModule
  ],
  exports:[
    ParamterMigrationListComponent
  ]
})
export class MigrationManagementModule { }
