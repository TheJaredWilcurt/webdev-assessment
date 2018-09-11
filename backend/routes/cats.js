const express = require('express')
const router = express.Router()

let catsObject = {"catsList": []}

let currentId = 0

function generateUniqueId() {
    currentId = catsObject.catsList.length + 1;
    return currentId
}

let newCat = (id, name) => {
    return {id: id, name: name}
}

// POST to /cats creates an object, and returns the created object with a generated id
// POST to /cats a second time creates a new object, with a unique id
router.post('/cats',(req, res) => {
    if (catsObject.catsList.length == 0) {
        generateUniqueId()
        catsObject.catsList.push(newCat(currentId, 'Mittens'))
        res.json(newCat(currentId, 'Mittens'))
    } else {
        generateUniqueId()
        catsObject.catsList.push(newCat(currentId, 'Mittens II'))
        res.json(newCat(currentId, 'Mittens II'))
    }
})

// GET to /cats returns a list of cats that contains the previously created cat object
router.get('/cats', (req, res) => {
    res.send(catsObject.catsList)
})

// GET to /cats/:id returns the same object created from the first POST request when called with the generated id
router.get('/cats/:id', (req, res) => {
    let id = req.params.id -1
    res.json(catsObject.catsList[id])
})
// GET to /cats/:id returns a 404 status code for a cat that does not exist
router.get('/cats/:id', (req, res) => {
    res.status(404).send('404')
    console.log('404 hit')
    // if (catsObject.catsList.includes(req.params.id)) {
    //     // res.status(404).send('404');
    //     console.log(req.params, 'not found in list')
    // } else {
    //     console.log(req.params, 'FOUND!')
    // }
})

// PUT to /cats/:id updates the record identified by :id
router.put('/cats/:id/:name', (req, res) => {
    let id = req.params.id -1
    let name = req.params.name
    let newName = catsObject.catsList[id].name = name
    res.json(newName)
})
// PUT to /cats/:id with an invalid id responds with a 404 status code
// DELETE to /cats/:id removes the record
// DELETE to /cats/:id with an invalid id responds with a 404 status code
module.exports = router