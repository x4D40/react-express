const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const apiRoutes = require('./routes'); // api routes

app.use('/static', express.static(path.join(__dirname, '../client/build/static'))); //react bundled files

// if not production, enable cors so the react server can access
// in production the react app will be served from the api server, so this isnt needed
if(process.env.NODE_ENV !== 'production') {
    app.use(cors());
}

app.use(express.json())

apiRoutes(app); // add api routes

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html'))); // everything else hit the react app

app.listen(5000, () => console.log('running'));