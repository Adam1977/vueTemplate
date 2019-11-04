const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'adam123123',
    database: 'test'
});

const find = function(sql, fn) {
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
       fn(result)
    });
};
const methodsType = {
    find
}
//查
connection.connect();
module.exports = function(type, sql, fn) {
    methodsType[type](sql, fn)
    // connection.end();
}
