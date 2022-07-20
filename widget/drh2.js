// https://codepen.io/windmaomao/pen/jOLeyXq?editors=1011
var drh = (function () {
  'use strict';

  var style = {
    position: 'absolute',
    bottom: '0',
    right: '0',
    padding: '1em',
    display: 'block',
    textDecoration: 'none',
    fontSize: '14px',
    fontStyle: 'italic',
    color: 'gray',
    transition: 'color 1s'
  };

  var Link = function Link() {
    return /*#__PURE__*/React.createElement("a", {
      style: style,
      href: "https://learning.oreilly.com/library/view/designing-react-hooks/9781803235950/",
      title: "Visit book site",
      target: '_blank'
    }, "Designing React Hook The Right Way");
  };

  var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;
  var div = document.createElement("div");
  document.body.appendChild(div);
  render( /*#__PURE__*/React.createElement(Link, null), div);

  return Link;

})();