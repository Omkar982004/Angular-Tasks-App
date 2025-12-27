import { Component, Input} from '@angular/core';
import { TaskOfUser} from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({required: true}) task!: TaskOfUser;
  
  constructor(private taskService: TaskService){};

  onCompleteTask() {
    this.taskService.removeTask(this.task.id)
  }
}
