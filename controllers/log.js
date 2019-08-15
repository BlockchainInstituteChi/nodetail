// log.js
var rp = require('request-promise')
const readLastLines = require('read-last-lines');

// const Tail = require('tail').Tail;
// var tail = new Tail("/var/log/syslog")
// // var log = "test";

// tail.on("error", function(error) {
// 	console.log('ERROR: ', error)
// })

// function log () { return tail.on("line", function(data, log) {
//   console.log('new line', data);
//   return data;
// })}

// Function Declarations
module.exports = {
	helloWorld : function helloWorld (req, res) {
		return res.status(200).send("Hi!")
	},
	healthCheck : function healthCheck (req, res) {
		return res.status(200);
	},
	log : function log (req, res) {

		// return res.status(200).send("tail")
		console.log('running');
		readLastLines.read('/home/ubuntu/.bitcoin/debug.log', 2)
    		.then((lines) => res.status(200).send(lines));
			
	}
}
