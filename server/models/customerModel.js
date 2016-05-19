var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
	name: String,
	date: { type: Date, default: Date.now }
});

mongoose.model("Customer", CustomerSchema);
//Validation
CustomerSchema.path('name').required(true, 'Name cannot be blank');





