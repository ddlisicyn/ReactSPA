"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Album = Album;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("custom-jsx-library/jsx-runtime");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function Album(_ref) {
  var albumId = _ref.albumId,
      handleClick = _ref.handleClick;

  var onClick = function onClick() {
    handleClick(albumId);
  };

  return (0, _jsxRuntime.jsxs)("div", {
    className: "main__profile-album",
    children: [(0, _jsxRuntime.jsx)("img", {
      onClick: onClick,
      src: "https://image.flaticon.com/icons/png/512/716/716784.png"
    }), (0, _jsxRuntime.jsxs)("p", {
      children: ["\u0410\u043B\u044C\u0431\u043E\u043C \u2116", albumId]
    })]
  });
}

Album.propTypes = {
  handleClick: _propTypes.default.func,
  albumId: _propTypes.default.number
};