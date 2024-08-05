const mysqkl = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-finish',
    password: 'Vip@2706',
});

module.exports = pool.promise();
