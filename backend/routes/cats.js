const express = require('express')
const router = express.Router()

router.get('/cats',(req, res) => {
    res.send('Show me the cats')
}) 

// POST to /cats creates an object, and returns the created object with a generated id
// POST to /cats a second time creates a new object, with a unique id
// GET to /cats returns a list of cats that contains the previously created cat object
// GET to /cats/:id returns the same object created from the first POST request when called with the generated id
// GET to /cats/:id returns a 404 status code for a cat that does not exist
// PUT to /cats/:id updates the record identified by :id
// PUT to /cats/:id with an invalid id responds with a 404 status code
// DELETE to /cats/:id removes the record
// DELETE to /cats/:id with an invalid id responds with a 404 status code
module.exports = router