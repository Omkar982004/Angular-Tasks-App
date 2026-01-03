import { NgModule } from "@angular/core";
import { Tasks } from "./tasks";
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { SharedModule } from "../shared/shared.modules";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [Tasks, Task, NewTask],
    exports: [Tasks], // we are only using Tasks component outside directly
    imports: [SharedModule, FormsModule, CommonModule]
})
export class TasksModule{

}