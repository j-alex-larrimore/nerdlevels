import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'menu-component',
    templateUrl: './menu-component.html'
})
export class MenuComponent {
	@Output() vidClicked = new EventEmitter();

	/*loadVid(vidNum: number){
		
		this.vidClicked.emit(['Platformer', 'RandoName', 'El Tres', vidNum]);
	} */

	/*loadVid(){
		//this.vidClicked.emit(['Platformer', 'new+folder', params['vidName'], params['vidNum']);
	}*/
}