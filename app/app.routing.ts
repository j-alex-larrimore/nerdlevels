import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MainComponent } from "./maincomponent/main-component";
import { MenuComponent } from "./menucomponent/menu-component";
import { IndexComponent } from "./index/index";

const APP_ROUTES: Routes = [
	{ path: 'index/:vidName/:project/:track', component: IndexComponent },
	{ path: '', redirectTo: 'index', pathMatch: 'full' },
	{ path: 'index', pathMatch: 'full', component: IndexComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);
