import {Component, OnInit} from '@angular/core';
import {MenuItem} from './menu-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.menuItems = [
      new MenuItem('One'),
      new MenuItem('Two'),
      new MenuItem('Three')
    ];
  }

}
