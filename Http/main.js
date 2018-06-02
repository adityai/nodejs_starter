// Sample code to perform a http post
var request = require('request');

request.post(
    'http://127.0.0.1:8082',
    { json: { 'data': 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
        else {
        	console.log(response.body);
        }
    }
);

request.post(
	    'https://iaditya.herokuapp.com/widgets/prime',
	    { json: { "auth_token": "YOUR_AUTH_TOKEN", "title": "PING" } },
	    function (error, response, body) {
	    	console.log(response.statusCode);
	        if (!error && response.statusCode == 200) {
	            console.log(body);
	        }
	        else {
	        	console.log(response.body);
	        }
	    }
	);
