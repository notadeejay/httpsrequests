var https = require("https");

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

function getAndPrintHTML(options) {
    https.get(options, function (response) {
      var str = "";

      response.setEncoding('utf8');


      response.on('data', function (data) {
       str += data;
     });


      response.on('end', function() {
        console.log(str);
      });

    });
}

getAndPrintHTML(requestOptions);