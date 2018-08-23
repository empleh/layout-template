import {Component, OnInit} from '@angular/core';
import {MenuItem} from './menu-item';
import {AppRouting} from '../../app.routing';

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
    this.menuItems = AppRouting.menuItems;
  }

}
