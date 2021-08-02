"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Photo = Photo;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("custom-jsx-library/jsx-runtime");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function Photo(_ref) {
  var url = _ref.url,
      handleClick = _ref.handleClick,
      userId = _ref.userId;

  var onClick = function onClick() {
    handleClick(userId);
  };

  return (0, _jsxRuntime.jsxs)("div", {
    className: "main__photos-item",
    children: [(0, _jsxRuntime.jsx)("img", {
      src: url,
      alt: "color-box 150x150"
    }), (0, _jsxRuntime.jsx)("p", {
      onClick: onClick,
      children: (0, _jsxRuntime.jsxs)("i", {
        children: ["\u0410\u0432\u0442\u043E\u0440 \u2116", userId]
      })
    })]
  });
}

Photo.propTypes = {
  url: _propTypes.default.string,
  handleClick: _propTypes.default.func,
  userId: _propTypes.default.number
};