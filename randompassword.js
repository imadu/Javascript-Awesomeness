function randomGenerator(n){

	var possibleCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
	var password = [];
	for (var i = 0; i < n; i++) {
		
		var rand = Math.floor(Math.random()*possibleCharacters.length);
		var randomChar = possibleCharacters[rand];

		 password.push(randomChar);

		
	}
	
	return password.toString().replace(/\,/g,"");


}
