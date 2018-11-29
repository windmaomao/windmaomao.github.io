const convert = require('xml-js');

function xml2js(source, format) {
  const obj = convert.xml2js(source, {compact: true});
  console.log(obj);
  if (format) {
    // TODO: fix the file format on root level
    obj.opml.body._attributes = Object.assign({}, {
      text: 'Topic',
      _note: '',
    })
    obj.opml.body = parseOmniOutliner(obj.opml.body);
  }
  return obj;
}

const parseOmniOutliner = (item) => {
  const {text, _note, ...otherAttribs} = item._attributes;
  return {
    title: text || '',
    note: _note || '',
    ...otherAttribs,
    children: item.outline ? (Array.isArray(item.outline) ? 
        item.outline.map(parseOmniOutliner) : [parseOmniOutliner(item.outline)]
    ) : []
  }
}

export {
  xml2js
}