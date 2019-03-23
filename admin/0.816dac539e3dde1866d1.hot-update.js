webpackHotUpdate(0,{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(142);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(130);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(266);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(267);
/* harmony import */ var _assets_sass_styles_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(268);
/* harmony import */ var _assets_sass_styles_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_styles_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(269);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var typeface_open_sans__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(297);
/* harmony import */ var typeface_open_sans__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typeface_open_sans__WEBPACK_IMPORTED_MODULE_8__);



(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();









var TemplateWrapper =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(TemplateWrapper, _Component);

  function TemplateWrapper(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isActive: false
    };
    _this.toggleNavbar = _this.toggleNavbar.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this));
    return _this;
  }

  var _proto = TemplateWrapper.prototype;

  _proto.toggleNavbar = function toggleNavbar() {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, _data_config__WEBPACK_IMPORTED_MODULE_7___default.a.siteTitle), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "description",
      content: _data_config__WEBPACK_IMPORTED_MODULE_7___default.a.siteDescription
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isActive: this.state.isActive,
      toggleNavbar: function toggleNavbar() {
        return _this2.toggleNavbar();
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, this.props.children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      style: {
        'font-family': 'open-sans'
      }
    }, "adsasdasdasd"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return TemplateWrapper;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var _default = TemplateWrapper;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TemplateWrapper, "TemplateWrapper", "C:\\Users\\ali12\\OneDrive\\Desktop\\charity-project-final\\src\\layouts\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\ali12\\OneDrive\\Desktop\\charity-project-final\\src\\layouts\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ })

})
//# sourceMappingURL=0.816dac539e3dde1866d1.hot-update.js.map