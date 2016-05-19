myApp.controller('mOrderController', function($scope, $routeParams, $location, orderFactory, customerFactory, productFactory){
	$scope.orders = [];
	//grabbing data from customerFactory
	customerFactory.getCustomers(function(data){
		$scope.customers = data;
		console.log(data);
		console.log("From order controller, getting customers")
	})
	productFactory.getProducts(function(data){
		$scope.products = data;
		console.log(data);
		console.log("From products controller");
	})


	orderFactory.getOrders(function(data){
		$scope.orders = data;
		console.log(data);
		console.log("From order controller, getting orders");
	})

	$scope.addOrder = function(){
		orderFactory.addOrder($scope.new_order, function(data){
			$scope.orders = data;
			console.log(data)
			console.log("Inside addOrder, in order controller front end")
		})
	}
})
