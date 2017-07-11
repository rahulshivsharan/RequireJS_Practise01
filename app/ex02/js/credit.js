define("credit",function(){

	var obj = {};
	obj.getCredits = getCredits;// function
	return obj;


	function getCredits(){
		console.log("Function : getCredits ");

		var credits = 100;

		return credits;
	}
});

