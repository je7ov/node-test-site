var express = require('express');
var dataList = require('../public/data/data_list.json');
var router = express.Router();

/* GET random-people page. */
router.get('/', function(req, res, next) {
  var listIndex = req.query.list;
  var list
  console.log(listIndex);
  if (listIndex) {
    var list = require(`../public/data/${dataList[listIndex].file}.json`);
  }
  
  res.render('random-people', { title: 'Random People', dataList, list, current: listIndex});
});

module.exports = router;
