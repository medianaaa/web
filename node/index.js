var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var hostname = '127.0.0.1';
var port = 3000;
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.post('/example', (req, res) => {
//   res.send(
//     `Data is:${req.body.f1}, ${req.body.f2}, ${req.body.f3}, ${req.body.f4}.`
//   );
// });
// app.listen(port, () => {
//   console.log(`Server running on port${port}`);
// });
var server = http.createServer(function (req, res) {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World\n');
    if (req.url === '/create') {
        fs.readFile('index.html', function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
            res.end();
        });
    }
    else {
        //4.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' +
            req.url);
        res.end();
    }
});
server.listen(port);
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yegorio2003',
    database: 'lr19'
});
connection.connect(function (err) {
    if (err)
        throw err;
    console.log('Connected!');
    connection.query('SELECT * FROM group1', function (err, result) {
        if (err)
            throw err;
        console.log(result);
    });
});
