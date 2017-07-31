
var https = require("https");


function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }


  https.get(requestOptions, function (response) {
    var responses = "";

    response.setEncoding('utf8');


    response.on('data', function (data) {
     responses += data;
   });


    response.on('end', function() {
      console.log(responses);
    });

  });
}
getAndPrintHTML();