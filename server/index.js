const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const store = require('./store');

const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());

app.post('/createUser', (req, res) => {
	store.createUser(req.body.username, req.body.password)
		.then(() => res.sendStatus(200));
});

app.post('/login', (req, res) => {
	store.authenticate(req.body.username, req.body.password)
		.then(({ success }) => {
			if (success)
				res.sendStatus(200);
			else
				res.sendStatus(401);
		});
});

app.listen(process.env.PORT || 3000);