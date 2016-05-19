var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		createProduct: function(req, res){
			var new_product = new Product(req.body);
			new_product.save(function(err, product){
				if(err){
					console.log(err);
				} else {
					res.json(new_product)
				}
			})
		},
		showProducts: function(req, res){
			Product.find({}).sort({date: 'desc'}).limit(5).exec(function(err, products){
				if(err){
					console.log(err);
					console.log("In side showProducts in back end controller!")
				} else{
					res.json(products);
				}
			})
		}
	}
})();
