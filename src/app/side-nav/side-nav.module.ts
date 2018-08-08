import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderToolbarModule } from '../header-toolbar/header-toolbar.module';
import { MaterialModule } from '../material/material.module';
import { SideNavComponent } from './side-nav.component';

const routes: Routes = [
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HeaderToolbarModule
  ],
  declarations: [
    SideNavComponent
  ],
  exports: [
    SideNavComponent
  ]
})
export class SideNavModule { }
