// server.js


// introduce dependancies
var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
// var cookieParser = require('cookie-parser');
// var config 	     = require('./config.json')
var cors 	       = require('cors')


// CORS Whitelist
var originsWhitelist = [
  'https://bitcoin.theblockchaininstitute.org',
  'https://theblockchaininstitute.org/donations/',
  'https://theblockchaininstute.org',
  'https://18.224.44.173:8000',
  'https://18.224.44.173'

];
var corsOptions = {
  origin: function(origin, callback){
        console.log(origin);
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        console.log(isWhitelisted);
        callback(null, isWhitelisted);
  },
  credentials:true
}

app.options('*', cors(corsOptions));


// Set up connectivity
var port = 7000;
var router = express.Router();

// Set up H-W routing
router.get('/', function(req, res) {
   res.send('Hello World!');
   console.log('Hello World Ran!');
});

// Set the target area
app.use('/api', router);

// Set the access headers for browser preflight
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Accept");
  next();
});

// Include middleware
app.use(bodyParser.json());
// app.use(cookieParser());

// Include models
// require('./models/deposit.js');

// Require routes
require('./routes.js')(app);

// Start the server
app.listen(port);
console.log('Server running on port ' + port);
