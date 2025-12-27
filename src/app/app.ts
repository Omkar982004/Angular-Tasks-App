import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('udemytut');
  protected readonly users = DUMMY_USERS;
  selectedUserId ?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }
  onUserSelectedId(userId: string) {
    this.selectedUserId = userId;
  }
}
