var http = require("http");

http.createServer((request, response) => {
	  console.log('Now we have a http message with headers but no data yet.');
	  request.on('data', chunk => {
	    console.log('A chunk of data has arrived: ', String(chunk));
	  });
	  request.on('end', () => {
	    console.log('No more data');
	  })
	}).listen(8082)
	
console.log('Server running at http://127.0.0.1:8082');
