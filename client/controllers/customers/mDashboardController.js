myApp.controller('mDashboardController', function($scope, $routeParams, $location, customerFactory, orderFactory, productFactory){

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
	customerFactory.getCustomers(function(data){
		$scope.customers = data;
		console.log(data);
		console.log("From customer controller");
	})
})

