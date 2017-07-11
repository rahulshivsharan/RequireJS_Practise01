define("product",function(){
	var obj = {};
	obj.reserveProduct = reserveProduct;// function
	return obj;

	function reserveProduct(){
		console.log("Function : reserveProduct ");
		
		return true;
	}
});

