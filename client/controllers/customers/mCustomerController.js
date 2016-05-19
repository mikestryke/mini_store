myApp.controller('mCustomerController', function($scope, $routeParams, $location, customerFactory){
	customerFactory.getCustomers(function(data){
		$scope.customers = data;
		console.log(data);
		console.log("From customer controller");
	})

	$scope.addCustomer = function(){
		customerFactory.addCustomer($scope.newCustomer, function(data){
			if(data.error){
				$scope.error = data.message
			} else{
			$scope.customers = data;
			}
		})
	}
	$scope.removeCustomer = function(customer){
		customerFactory.removeCustomer(customer, function(data){
			$scope.customers = data;
			console.log(data);
		})
	}
})