define("purchase",["credit","product"],function(credit,product){

	var obj = {};
	obj.purchaseProduct = purchaseProduct; // function
	return obj;

	function purchaseProduct(){
		console.log("Function : purchaseProduct ");

		var credits = credit.getCredits();
		var isProductReserved = false;

		if(credits > 0){
			isProductReserved = product.reserveProduct();
		}

		return isProductReserved;
	}


});


