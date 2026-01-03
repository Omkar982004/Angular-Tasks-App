import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { Task } from "./tasks/task/task";
import { NewTask } from "./tasks/new-task/new-task";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.modules";

@NgModule({
    declarations: [
        App, 
        Header, 
        User, 
        Task, 
        Tasks, 
        NewTask
    ], //non standalone components these modules work with each other
    bootstrap: [App], // root component of the app
    imports: [ 
        BrowserModule, 
        FormsModule,
        SharedModule
    ] //standalone components
})
export class AppModule {}