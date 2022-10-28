import { Component } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export default class SearcherComponent {
  user!: string;

  users: Array<any> = [];

  constructor() {}

  changeSelect(_event: any) {
    debugger;
  }
}
