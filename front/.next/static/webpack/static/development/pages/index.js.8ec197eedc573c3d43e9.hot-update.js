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
/* harmony import */ var _reducer_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducer/post */ "./reducer/post.js");

var _jsxFileName = "C:\\Users\\82103\\Desktop\\retrospect\\front\\components\\PostForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useInput = function useInput() {
  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = useState(initValue),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setter = _useState2[1];

  var handler = useCallback(function (e) {
    setter(e.target.value);
  }, []);
  return [value, setter, handler];
};

var PostForm = function PostForm() {
  var _useInput = useInput(''),
      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      firstText = _useInput2[0],
      setFirstText = _useInput2[1],
      changeFirstText = _useInput2[2];

  var _useInput3 = useInput(''),
      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 3),
      secondText = _useInput4[0],
      setSecondText = _useInput4[1],
      changeSecondText = _useInput4[2];

  var _useInput5 = useInput(''),
      _useInput6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 3),
      thridText = _useInput6[0],
      setThridText = _useInput6[1],
      changeThridText = _useInput6[2];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (mainPosts !== []) {
      dispatch({
        type: _reducer_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POST_REQUEST"]
      });
    }
  }, []);

  var onSubmit = function onSubmit(e) {
    e.preventDefault();

    if (!firstText || !secondText || !thridText) {
      return alert('게시글을 작성하세요.');
    }

    var text = "<\uC5B4\uC81C \uD55C \uC77C> ".concat(firstText, " <\uC624\uB298 \uD560 \uC77C> ").concat(secondText, " <\uC5B4\uC81C\uC758 \uBB38\uC81C\uC810> ").concat(thridText);
    dispatch({
      type: _reducer_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"],
      data: text
    });
    setFirstText('');
    setSecondText('');
    setThridText('');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: onSubmit,
    style: {
      margin: '30px'
    },
    encType: "multipart/form-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
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
      lineNumber: 52
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
      lineNumber: 53
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
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    style: {
      backgroundColor: '#00001a',
      borderColor: '#00001a',
      width: "200px",
      marginLeft: "390px"
    },
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\uBC1C\uD589")));
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ })

})
//# sourceMappingURL=index.js.8ec197eedc573c3d43e9.hot-update.js.map