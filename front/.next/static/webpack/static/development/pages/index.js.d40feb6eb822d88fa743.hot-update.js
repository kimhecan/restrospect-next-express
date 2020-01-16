webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\82103\\Desktop\\retrospect\\front\\components\\PostCardContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PostCardContent = function PostCardContent(_ref) {
  var postData = _ref.postData;
  var content = postData.content;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, content.split(/(º오늘 한 일|º문제점|º내일 할 일)/g).map(function (v, i) {
    if (v.match(/º오늘 한 일|º문제점|º내일 할 일/)) {
      return __jsx("strong", {
        key: i,
        style: {
          color: 'gray',
          fontSize: '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, v);
    }

    return v.split('\n').map(function (value, i) {
      return __jsx("p", {
        style: {
          color: 'black'
        },
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, value);
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

/***/ })

})
//# sourceMappingURL=index.js.d40feb6eb822d88fa743.hot-update.js.map