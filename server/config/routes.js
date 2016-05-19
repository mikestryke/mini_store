var customers = require('./../controllers/customers.js')
var orders = require('./../controllers/orders.js')
var products = require('./../controllers/products.js')

module.exports = function(app){
	app.get('/customers', function(req, res){
		customers.show(req, res);
	});
	app.post('/customers', function(req, res){
		customers.create(req, res);
	});
	app.post('/customers/:id/delete', function(req, res){
		customers.deleteCustomer(req, res);
	})
	app.get('/orders', function(req, res){
		orders.showOrder(req, res);
	})
	app.post('/orders', function(req, res){
		orders.createOrder(req, res);
	})
	app.get('/products', function(req, res){
		products.showProducts(req, res);
	})
	app.post('/products', function(req, res){
		products.createProduct(req, res);
	})
}