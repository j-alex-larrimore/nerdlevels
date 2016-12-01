import { Component, Input } from '@angular/core';
import { Video } from "./video.model";


@Component({
    selector: 'main-component',
    templateUrl: './main-component.html'
})
export class MainComponent {
	@Input() video: Video;

}