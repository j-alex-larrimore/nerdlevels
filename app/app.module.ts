import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { MainComponent } from "./maincomponent/main-component";
import { MenuComponent } from "./menucomponent/menu-component";
import { IndexComponent } from "./index/index";import { routing } from "./app.routing";

@NgModule({
    declarations: [
    	AppComponent,
    	MainComponent,
    	MenuComponent,
        IndexComponent
    ],
    imports: [
    	BrowserModule,
        routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

// 
//  