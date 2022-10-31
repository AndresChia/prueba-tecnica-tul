import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import UsersService from 'src/services/graph/users/users.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export default class SearcherComponent implements OnInit {
  user!: string;

  users: Array<any> = [];

  @Output() changeUser = new EventEmitter<any>();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(({ data: { allUsers } }) => {
      this.users = allUsers;
    });
  }

  changeSelect(id_user: any) {
    this.changeUser.emit(id_user);
  }
}
