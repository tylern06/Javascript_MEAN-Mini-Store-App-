var mongoose = require('mongoose');

var Order = mongoose.model('Order');

module.exports = {
	index: function(req,res){
		Order.find({}, function(err,orders){
			res.json(orders)
			// res.json({name:'Tyler', product:"Porsche", quantity: 4})
		});
	},
	create: function(req,res){
		console.log('orders create', req.body)
		var order = new Order({name: req.body.name.name, product: req.body.product.name, quantity: req.body.quantity.num})
		order.save(function(err){
			console.log('err in create', err)
			if(err){
				errors = []
				console.log('something went wrong')
				for (var x in err.errors){
					errors.push(err.errors[x].message)
				}
				// console.log('errors in create', errors)
				res.json({status: false, errors: errors})
			} else {
				console.log('successfully added name')
				res.json({status: true})
			}
		});
	}
}