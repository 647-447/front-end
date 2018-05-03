var queries = require('./database/localqueries.js');

var express = require('express');

var app = express();

const port = process.env.PORT || 3000;

app.use('/', express.static('./home'));
app.use('/map', express.static('./map'));

app.post('/victims', function (req, res) {
	queries.addVictim('5554443333', 'John Doe', '37.4', '-122.2', 'false', 'false', '2018-05-02 18:24:12', '1').then(res.send('POST request to the getaway victims table requested'));
})

app.post('/status', function (req, res) {
	queries.addVictimStatus('4153358620', 'Is anybody out there?').then((entry, err) => {
		if(err) { throw (err) }
		res.send('POST request to the getaway status table requested');
	});
})

app.get('/victims', function (req, res) {
	queries.getVictims().then((entry, err) => {
		if(err) { throw (err) }
		res.send(entry);
	});
});

app.get('/status', function (req, res) {
	queries.getVictimStatus().then((entry, err) => {
		if(err) { throw (err) }
		res.send(entry);
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));