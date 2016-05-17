myAppModule.controller('productsController', function ($scope, productFactory){
	$scope.quantity = [];
	for (var i = 1; i <= 25; i++ ){
		$scope.quantity[i-1] = {quantity: i}; 
	}
	function getProducts(){
		productFactory.getProducts(function(data){
			console.log('get products ', data)
			$scope.products = data;
		})
	}

	getProducts()

	$scope.addProduct = function(){
		console.log('product new',$scope.newProduct)
		productFactory.addProduct($scope.newProduct,function (data){
			console.log('data in add product', data)
		})
		$scope.newProduct = {};
		getProducts();
	}


})

