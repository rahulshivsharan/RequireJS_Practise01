function purchaseProduct(){
	console.log("Function : purchaseProduct ");

	var credits = getCredits();
	var isProductReserved = false;

	if(credits > 0){
		isProductReserved = reserveProduct();
	}

	return isProductReserved;
}