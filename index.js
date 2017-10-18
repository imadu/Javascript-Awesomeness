var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var state = document.getElementById('state');
var age = document.getElementById('age')
var nationality = document.getElementById('nationality');


function Details (firstname, lastname, state, age, nationality){
	this.firstname = firstname;
	this.lastname = lastname;
	this.state = state;
	this.age = age;
	this.language = nationality;
}


displayDetails.prototype = Details();


Details.prototype.displayDetails = function() {
	// body...
	return this.firstname + "" + this.lastname + "" + this.age + "" + this.state +""+ this.nationality;
};


var getDetails = new Details();

function result() {
	return getDetails.displayDetails();
}

