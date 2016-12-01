export class User {

	//can use ? for optional parameters
	constructor(public profileId: string,
				 public fullName: string,
				 public watchedVideos: string[]){}


	
}




/*
//Create schema for storing user data
const chatUser = new Mongoose.Schema({
    profileId: String,
    fullName: String,
    profilePic: String,
    watchedVideos:[String],
    subscription: {type: Boolean, default: false},
    subscriptionEnd: {type: Date, default: now }
});
*/