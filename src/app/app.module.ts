import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { SideNavModule } from './side-nav/side-nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    SideNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
