import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {RouterModule, Routes} from '@angular/router';
import {DummyContentComponent} from './content/dummy-content/dummy-content.component';
import {ContentModule} from './content/content.module';

const routes: Routes = [
  {
    path: 'dummy', component: DummyContentComponent,
  },
  { path: '**', redirectTo: 'dummy' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
