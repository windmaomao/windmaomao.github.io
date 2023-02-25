(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

  var styled = window.styled;
  var QPLOT = 'https://qplot.com/logo.png';
  var USER = 'https://gravatar.com/avatar/7aa1ac62349de7aebf7d43020c799dfe';
  var LogoStyle = styled.img(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 36px;\n  height: 36px;\n"])));

  var Logo = function Logo() {
    return /*#__PURE__*/React.createElement(LogoStyle, {
      src: QPLOT
    });
  };

  var AvatarStyle = styled.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  width: 48px;\n  height: 48px;\n"])));

  var Avatar = function Avatar() {
    return /*#__PURE__*/React.createElement(AvatarStyle, {
      src: USER
    });
  };

  var NavStyle = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 0 0 4rem;\n"])));
  var ContentStyle = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1 0;\n  font-weight: bold;\n"])));
  var UserStyle = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  flex: 0 0 4rem;\n  padding-right 1rem;\n"])));
  var HeaderStyle = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 0.5rem 1rem;\n  background-color: #f8f8f8;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: between-space;\n  align-items: center;\n"])));

  var Header = function Header(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React.createElement(HeaderStyle, null, /*#__PURE__*/React.createElement(NavStyle, null, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement(ContentStyle, null, children), /*#__PURE__*/React.createElement(UserStyle, null, /*#__PURE__*/React.createElement(Avatar, null)));
  }; // const el = document.getElementById('header');
  // const children = el.textContent;
  // ReactDOM.render(<Header>{children}</Header>, el);


  var el = document.createElement('div');
  document.body.prepend(el);
  ReactDOM.render( /*#__PURE__*/React.createElement(Header, null), el);

}));
