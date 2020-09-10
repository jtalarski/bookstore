// requries
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg'); // this is what lets us talk to db
const { response } = require('express');

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


app.get('/books', (req, res) => {
        console.log('in /books GET');
        const queryString = `SELECT * FROM "books"`;
        pool.query(queryString).then((results) => {
                res.send(results.rows);
            }).catch((err) => {
                res.sendStatus(500);
            }) // end query
    }) // end /books GET

/*
app.post('/books', (req, res) => {
        console.log('in /books POST', req.body);
        const queryString = `INSERT INTO "books" (title, author, published) VALUES ($1, $2, $3)`;
        pool.query(queryString, [req.body.title, req.body.author, req.body.published])
            .then((results) => {
                res.sendStatus(201);
            }).catch((err) => {
                console.log(err);
                res.sendStatus(500);
            }) //end query
    }) //end /books POST
*/

app.post('/books', (req, res) => {
    console.log('in /songs POST', req.body);
    const queryString = `INSERT INTO "books"(title, author, published) VALUES($1, $2, $3)`;
    pool.query(queryString, [req.body.title, req.body.author, req.body.published]).then((results) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        response.sendStatus(500);
    })
})