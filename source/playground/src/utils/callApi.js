const domain = 'https://qplot.com/playground/';

function getApi(url) {
  return fetch(domain + url);
}

function getXml(url) {
  var convert = require('xml-js');
  return fetch(domain + url)
    .then(res => res.text())
    .then(res => convert.xml2js(res, {compact: true}))
  ;
}

export {
  getApi,
  getXml
}