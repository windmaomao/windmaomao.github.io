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
  // empty node
  if (!item._attributes) {
    return { title: '', note: '', children: [], cols: [] };
  }
  const {text, _note, ...otherAttribs} = item._attributes;
  const res = {
    title: text || '',
    note: _note || '',
    ...otherAttribs,
    children: [],
    cols: Object.keys(otherAttribs)
  }
  // console.log(res);
  if (!item.outline) {
    return res;
  }
  res.children = Array.isArray(item.outline) ? 
    item.outline.map(parseOmniOutliner) : [parseOmniOutliner(item.outline)];
  res.cols = res.children.reduce((acc, item) => {
    item.cols.forEach(col => {
      if (acc.indexOf(col) <0) {
        acc.push(col);
      }
    })
    return acc;
  }, res.cols);
  return res;
}

export {
  xml2js
}