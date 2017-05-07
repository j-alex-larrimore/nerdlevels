import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Video } from "../maincomponent/video.model";

@Component({
    selector: 'index-component',
    templateUrl: './index.html'
})
export class IndexComponent {
	video: Video = new Video('Introduction');
	private sub: any;

	constructor(private route: ActivatedRoute){}

	ngOnInit(){
		this.sub = this.route.params.subscribe(params=> {
			if(params['vidName'] != null){
				this.video = new Video(params['vidName']);
			}
		});
	}

}