var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
	name: String,
	url: String,
	description: String,
	quantity: Number
});

mongoose.model("Product", ProductSchema);
//Validation
ProductSchema.path('name').required(true, 'Name cannot be blank');
ProductSchema.path('description').required(true, 'Description cannot be blank');
ProductSchema.path('quantity').required(true, 'Quantity cannot be blank');