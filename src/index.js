"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _App = _interopRequireDefault(require("./containers/App"));

var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));

var _jsxRuntime = require("custom-jsx-library/jsx-runtime");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

_reactDom.default.render((0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
  children: (0, _jsxRuntime.jsx)(_App.default, {})
}), document.getElementById('root'));

(0, _reportWebVitals.default)();