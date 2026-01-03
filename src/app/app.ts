import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
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
