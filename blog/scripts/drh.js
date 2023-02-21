(function () {
  'use strict';
  var style = {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    padding: '1em',
    display: 'block',
    textDecoration: 'none',
    fontSize: '14px',
    fontStyle: 'italic',
    color: 'gray',
    transition: 'color 1s'
  };

  var Link = function Link() {
    return /*#__PURE__*/ React.createElement(
      'a',
      {
        style: style,
        href: 'https://www.amazon.com/Designing-React-Hooks-Right-Way/dp/1803235950',
        title: 'Visit amazon site',
        target: '_blank'
      },
      'Designing React Hook The Right Way'
    );
  };

  var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;
  var div = document.createElement('div');
  document.body.appendChild(div);
  render(/*#__PURE__*/ React.createElement(Link, null), div);
})();
