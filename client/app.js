var myApp = angular.module('Myapp', ['ngRoute']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/', 
			{
				controller: 'mDashboardController',
				templateUrl: "partials/customers/dashboard.html"
			})
			.when('/orders',
			{
				controller: 'mOrderController',
				templateUrl: 'partials/customers/orders.html'
			})
			.when('/customers',
			{	
				controller: 'mCustomerController',
				templateUrl: 'partials/customers/customers.html'
			})
			.when('/products',
			{	
				controller: 'mProductsController',
				templateUrl: 'partials/customers/products.html'
			})
			.otherwise({
				redirectTo: "/"
			})
	})
}());