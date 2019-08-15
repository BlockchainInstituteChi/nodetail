// app.js

// console.log('loaded ');

// index.js -> bundle.js
// var QRCode = require('qrcode')


angular.module('app', [])
.controller('ctrl',[ '$http', '$scope', '$window', '$interval', function( $http, $scope, $window, $interval ){

	init()

	function init () {
		console.log('init ran')

		getLastLog();

		$scope.log = "Loading Bitcoin Node... "
		setInterval(getLastLog, 2000);

	}

	function getLastLog () {

		console.log('getting log')
	   	$http.get( "http://18.224.44.173:7000")
  		.then(function(response) { 
  		  	console.log("r:", response)
  		  	$scope.log = response.data + $scope.log;
        }). 
        catch(function(error) { 
        	console.log(error);
        }); 
	}



}]);
