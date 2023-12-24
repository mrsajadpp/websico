'use strict'

var websico = require('../../');

var app = module.exports = websico()

app.get('/', function(req, res){
  res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Websico started on port 3000');
}
