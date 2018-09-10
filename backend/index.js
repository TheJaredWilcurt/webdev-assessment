const express = require('express')
const app = express()
const catsRouter = require('./routes/cats')

app.use(catsRouter)
app.use(express.static('public'))

const port = process.env.port || 8080
app.listen(port, () => console.info(`Server running on localhost:${port}`))