import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {RouterModule, Routes} from '@angular/router';
import {ContentModule} from './content/content.module';
import {FormsModule} from '@angular/forms';
import {AppRouting} from './app.routing';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(AppRouting.routes),
    ContentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
