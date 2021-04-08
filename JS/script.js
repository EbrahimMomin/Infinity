const express = require('express');
const sqlite = require('sqlite3');
const app = express();
app.get('/', (req, res, next) => {
    const message = 'Hello' + req.username;
    console.log(message);
});
app.listen();