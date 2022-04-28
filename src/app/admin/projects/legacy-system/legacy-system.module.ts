import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegacySystemRoutingModule } from './legacy-system-routing.module';
import { LegacySystemComponent } from './legacy-system.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LegacySystemComponent
  ],
  imports: [
    CommonModule,
    LegacySystemRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LegacySystemModule { }
