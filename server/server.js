const express = require('express');
const app = express();
const routes = require('./routes'); // import all routes

routes(app); // add routes

const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`API Server running on port ${port}`));