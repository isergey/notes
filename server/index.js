import express from 'express';
import bodyParser from 'body-parser';
import { serverPort } from '../etc/config.json';
import * as db from './utils/DBUtils';

db.setUpConnections();

const app = express();

app.use(bodyParser.json());

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.listNotes(req.param.id).then(data => res.send(data));
});

app.get('/dashboard', (req, res) => {
    res.send('wwwww');
});

const server = app.listen(serverPort, () => {
    console.log('server start');
});