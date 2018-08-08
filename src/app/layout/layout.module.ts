import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {LayoutComponent} from './layout-wrapper/layout.component';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';
import {ContentComponent} from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [HeaderComponent, SidebarComponent, FooterComponent, LayoutComponent, ContentComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {
}
