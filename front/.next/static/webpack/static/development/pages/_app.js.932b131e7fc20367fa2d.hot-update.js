webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducer_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducer/user */ "./reducer/user.js");

var _jsxFileName = "C:\\Users\\82103\\Desktop\\retrospect\\front\\components\\AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var SubMenu = antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].SubMenu;

var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('home'),
      current = _useState[0],
      setCurrent = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector.user;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var handleClick = function handleClick(e) {
    (function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                console.log(e.ket);
                setCurrent(e.key);
              } catch (e) {
                console.error(e);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    if (current === 'logout') {
      dispatch({
        type: _reducer_user__WEBPACK_IMPORTED_MODULE_6__["LOG_OUT_REQUEST"]
      });
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    mode: "horizontal",
    selectedKeys: current,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "restropect"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
    enterButton: true,
    style: {
      verticalAlign: 'middle'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx(SubMenu, {
    title: __jsx("span", {
      className: "submenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, user.nick ? user.nick : ''),
    style: {
      "float": 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "private",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\uAC1C\uC778\uC815\uBCF4"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "logout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\uB85C\uADF8\uC544\uC6C3"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\uB2EC\uB825\uC608\uC815")));
};

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=_app.js.932b131e7fc20367fa2d.hot-update.js.map