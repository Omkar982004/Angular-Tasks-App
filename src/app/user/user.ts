import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Person } from './user.model';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input() user! : Person;
  @Output () select = new EventEmitter<string>();
  @Input() selected !: boolean;
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  };
  onSelect() {
    this.select.emit(this.user.id);
  }
}
