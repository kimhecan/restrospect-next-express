webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-redux-saga */ "./node_modules/next-redux-saga/dist/next-redux-saga.es.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducer */ "./reducer/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);



var _jsxFileName = "C:\\Users\\82103\\Desktop\\retrospect\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;















var Restropect = function Restropect(_ref) {
  var Component = _ref.Component,
      store = _ref.store,
      pageProps = _ref.pageProps;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "restropect"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })))));
};

Restropect.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType,
  store: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};

Restropect.getInitialProps = function _callee(context) {
  var ctx, Component, pageProps, state, cookie;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx = context.ctx, Component = context.Component;
          pageProps = {};
          state = ctx.store.getState();
          cookie = ctx.isServer ? ctx.req.headers.cookie : '';

          if (ctx.isServer) {
            axios__WEBPACK_IMPORTED_MODULE_15___default.a.defaults.headers.Cookie = cookie;
          }

          if (!state.user.userId) {
            context.store.dispatch({
              type: LOAD_USER_REQUEST
            });
          }

          if (!Component.getIntialProps) {
            _context.next = 11;
            break;
          }

          Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("pageProps");

          _context.next = 10;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

        case 10:
          pageProps = _context.sent;

        case 11:
          return _context.abrupt("return", pageProps);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};

var configureStore = function configureStore(initialState) {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_13__["default"])();
  var middlewares = [sagaMiddleware];
  var enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_10__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"].apply(void 0, middlewares)));
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_12__["default"], initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_14__["default"]);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"])(configureStore)(Object(next_redux_saga__WEBPACK_IMPORTED_MODULE_9__["default"])(Restropect)));

/***/ })

})
//# sourceMappingURL=_app.js.bfe81179dca574c39f6e.hot-update.js.map