import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import UsersService from 'src/services/graph/users/users.service';
import { User } from './user';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export default class SearcherComponent implements OnInit {
  selectedUser!: string;

  users: Array<User> = [];

  @Output() changeUser = new EventEmitter<string>();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(({ data: { allUsers } }) => {
      this.users = allUsers;
    });
  }

  changeSelect(id_user: string) {
    this.changeUser.emit(id_user);
  }
}
