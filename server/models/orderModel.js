var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	name: String,
	product: String,
	quantity: Number,
	date: { type: Date, default: Date.now }
});

mongoose.model("Order", OrderSchema);
//Validation
OrderSchema.path('name').required(true, 'Name cannot be blank');
OrderSchema.path('product').required(true, 'Product cannot be blank');
OrderSchema.path('quantity').required(true, 'quantity cannot be blank');