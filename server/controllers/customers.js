var mongoose = require('mongoose');
//instantiate customer model
var Customer = mongoose.model('Customer');
var errors = []

module.exports = {
	index: function(req, res){
		Customer.find({}, function(err, customers){
			// res.json([{name:'Tyler'}, {name:'Joe'}]);
			res.json(customers);
		});
	},
	create: function(req,res){
		console.log('create req.body', req.body)
		var customer = new Customer({name: req.body.name})
		customer.save(function(err){
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
	},
	destroy: function(req,res){
		console.log('req.params.id in destroy', req.params.id)
		Customer.remove({_id: req.params.id},function(err,customer){
			console.log('customer in destroy', customer)
			res.redirect('/')
		})
	}
}
