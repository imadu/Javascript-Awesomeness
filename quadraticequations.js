function quadEqun(a,b,c) {
	

	var eqn = ((b*b) - (4*a*c));

	if (eqn >= 0) {

		var sol1 = (((- b) + Math.sqrt(eqn))/(2*a));
		var sol2 = (((- b) - Math.sqrt(eqn))/(2*a));

	} else {
		return "equation could not be resolved";
	}

	return "The solutions are " + sol1 + " and "+ sol2;

}