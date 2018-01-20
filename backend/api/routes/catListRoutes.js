'use strict';
module.exports = function(app){
	const myCatList = require("../controllers/catListController");

	app.route('/cats')
		.post(myCatList.createCat)
		.get(myCatList.listAllCats);

	app.route('/cats/:id')
		.get(myCatList.readCat)
		.put(myCatList.updateCat)
		.delete(myCatList.deleteCat);

};