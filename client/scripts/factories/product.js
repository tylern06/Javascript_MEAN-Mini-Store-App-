myAppModule.factory('productFactory', function($http){
	var factory = {};

	factory.getProducts = function (callback){
		$http.get('/products').success(function(output){
			console.log("output from get products", output)
			products = output
			callback(products);
		})
	}

	factory.addProduct = function (data,callback){
		//pass JSON data from form
		$http.post('/products',data).success(function(output){
			console.log('add product output', output)
			// callback(output)
		})
	}

	factory.subtractInventory = function(data){
		console.log('data in subtractInventory', data)
		$http.post('/products/remove', data).success(function(output){
			console.log('subtractInventory output', output)
		})
	}
	// factory.removeCustomer = function (id){
	// 	console.log('customer id', id)
	// 	$http.post('/customers/' + id).success(function(output){

	// 	})
	// }
	return factory;
})
