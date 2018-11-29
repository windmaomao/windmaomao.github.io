import {xml2js} from './xml2js';

const domain = 'https://qplot.com/playground/';

function getApi(url) {
  return fetch(domain + url); 
}

function getXml(url) {
  return fetch(domain + url)
    .then(res => res.text())
    .then(res => xml2js(res, true))
  ;
}

export {
  getApi,
  getXml
}