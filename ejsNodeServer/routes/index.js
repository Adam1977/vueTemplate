var express = require('express');
var router = express.Router();
var handler = require('./dbmysql.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login.vue', { title: 'Express' });
});
// 查询
router.get('/getInfo', function (req, res) {
  const sql = 'select * from userInfo';
  handler('find', sql, function (data) {
    console.log('data----', data)
    res.send(data)
  })
})

module.exports = router;
