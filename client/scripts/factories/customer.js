myAppModule.factory('customerFactory', function($http){
	var customers = [];
	var factory = {};
	factory.getCustomers = function (callback){
		$http.get('/customers').success(function(output){
			console.log("output from getCustomers", output)
			customers = output
			callback(customers);
		})
	}

	factory.addCustomer = function (data,callback){
		//pass JSON data from form
		$http.post('/customers',data).success(function(output){
			console.log('add customer output', output)
			callback(output)
		})
	}

	factory.removeCustomer = function (id){
		console.log('customer id', id)
		$http.post('/customers/' + id).success(function(output){

		})
	}
	return factory;
})
