import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegacySystemComponent } from './legacy-system.component';

const routes: Routes = [
  {
    path:'',component:LegacySystemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegacySystemRoutingModule { }
