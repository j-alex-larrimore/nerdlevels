import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

//templateUrl: './main-component.html'
/*
    
*/
@Component({
    selector: 'main-component',
    template: `
	<div class="videosDiv">
    </div>
    <div class="checklistDiv">
    </div>
    <h1>{{htmltest}}</h1>
    <h1>{{othervar}}</h1>
    `,
    styles: [`

    `]
   
})
export class MainComponent implements OnChanges {
	othervar: String = "OtherString";
	@Input() htmltest = "No Bueno";

	ngOnChanges(changes: SimpleChanges){
		for(let html in changes){
			let chng = changes[html];
		    let cur  = JSON.stringify(chng.currentValue);
		    let prev = JSON.stringify(chng.previousValue);
		    console.log(`${html}: currentValue = ${cur}, previousValue = ${prev}`);
		}
	}
}