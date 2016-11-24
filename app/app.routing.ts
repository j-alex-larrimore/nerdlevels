import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MainComponent } from "./maincomponent/main-component";
import { MenuComponent } from "./menucomponent/menu-component";
import { IndexComponent } from "./index/index";

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'index', pathMatch: 'full' },
	{ path: 'index', component: IndexComponent, children: [
		{ path: 'MainComponent', component: MainComponent, outlet: 'main' },
		{ path: 'MenuComponent', component: MenuComponent, outlet: 'menu' }
	]},
	{ path: 'index', component: IndexComponent}
   
];

export const routing = RouterModule.forRoot(APP_ROUTES);

// { path: 'messages', component: MainComponent },
 //{ path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }

 //{ path: '#', redirectTo: '/', pathMatch: 'full' }



 //  path: 'index#_=_', redirectTo: 'AppComponent', pathMatch: 'full' }
 //{ path: '#_=_', redirectTo: 'AppComponent', pathMatch: 'full' },