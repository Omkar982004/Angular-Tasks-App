import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NgFor, NgIf } from '@angular/common';
import  DUMMY_TASKS  from '../dummy-tasks';
import { NewTask } from "./new-task/new-task";
import { NewTaskOfUser } from './new-task/new-task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NgFor, NewTask, NgIf], 
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})

export class Tasks {
  @Input() id ?: string;
  @Input() name ?: string;
  protected tasks = DUMMY_TASKS;
  isAddingTask = false;

  constructor(private taskService: TaskService){};

  get selectedUserTasks() {
    return this.taskService.getTasksByUserId(this.id!);
  };

  onTaskCompleted(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  cancelAddTask() {
    this.isAddingTask = false;
  }

  addTask(task: NewTaskOfUser) {
    this.taskService.addTask(task, this.id!);
    this.isAddingTask = false;
  }

}
