import express = require('express');
import * as path from 'path';

var directory = path.join(__dirname, '../public');
var port = Number(process.env.SERVICE_PORT);
var app = express();

app.use(express.static(directory));

app.get('/', function(req, res) {
	res.sendFile(path.join(directory, 'index.html'));
});

app.get(`/api/status`, (req, res, next) => {
	res.json({ online: true });
});

app.listen(port, () => {
	console.log(`Express server listening on port ${port.toString()}!`);
});
