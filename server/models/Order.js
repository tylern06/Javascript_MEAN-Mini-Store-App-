var mongoose = require('mongoose');

//create order schema

var OrderSchema = new mongoose.Schema({
		name: {type: String},
		quantity: {type: Number, min: 1, max: 25},
		product: {type: String}
	},
	{
		timestamps: true
	})

OrderSchema.path("name").required(true, "Name cannot be blank");
OrderSchema.path("product").required(true, "Product cannot be blank");
var Order = mongoose.model("Order", OrderSchema)