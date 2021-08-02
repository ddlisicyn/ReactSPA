"use strict";

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.filter.js");

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.filter.js");

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.filter.js");

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.filter.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.filter.js");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Pagination = _interopRequireDefault(require("@material-ui/lab/Pagination"));

var _Photo = require("../components/Photo");

var _Profile = require("../components/Profile");

var _jsxRuntime = require("custom-jsx-library/jsx-runtime");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function App() {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      albums = _useState2[0],
      setAlbums = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      page = _useState6[0],
      setPage = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedUser = _useState8[0],
      setSelectedUser = _useState8[1];

  (0, _react.useEffect)(function () {
    Promise.all([fetch('https://jsonplaceholder.typicode.com/photos'), fetch('https://jsonplaceholder.typicode.com/albums')]).then( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var _ref3, photosJson, albumsJson, photos, albums, fullInfromationArray;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref3 = _slicedToArray(_ref, 2), photosJson = _ref3[0], albumsJson = _ref3[1];
                _context.next = 3;
                return photosJson.json();

              case 3:
                photos = _context.sent;
                _context.next = 6;
                return albumsJson.json();

              case 6:
                albums = _context.sent;
                fullInfromationArray = [];
                photos.forEach(function (photo) {
                  albums.forEach(function (album) {
                    if (photo.albumId === album.id) {
                      fullInfromationArray.push(Object.assign(photo, album));
                    }
                  });
                });
                setData(fullInfromationArray);
                setAlbums(albums);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()).catch(function () {
      return console.log('Что-то пошло не так!');
    });
  }, []);

  var handleChangePage = function handleChangePage(_, page) {
    setPage(page);
  };

  var openProfile = function openProfile(userId) {
    setSelectedUser(userId);
  };

  var closeProfile = function closeProfile() {
    setSelectedUser(null);
  };

  var numberOfPages = new Set(data.map(function (photo) {
    return photo.albumId;
  })).size;
  return (0, _jsxRuntime.jsxs)("div", {
    className: "main__page",
    children: [(0, _jsxRuntime.jsx)(_Typography.default, {
      className: "main__photos",
      children: data.filter(function (photo) {
        return photo.albumId === page;
      }).map(function (photo) {
        return (0, _jsxRuntime.jsx)(_Photo.Photo, {
          url: photo.thumbnailUrl,
          userId: photo.userId,
          handleClick: openProfile
        }, photo.url);
      })
    }), (0, _jsxRuntime.jsx)(_Pagination.default, {
      count: numberOfPages,
      page: page,
      onChange: handleChangePage,
      variant: "outlined",
      color: "secondary",
      size: "large"
    }), (0, _jsxRuntime.jsx)(_Profile.Profile, {
      profileVisible: !!selectedUser,
      albums: albums,
      onCloseClick: closeProfile,
      userId: selectedUser,
      data: data
    })]
  });
}