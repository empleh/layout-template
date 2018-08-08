import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {RouterModule, Routes} from '@angular/router';
import {ContentModule} from './content/content.module';
import {OneComponent} from './content/one/one.component';
import {TwoComponent} from './content/two/two.component';
import {ThreeComponent} from './content/three/three.component';

const routes: Routes = [
  { path: 'One', component: OneComponent },
  { path: 'Two', component: TwoComponent },
  { path: 'Three', component: ThreeComponent },
  { path: '**', redirectTo: 'One' }
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
