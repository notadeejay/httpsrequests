var https = require("https");

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

function getAndPrintHTML(options) {
  https.get(options, function (response) {
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

getAndPrintHTML(requestOptions);