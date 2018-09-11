const express = require('express')
const router = express.Router()

let catsList = []

let currentId

function generateUniqueId() {
    currentId = catsList.length + 1;
    return currentId
}

let newCat = (id, name) => {
    return {id: id, name: name}
}

// POST to /cats creates an object, and returns the created object with a generated id
// POST to /cats a second time creates a new object, with a unique id
router.post('/cats',(req, res) => {
    if (catsList.length == 0) {
        generateUniqueId()
        catsList.push(newCat(currentId, 'Mittens'))
        res.json(newCat(currentId, 'Mittens'))
    } else {
        generateUniqueId()
        catsList.push(newCat(currentId, 'Mittens II'))
        res.json(newCat(currentId, 'Mittens II'))
    }
})

// GET to /cats returns a list of cats that contains the previously created cat object
router.get('/cats', (req, res) => {
    res.send(catsList)
})

// GET to /cats/:id returns the same object created from the first POST request when called with the generated id
router.get('/cats/:id', (req, res) => {
    let id = req.params.id
    res.json(catsList[id])
    console.log(catsList[id])
})
// GET to /cats/:id returns a 404 status code for a cat that does not exist
router.get('/cats/:id', (req, res) => {
    if (!catsList.find(req.params.id)) {
        res.status(404).send('404');
    }
})

// PUT to /cats/:id updates the record identified by :id
// PUT to /cats/:id with an invalid id responds with a 404 status code
// DELETE to /cats/:id removes the record
// DELETE to /cats/:id with an invalid id responds with a 404 status code
module.exports = router