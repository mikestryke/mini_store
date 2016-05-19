var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		show: function(req, res){
			Customer.find({}).sort({date: 'desc'}).limit(3).exec(function(err, customers){
				if(err){
					console.log(err);
					console.log("Error in customer find controllers")
				} else{
					console.log(customers)
					console.log("Inside back end controller")
					res.json(customers);
				}
			})
		}, 
		create: function(req, res){
			var newCustomer = new Customer(req.body);
			newCustomer.save(function(err, customer){
				if(err){
					console.log(err);
				} else {
					res.json(newCustomer)
				}
			})
		},
		deleteCustomer: function(req, res){
			Customer.remove({_id: req.params.id}, function(err, customer){
				if(err){
					console.log(err)
					console.log("There is an area in deleteCustomer in the back end controller!")
				} else{
					res.json(customer);
				}
			})
		}
	}
})();