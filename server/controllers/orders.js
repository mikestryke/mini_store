var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function() {
	return {
		createOrder: function(req, res){
			var new_order = new Order(req.body);
			new_order.save(function(err, order){
				if(err){
					console.log(err);
				} else {
					res.json(new_order)
				}
			})
		},
		showOrder: function(req, res){
			Order.find({}).sort({date: 'desc'}).limit(3).exec(function(err, orders){
				if(err){
					console.log(err);
				} else{
					res.json(orders);
				}
			})
		}
	}
})();
