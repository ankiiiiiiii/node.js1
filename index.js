const express = require('express');
const app = express()
const port = 3100;

app.get('/', (req, res) => res.send('Welcome! this is nodejs simple website running'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
