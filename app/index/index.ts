import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Video } from "../maincomponent/video.model";

@Component({
    selector: 'index-component',
    templateUrl: './index.html'
})
export class IndexComponent {
	video: Video = new Video('Web Development', 'Resume', 'new+folder', 'test2.mp4', 1);
	private sub: any;

	constructor(private route: ActivatedRoute){}

	ngOnInit(){
		this.sub = this.route.params.subscribe(params=> {
			if(params['vidName'] != null){
				this.video = new Video('Web Development', 'Resume', 'new+folder', params['vidName'], +params['vidNum']);
			}
		});
	}


	/*loadVid(vid){
		this.video = new Video(vid[0], vid[1], vid[2], vid[3]);
	}*/
}