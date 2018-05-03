var queries = require('./database/localqueries.js');
var bodyParser = require('body-parser')
var express = require('express');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.use('/', express.static('./home'));
app.use('/map', express.static('./map'));

app.post('/victims', function (req, res) {

	const {inDangerZone, isStuck, isInjured } = req.body;

	console.log("req.body.inDangerZone: ", inDangerZone);
	console.log("req.body.isStuck: ", isStuck);
	console.log("req.body.isInjured: ", isInjured);


	queries.addVictim('3332221111', 'Wilson', '37.2', '-123.2', inDangerZone, isInjured, isStuck, '2').then((entry, err) => {
		if(err) { throw (err) }
		res.status(201).send('victim added to the database:' + entry);
	});

})

app.post('/status', function (req, res) {
	queries.addVictimStatus('3332221111', 'I think I am okay, where do I go now?').then((entry, err) => {
		if(err) { throw (err) }
			res.status(201).send('victim status added to the database:' + entry);
	});
})

app.get('/victims', function (req, res) {
	console.log('victims requested by user');
	queries.getVictims().then((entry, err) => {
		if(err) { throw (err) }
		res.status(200).send(entry);
	});
});

app.get('/status', function (req, res) {
	console.log('status requested by user');
	queries.getVictimStatus().then((entry, err) => {
		if(err) { throw (err) }
		res.status(200).send(entry);
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));