import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeaderToolbarComponent } from './header-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [HeaderToolbarComponent],
  exports: [
    HeaderToolbarComponent
  ]
})
export class HeaderToolbarModule { }
