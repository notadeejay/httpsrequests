var https = require("https");

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

function getHTML(options, callback) {
    https.get(options, function (response) {
      var str = "";

      response.setEncoding('utf8');


      response.on('data', function (data, callback) {
       str += data;
     });


      response.on('end', function() {
        console.log(str);
      });

    });
}

function printHTML (html) {
  console.log(html);
}


getHTML(requestOptions, printHTML);