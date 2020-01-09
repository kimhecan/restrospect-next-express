webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/DateCell.js":
/*!********************************!*\
  !*** ./components/DateCell.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "C:\\Users\\82103\\Desktop\\retrospect\\front\\components\\DateCell.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //postsDate 2020-01-09
//calendatCell 01 09 2020

var DateCell = function DateCell(_ref) {
  var date = _ref.date;
  var month = ["None", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts;

  var postsDate = mainPosts.map(function (v) {
    return String(v.createdAt).substring(0, 10);
  });
  var calendarCell = String(date._d).substring(4, 15);
  var index = 0;
  var isPosted = false;

  for (var i = 0; i <= 12; i++) {
    if (calendarCell.substring(0, 3) == month[i]) {
      if (Number(month.indexOf(month[i])) < 10) {
        index = '0' + month.indexOf(month[i]);
      } else {
        index = month.indexOf(month[i]);
      }

      calendarCell = calendarCell.replace(calendarCell.substring(0, 3), index);
    }
  }

  for (var _i = 0; _i < postsDate.length; _i++) {
    if (postsDate[_i].substring(0, 4) == calendarCell.substring(6, 10) && postsDate[_i].substring(5, 7) == calendarCell.substring(0, 2) && postsDate[_i].substring(8, 10) == calendarCell.substring(3, 5)) {
      isPosted = true;
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isPosted ? __jsx("div", {
    style: {
      backgroundColor: '#00f603',
      width: '65px',
      height: '3px',
      marginTop: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (DateCell);

/***/ })

})
//# sourceMappingURL=_app.js.ed0f126229209aa53b8d.hot-update.js.map