module.exports = function(app){

  var log = require('./controllers/log.js');
  app.get('/helloWorld', log.helloWorld);
  app.get('/', log.log);

}
