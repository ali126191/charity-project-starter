webpackHotUpdate(0,{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
var _jsxFileName = "C:\\Users\\ali12\\OneDrive\\Desktop\\charity-project-final\\src\\components\\NavBar\\index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();





var NavBar = function NavBar(_ref) {
  var toggleNavbar = _ref.toggleNavbar,
      isActive = _ref.isActive;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["StaticQuery"], {
    query: "1346230460",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar is-fixed-top",
        "aria-label": "main navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/",
        className: "navbar-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Shri Vitthal Hindu Mandir")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button navbar-burger " + (isActive ? 'is-active' : ''),
        "data-target": "navMenu",
        "aria-label": "Menu toggle button",
        onClick: toggleNavbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-menu " + (isActive ? 'is-active' : ''),
        id: "navMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "/pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Our Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "/blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field is-grouped",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "button is-primary is-outlined",
        to: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Events")))))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

var _default = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavBar, "NavBar", "C:\\Users\\ali12\\OneDrive\\Desktop\\charity-project-final\\src\\components\\NavBar\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\ali12\\OneDrive\\Desktop\\charity-project-final\\src\\components\\NavBar\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ })

})
//# sourceMappingURL=0.f203348e02563999c4cb.hot-update.js.map