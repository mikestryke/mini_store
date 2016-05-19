myApp.factory('productFactory', function($http){
	var factory = {};
	var products = [];

	factory.getProducts = function(callback){
		$http.get('/products').then(function(data){
			customers = data.data;
			callback(data.data);
			console.log(data.data)
			console.log("Inside factory getProducts")
		})
	}
	factory.addProduct = function(info, callback){
		$http.post('/products', info).then(function(data){
			products.push(data.data)
			callback(products);
		})
	}
	return factory;
})