var getHTML = require('../https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printUppercase (html) {
  var up = html.toUpperCase();
  console.log(up);
}

console.log(getHTML(requestOptions, printUppercase));