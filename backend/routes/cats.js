const express = require('express')
const router = express.Router()

let catsMap = new Map()

let currentId = 0

function generateUniqueId() {
    currentId += 1;
    return currentId
}

let newCat = (id, name) => {
    return { 'id': id, 'name': name }
}

// POST to /cats creates an object, and returns the created object with a generated id
// POST to /cats a second time creates a new object, with a unique id
router.post('/cats', (req, res) => {
    let id = generateUniqueId()
    let cat = newCat(currentId, req.body['name'])
    catsMap.set(id, cat)
    res.json(cat)
    res.status(201).send('201')
})

// GET to /cats returns a list of cats that contains the previously created cat object
router.get('/cats', (req, res) => {
    let catEntries = catsMap.values()
    let catsList = []
    for (let cat of catEntries) {
        catsList.push(cat)
    }

    res.json(catsList)
})

// GET to /cats/:id returns the same object created from the first POST request when called with the generated id
// GET to /cats/:id returns a 404 status code for a cat that does not exist
router.get('/cats/:id', (req, res) => {
    let id = parseInt(req.params.id)

    if (!catsMap.has(id)) {
        res.status(404).end()
        return
    }

    res.json(catsMap.get(id))
})

// PUT to /cats/:id updates the record identified by :id
// PUT to /cats/:id with an invalid id responds with a 404 status code
router.put('/cats/:id', (req, res) => {
    let id = parseInt(req.params.id)
    let name = req.body['name']
    if (!catsMap.has(id)) {
        res.status(404).end()
        return
    }

    cat = catsMap.get(id)
    cat.name = req.body

    res.json(cat.name)
})

// DELETE to /cats/:id removes the record
// DELETE to /cats/:id with an invalid id responds with a 404 status code
router.delete('/cats/:id', (req, res) => {
    let id = parseInt(req.params.id)
    if (!catsMap.has(id)) {
        res.status(404).end()
        return
    }

    catsMap.delete(id)
    res.status(204).end()
})

module.exports = router