"use strict";

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.filter.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Photos = Photos;

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.filter.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Photo = require("./Photo");

var _jsxRuntime = require("custom-jsx-library/jsx-runtime");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function Photos(props) {
  return (0, _jsxRuntime.jsxs)("div", {
    className: props.photosVisible ? 'main__profile-photos-show' : 'main__profile-photos-hide',
    children: [(0, _jsxRuntime.jsxs)("div", {
      className: "main__album-header",
      children: [(0, _jsxRuntime.jsxs)("h1", {
        children: ["\u0410\u043B\u044C\u0431\u043E\u043C \u2116", props.albumId]
      }), (0, _jsxRuntime.jsx)(_Close.default, {
        onClick: props.onCloseAlbumClick
      })]
    }), (0, _jsxRuntime.jsx)("hr", {}), (0, _jsxRuntime.jsxs)(_Typography.default, {
      className: "main__album-photos",
      children: [" ", props.photos.filter(function (photo) {
        return photo.albumId === props.albumId;
      }).map(function (photo) {
        return (0, _jsxRuntime.jsx)(_Photo.Photo, {
          url: photo.thumbnailUrl,
          userId: photo.userId
        });
      })]
    })]
  });
}

Photos.propTypes = {
  photosVisible: _propTypes.default.string,
  albumId: _propTypes.default.number,
  onCloseAlbumClick: _propTypes.default.func
};