import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { SharedModule } from "./shared/shared.modules";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [
        App, 
        Header, 
        User, 
    ], //non standalone components these modules work with each other
    bootstrap: [App], // root component of the app
    imports: [ 
        BrowserModule, 
        SharedModule,
        TasksModule
    ] //standalone components
})
export class AppModule {}