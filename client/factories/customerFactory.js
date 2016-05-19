myApp.factory('customerFactory', function($http){
	var factory = {};
	var customers = [];

	factory.getCustomers = function(callback){
		$http.get('/customers').then(function(data){
			customers = data.data;
			callback(data.data);
			console.log(data.data)
			console.log("Inside factory getCustomers")
		})
	}
	factory.addCustomer = function(info, callback){
		$http.post('/customers', info).then(function(data){
			if(data.data.error){
				callback(data.data);
			} else{
			customers.push(data.data)
			callback(customers);
			}
		})
	}
	factory.removeCustomer = function(customer, callback){
		console.log("Inside removeCustomer in Factory", customer)
		$http.post('/customers/' + customer._id + '/delete').then(function(data){
			customers.splice(customers.indexOf(customer), 1);
			callback(customers);
		})
	}
	return factory;
})