// node mysql connectivity
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'feedback'
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
