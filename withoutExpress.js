// node mysql connectivity
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'enter your db user',
    password: 'enter your db password',
    database: 'enter your db name'
});

connection.connect();
connection.query('SELECT * from register', function(err, rows, fields) {

    if (!err) {
        console.log('The result: ', rows);
    } else {
        console.log('Error while performing query');
    }
});

connection.end();
