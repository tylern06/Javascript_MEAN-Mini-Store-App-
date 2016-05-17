myAppModule.controller('customersController', function ($scope, customerFactory, $location){
	//call factory object method getPlayer
	function getCustomers(){
		customerFactory.getCustomers(function(data){
			$scope.customers = data;
			console.log("scope customers", data)
		})			
	}

	getCustomers()
	//$scope.addCustomer method is invoked by ng-Click
	$scope.addCustomer = function(){
		$scope.errors = [];
		console.log('customer list before add', $scope.customers)
		exist = $scope.customers.map(function(obj) { return obj.name; }).indexOf($scope.newCustomer.name);
		console.log('index of name', exist)
		//checks if user name already exist
		if(exist == -1){
			customerFactory.addCustomer($scope.newCustomer, function (data){
				console.log('data in add customer', data)
				if(data.status == false){
					$scope.errors = data.errors
				}
			})
			$scope.newCustomer = {};
			getCustomers()	
		} else {
			$scope.errors = "User already exist"
			console.log('user exist error', $scope.errors)
			$scope.newCustomer = {};
		}
	}
	$scope.removeCustomer = function(customer_id){
		console.log('in remove')
		customerFactory.removeCustomer(customer_id);
		getCustomers();
	}
})