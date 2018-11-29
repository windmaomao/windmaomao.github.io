const convert = require('xml-js');

function xml2js(source) {
  return convert.xml2js(source, {compact: true});
}

export {
  xml2js
}