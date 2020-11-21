const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./routes/routes');

app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
apiRoutes(app);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));

app.listen(5000, () => console.log('running'));