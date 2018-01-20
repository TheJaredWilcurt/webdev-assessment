const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup route functionality for cat database
var routes = require('./api/routes/catListRoutes');
routes(app);

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on port ${port}`)
});
