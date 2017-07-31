var getHTML = require('../https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowercase (html) {
  var low = html.toLowerCase();
  console.log(low);
}

console.log(getHTML(requestOptions, printLowercase));