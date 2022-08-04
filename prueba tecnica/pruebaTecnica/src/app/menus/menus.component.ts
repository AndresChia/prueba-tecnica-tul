import { Component } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export default class MenusComponent {
  menu!: Menu;

  constructor() {}
}
