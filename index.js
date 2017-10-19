function Details (firstname, lastname, state, age, nationality){
	this.firstname = firstname;
	this.lastname = lastname;
	this.state = state;
	this.age = age;
	this.nationality = nationality;
}




Details.prototype.displayDetails = function() {
	// body...
	return this.firstname + " " + this.lastname + " " + this.age + " " + this.state +" "+ this.nationality;
};


var getDetails = new Details(firstname, lastname, state, age, nationality);

function result() {
	return getDetails.displayDetails();
}

