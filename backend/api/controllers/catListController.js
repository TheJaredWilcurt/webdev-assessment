'use strict';

const low = require('lowdb');
const shortid = require('shortid');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ cats: []})
  .write();


// Add cat with the given name to the database
exports.createCat = function (req, res){
	var catName = req.body.name;
	var newCat = {id: shortid.generate(), name: catName};
	db.get('cats')
	  .push(newCat)
	  .write();
	res.send(newCat);
};

// Lists all the cats in the database
exports.listAllCats = function (req, res){
	var cats = db.get('cats');
	console.log(cats);
	res.send(cats);
};

// Reads the cat with the given id. 404 error if doesn't exist.
exports.readCat = function (req, res){
	var catId = req.params.id;
	var cat = db.get('cats').find({ id: catId }).value();
	if(cat == undefined)
		res.send(404);
	res.send(cat);
};

// Updates the cat with the given id. 404 error if doesn't exist.
exports.updateCat = function (req, res){
	var catId = req.params.id;
	var updateCatName = req.body.name;

	if(db.get('cats').find({id: catId}).value() == undefined)
		res.send(404);

	var newCat = db.get('cats')
	  .find({ id: catId })
	  .assign({ name: updateCatName})
	  .write();
	res.send(newCat);
};

// Deletes the cat with the given id. 404 error if doesn't exist.
exports.deleteCat = function (req, res){
	var catId = req.params.id;

	if(db.get('cats').find({id: catId}).value() == undefined)
		res.send(404);

	db.get('cats')
	  .remove({ id: catId })
	  .write();
	res.send(204);
};
