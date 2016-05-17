var mongoose = require('mongoose');

//create order schema

var CustomerSchema = new mongoose.Schema({
	name: {type: String, unique: true}
	},
	{
		timestamps: true
	})

CustomerSchema.path("name").required(true, "Name cannot be blank");

var Order = mongoose.model("Customer", CustomerSchema);