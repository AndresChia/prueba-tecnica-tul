import { of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Menu, mockMenu } from './menu';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export default class MenusComponent implements OnInit {
  menu!: Menu;

  observableMenu = of(mockMenu);

  map: Map<string, Menu> = new Map<string, Menu>();

  selectTitle: string = '';

  leafMenus!: { name: string; value: Menu }[];

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.observableMenu.subscribe((response: Array<Menu>) => {
      //
    });

    this.leafMenus = Array.from(this.map, ([name, value]) => ({ name, value }));
  }

  changeSelect({ value }: any) {
    this.menu = value;
  }
}
