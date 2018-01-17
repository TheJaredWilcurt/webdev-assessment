const http = require('http')
const port = 8080

const requestHandler = (request, response) => {
  response.end("You might want some more request handlers")
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on port ${port}`)
})
