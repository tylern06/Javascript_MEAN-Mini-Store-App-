var mongoose = require('mongoose');
//go back up 2 folders and to controllers/cats rotues
var customers = require('../controllers/customers.js')
var orders = require('../controllers/orders.js')
var products = require('../controllers/products.js')

module.exports = function(app){
	//display all users
	app.get('/customers', function (req, res){
	  customers.index(req,res);
	})

	app.post('/customers', function (req, res){
		customers.create(req,res);
	})

	app.post('/customers/:id', function (req,res){
		customers.destroy(req,res);
	})
	app.get('/orders', function(req,res){
		orders.index(req,res);
	})
	app.post('/orders', function(req,res){
		console.log('req.body in order controllers', req.body)
		orders.create(req,res);
	})
	app.get('/products', function(req,res){
		products.index(req,res);
	})
	app.post('/products', function(req,res){
		console.log('req.body for products route', req.body)
		products.create(req,res);
	})
  app.post('/products/remove', function(req,res){
  	// console.log('req.body in products subtractInventory', req.body)
  	products.subtractInventory(req,res);
  })
	// app.get('/display', function(req,res){
	// 	names.displayName(req,res);
	// })
	// // Add a new name
	// app.post('/users', function (req, res) {
	// 	//req.body is for form
	// 	//req.params is from url
	// 	console.log('req params in routes',req.body)
	//   names.create(req,res);
	// })

	// app.post('/users/:id/update', function(req,res){
	// 	console.log('req.body in update routes', req.body)
	// 	names.update(req,res)
	// })

	// app.post('/users/:id', function(req,res){
	// 	names.destroy(req,res);
	// })

	// // app.get('/')
	// app.get('/:name', function(req,res){
	// 	names.jsonName(req,res);
	// })



}


