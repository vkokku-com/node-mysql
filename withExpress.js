/* 
    # require the packages 'express' & 'msql' 
*/
var express = require('express');
var mysql = require('mysql');

/*
    # configure a connection to the database 
    # with the necessary credentials
*/
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'enter your db user',
    password: 'enter your db password',
    database: 'enter your db name'
});

// creating an instance for the express
var app = express();

// establishing a connection to the configured database
connection.connect(function(err) {
    if (!err) {
        console.log("Database is connected \n \n");
    } else {
        console.log("Error in connecting to db");
    }
});

/*
    # defining a route and its call back
    # no markup is implemented 
    # to see the result please observe
    # the console after hitting the url

*/
app.get('/users', function(req, res) {
    connection.query('SELECT * FROM register LIMIT 2', function(err, rows, fields) {
        connection.end();
        if (!err) {
            console.log('The result: ', rows);
        } else {
            console.log('Error performing the query');
        }
    });
});

app.listen(3000);
console.log('server is running on port 3000');
