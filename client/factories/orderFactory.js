myApp.factory('orderFactory', function($http){
	var factory = {};
	var orders = [];

	factory.getOrders = function(callback){
		$http.get('/orders').then(function(data){
			orders = data.data;
			callback(data.data);
			console.log(data.data)
			console.log("Inside factory getOrders")
		})
	}
	factory.addOrder = function(info, callback){
		$http.post('/orders', info).then(function(data){
			orders.push(data.data)
			callback(orders);
		})
	}
	return factory;
})