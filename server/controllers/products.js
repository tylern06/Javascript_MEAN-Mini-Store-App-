var mongoose = require('mongoose');
//instantiate customer model
var Product = mongoose.model('Product');
var errors = []

module.exports = {
	index: function(req, res){
		Product.find({}, function(err, products){
			res.json(products);
		});
	},
	create: function(req,res){
		console.log('create product req.body', req.body)
		var product = new Product({name: req.body.name, url: req.body.url, description: req.body.description, quantity: req.body.quantity.quantity})
		product.save(function(err){
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
				console.log('successfully added product')
				res.json({status: true})
			}
		});
	},
	subtractInventory: function(req,res){
		console.log('req.boy id', req.body.product._id)
		console.log('quantity', req.body.quantity.num)
		Product.update({_id:req.body.product._id},{$inc:{quantity: -req.body.quantity.num}}, function(err){
			console.log(err)
			res.redirect('/')
		})
	}
	// destroy: function(req,res){
	// 	console.log('req.params.id in destroy', req.params.id)
	// 	product.remove({_id: req.params.id},function(err,customer){
	// 		console.log('customer in destroy', customer)
	// 		res.redirect('/')
	// 	})
	// }
}
