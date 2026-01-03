import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { Card } from "./shared/card/card";
import { Task } from "./tasks/task/task";
import { DatePipe, NgFor, NgIf } from "@angular/common";
import { NewTask } from "./tasks/new-task/new-task";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        App, 
        Header, 
        User, 
        Card, 
        Task, 
        Tasks, 
        NewTask
    ], //non standalone components
    bootstrap: [App], // root component of the app
    imports: [ 
        BrowserModule, 
        FormsModule
    ] //standalone components
})
export class AppModule {}