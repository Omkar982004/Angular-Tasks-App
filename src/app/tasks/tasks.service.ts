import dummyTasks from "../dummy-tasks";
import { NewTaskOfUser } from "./new-task/new-task.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TaskService {
  private tasks = dummyTasks;

  constructor(){
    const tasks = localStorage.getItem('tasks');
    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  };
  getTasksByUserId(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }
  
  addTask(task: NewTaskOfUser, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id != taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}