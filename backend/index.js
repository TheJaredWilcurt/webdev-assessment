const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const catsRouter = require('./routes/cats')

app.use(bodyParser.json())
app.use(catsRouter)
app.use(express.static('public'))

// app.use((req,res,next) => {

// })

const port = process.env.port || 8080
app.listen(port, () => console.info(`Server running on localhost:${port}`))