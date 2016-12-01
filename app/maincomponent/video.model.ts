export class Video {
	track: string;
	project: string;
	component: string;
	name: string;
	number: number;

	constructor(track: string, project: string, component: string, name: string, number: number) {
		this.track = track;
		this.project = project;
		this.component = component;
		this.name = name;
		this.number = number;
	}
}

