const convert = require('xml-js');

function xml2js(source, format) {
  const obj = convert.xml2js(source, {compact: true});
  if (format) {
    obj.opml.body = parseOmniOutliner(obj.opml.body.outline);
  }
  return obj;
}

const parseOmniOutliner = (item) => {
  return {
    title: item._attributes.text || '',
    note: item._attributes._note || '',
    children: item.outline ? (Array.isArray(item.outline) ? 
        item.outline.map(parseOmniOutliner) : [parseOmniOutliner(item.outline)]
    ) : []
  }
}

export {
  xml2js
}