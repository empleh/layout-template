import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import {AppCommonModule} from '../common/app-common.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule
  ],
  declarations: [OneComponent, TwoComponent, ThreeComponent]
})
export class ContentModule { }
