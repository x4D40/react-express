const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./routes'); // api routes

app.use('/static', express.static(path.join(__dirname, '../client/build/static'))); //react bundled files

app.use(express.json()) // parse json body

apiRoutes(app); // add api routes

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html'))); // everything else hit the react app

app.listen(5000, () => console.log('running'));