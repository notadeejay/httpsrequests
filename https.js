
var https = require("https");


function getAndPrintHTMLChunks(url) {

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
}

https.get(requestOptions, function (response) {


  response.setEncoding('utf8');


  response.on('data', function (data) {
    console.log('New piece of data ', data);
  });


  response.on('end', function() {
    console.log('Response complete.');
  });

});
}
getAndPrintHTMLChunks();