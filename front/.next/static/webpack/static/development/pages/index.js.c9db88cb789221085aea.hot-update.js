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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\82103\\Desktop\\retrospect\\front\\components\\PostCardContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PostCardContent = function PostCardContent(_ref) {
  var postData = _ref.postData;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, postData ? postData.split(/(\<[^\>]+\>)/g).map(function (v) {
    if (v.match(/\<[^\>]+\>/)) {
      return __jsx("strong", {
        key: v,
        style: {
          color: 'black',
          fontSize: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, v);
    }

    return v.split('\n').map(function (value) {
      return __jsx("p", {
        style: {
          color: 'black',
          fontSize: '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, value);
    });
  }) : undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

/***/ })

})
//# sourceMappingURL=index.js.c9db88cb789221085aea.hot-update.js.map