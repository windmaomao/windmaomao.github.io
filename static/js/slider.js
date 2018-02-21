var QkbSlider =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var React = require('react');
// var ReactDom = require('react-dom');
// var axios = require('axios');

// import './index.css';

var Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.state = {
      enabled: true,
      open: false,
      api: 'https://sleepy-kalam-ff10a0.netlify.com/menu.json',
      menus: []
    };
    _this.handleToggle = _this.handleToggle.bind(_this);
    return _this;
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      if (!this.state.enabled) {
        return null;
      }
      if (this.state.open) {
        return React.createElement(
          "div",
          { className: "slider" },
          React.createElement(
            "button",
            { className: "close", onClick: this.handleToggle },
            "X"
          ),
          React.createElement(
            "aside",
            { className: "menu" },
            React.createElement(
              "p",
              { className: "menu-label" },
              "Menu"
            ),
            React.createElement(
              "ul",
              { className: "menu-list" },
              this.state.menus.map(function (menu, idx) {
                return React.createElement(
                  "li",
                  { key: idx },
                  React.createElement(
                    "a",
                    null,
                    menu.title
                  ),
                  React.createElement(
                    "ul",
                    null,
                    menu.items.map(function (name, idx2) {
                      return React.createElement(
                        "li",
                        { key: idx2 },
                        React.createElement(
                          "a",
                          null,
                          name
                        )
                      );
                    })
                  )
                );
              })
            )
          )
        );
      } else {
        return React.createElement("i", { className: "slider-toggle", onClick: this.handleToggle });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.state.enabled) {
        axios.get(this.state.api).then(function (res) {
          var menus = res.data;
          _this2.setState({ menus: menus });
        });
      }
    }
  }, {
    key: "handleToggle",
    value: function handleToggle() {
      this.setState(function (prev) {
        return {
          open: !prev.open
        };
      });
    }
  }]);

  return Slider;
}(React.Component);

module.exports = Slider;

/***/ })
/******/ ]);