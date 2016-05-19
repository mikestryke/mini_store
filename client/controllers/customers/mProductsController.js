myApp.controller('mProductsController', function($scope, $routeParams, $location, productFactory){
		productFactory.getProducts(function(data){
		$scope.products = data;
		console.log(data);
		console.log("From products controller");
	})
		$scope.addProduct = function(){
		productFactory.addProduct($scope.new_product, function(data){
			$scope.products = data;
			console.log(data)
			console.log("Inside addProduct, in order controller front end")
		})
	}
})