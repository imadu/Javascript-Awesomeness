function returnAnagram(str){
	if (str.length === 1) {
		return str;
	}

	var anagram = [];

	for (var i = 0; i < str.length; i++) {
		var n = [0];
		var _new = returnAnagram(str.slice(1, str.length));
	for (var j = 0; j < _new.length; j++) {
		anagram.push(n + _new[j]);
	}
	str = str.substr(1, str.length -1) + n;
	}

	return anagram;
}

