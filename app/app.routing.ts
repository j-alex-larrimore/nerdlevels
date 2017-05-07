import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MainComponent } from "./maincomponent/main-component";
import { MenuComponent } from "./menucomponent/menu-component";
import { IndexComponent } from "./index/index";


/*
	{ path: 'index/test', component: MainComponent, outlet: 'menu'},
	{ path: 'index',  component: IndexComponent, children: [
		{ path: 'MainComponent', component: MainComponent, outlet: 'main' },
		{ path: 'MenuComponent', component: MenuComponent, outlet: 'menu' }
	]},

		{ path: 'index/:vidName/:vidNum', component: IndexComponent },

	{ path: '**', component: IndexComponent}
*/
const APP_ROUTES: Routes = [
	{ path: 'index/:vidName/:project/:track', component: IndexComponent },
	{ path: '', redirectTo: 'index', pathMatch: 'full' },
	{ path: 'index', pathMatch: 'full', component: IndexComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);

// { path: 'messages', component: MainComponent },
 //{ path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }

 //



 //  path: 'index#_=_', redirectTo: 'AppComponent', pathMatch: 'full' }
 //{ path: '#_=_', redirectTo: 'AppComponent', pathMatch: 'full' },
