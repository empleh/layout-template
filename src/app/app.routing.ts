import {Routes} from '@angular/router';
import {OneComponent} from './content/one/one.component';
import {TwoComponent} from './content/two/two.component';
import {ThreeComponent} from './content/three/three.component';
import {MenuItem} from './layout/sidebar/menu-item';

export class AppRouting {
  static routes: Routes = [
    {path: 'One', component: OneComponent},
    {path: 'Two', component: TwoComponent},
    {path: 'Three', component: ThreeComponent},
    {path: '**', redirectTo: 'One'}
  ];

  static menuItems = [
    new MenuItem('One'),
    new MenuItem('Two'),
    new MenuItem('Three')
  ];
}
