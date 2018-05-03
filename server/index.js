var express = require('express');

var app = express();

app.use('/', express.static('../home'));

app.use('/map', express.static('../map'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));