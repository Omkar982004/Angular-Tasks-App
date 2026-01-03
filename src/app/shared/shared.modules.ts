import { NgModule } from "@angular/core";
import { Card } from "./card/card";

@NgModule({
    declarations: [Card], //the shared modules declarations use each other 
    exports: [Card] // also available to other modules where this is imported 
})

export class SharedModule {}