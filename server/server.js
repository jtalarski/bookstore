// requries
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg'); // this is what lets us talk to db

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// globals
const port = 3000;

// DB setup

const Pool = pg.Pool

const pool = new Pool({
        database: "bookstore",
        host: "localhost",
        port: 5432,
        max: 12,
        idleTimeoutMillis: 20000

    }) // end pool setup





// spin up server
app.listen(port, () => {
        console.log('server up:', port);
    }) // end server ip