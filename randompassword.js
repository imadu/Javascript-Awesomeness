function randomGenerator (str) {
	if (str.length < 5 || str.length >= 20){							
		return "sorry the string can't be used for a password"
	}

	var randomString = Math.random().toString(36).slice(-8);


	return "your passowrd is " + randomString;
 
}

