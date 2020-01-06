webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/signup */ "./pages/signup.js");
/* harmony import */ var _reducer_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducer/post */ "./reducer/post.js");

var _jsxFileName = "C:\\Users\\82103\\Desktop\\retrospect\\front\\components\\PostForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var PostForm = function PostForm() {
  var _useInput = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_4__["useInput"])(''),
      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      firstText = _useInput2[0],
      changeFirstText = _useInput2[1];

  var _useInput3 = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_4__["useInput"])(''),
      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      secondText = _useInput4[0],
      changeSecondText = _useInput4[1];

  var _useInput5 = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_4__["useInput"])(''),
      _useInput6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      thridText = _useInput6[0],
      changeThridText = _useInput6[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (mainPosts !== []) {
      dispatch({
        type: _reducer_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POST_REQUEST"]
      });
    }
  }, []);

  var onSubmit = function onSubmit(e) {
    e.preventDefault(); // if (!text || !text.trim()) {
    //   return alert('게시글을 작성하세요.');
    // }

    var text = "<\uC5B4\uC81C \uD55C \uC77C> ".concat(firstText, " <\uC624\uB298 \uD560 \uC77C> ").concat(secondText, " <\uC5B4\uC81C\uC758 \uBB38\uC81C\uC810> ").concat(thridText);
    dispatch({
      type: _reducer_post__WEBPACK_IMPORTED_MODULE_5__["ADD_POST_REQUEST"],
      data: text
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: onSubmit,
    style: {
      margin: '30px'
    },
    encType: "multipart/form-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
    value: firstText,
    onChange: changeFirstText,
    maxLength: 500,
    placeholder: "<\uC5B4\uC81C \uD55C \uC77C>",
    style: {
      height: '150px',
      width: "1000px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, '<어제한일>', "}"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
    value: secondText,
    onChange: changeSecondText,
    maxLength: 500,
    placeholder: "<\uC624\uB298 \uD560 \uC77C>",
    style: {
      height: '150px',
      width: "1000px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
    value: thridText,
    onChange: changeThridText,
    maxLength: 500,
    placeholder: "<\uC5B4\uC81C\uC758 \uBB38\uC81C\uC810>",
    style: {
      height: '150px',
      width: "1000px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    style: {
      backgroundColor: '#00001a',
      borderColor: '#00001a',
      width: "200px",
      marginLeft: "330px"
    },
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\uBC1C\uD589")));
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ })

})
//# sourceMappingURL=index.js.4bf74d8ca4decb0ea066.hot-update.js.map