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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initValue),
      value = _useState[0],
      setter = _useState[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
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

  console.log(mainPosts);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var onScroll = function onScroll() {
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 100) {
      dispatch({
        type: _reducer_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POST_REQUEST"],
        lastId: mainPosts[mainPosts.length - 1].id
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (mainPosts !== []) {
      dispatch({
        type: _reducer_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POST_REQUEST"]
      });
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length]);

  var onSubmit = function onSubmit(e) {
    e.preventDefault();

    if (!firstText || !secondText || !thridText) {
      return alert('게시글을 작성하세요.');
    }

    var recentPostDate = mainPosts[0].createdAt.substring(0, 10).split('-').map(function (v) {
      return Number(v);
    });
    var toDay = new Date();
    console.log(toDay.toLocaleDateString());
    var toDayArr = toDay.toLocaleDateString().split('-').map(function (v) {
      return Number(v);
    });
    console.log(toDayArr);

    if (toDay[0] == recentPostDate[0] && toDay[1] == recentPostDate[1] && toDay[2] == recentPostDate[2]) {
      return alert('이미 오늘 회고를 작성하셨습니다!');
    }

    var text = "\xBA\uC624\uB298 \uD55C \uC77C ".concat(firstText, " \xBA\uBB38\uC81C\uC810 ").concat(secondText, " \xBA\uB0B4\uC77C \uD560 \uC77C ").concat(thridText);
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
      lineNumber: 78
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
    value: firstText,
    onChange: changeFirstText,
    maxLength: 500,
    placeholder: "\uC624\uB298 \uD55C \uC77C(Facts (\uC0AC\uC2E4, \uAC1D\uAD00),Feelings (\uB290\uB08C, \uC8FC\uAD00),  Findings (\uBC30\uC6B4 \uC810)) ",
    style: {
      height: '150px',
      width: "1000px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
    value: secondText,
    onChange: changeSecondText,
    maxLength: 500,
    placeholder: "\uBB38\uC81C\uC810",
    style: {
      height: '150px',
      width: "1000px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
    value: thridText,
    onChange: changeThridText,
    maxLength: 500,
    placeholder: "\uB0B4\uC77C \uD560 \uC77C",
    style: {
      height: '150px',
      width: "1000px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
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
      lineNumber: 82
    },
    __self: this
  }, "\uBC1C\uD589")));
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ })

})
//# sourceMappingURL=index.js.1cdfa8d619375246cad9.hot-update.js.map