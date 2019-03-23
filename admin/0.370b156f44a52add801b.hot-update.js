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
        'font-family': open - sans
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

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(138);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();


 // import './index.css'
// import SearchBox from '../SearchBox'

var NavBar = function NavBar(_ref) {
  var toggleNavbar = _ref.toggleNavbar,
      isActive = _ref.isActive;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["StaticQuery"], {
    query: "1346230460",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar is-fixed-top",
        "aria-label": "main navigation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-brand"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/",
        className: "navbar-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Shri Vitthal Hindu Mandir")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button navbar-burger " + (isActive ? 'is-active' : ''),
        "data-target": "navMenu",
        "aria-label": "Menu toggle button",
        onClick: toggleNavbar
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-menu " + (isActive ? 'is-active' : ''),
        id: "navMenu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "/"
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "/about"
      }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "/pricing"
      }, "Our Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "/contact"
      }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field is-grouped"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "control"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "button is-primary is-outlined",
        href: "https://us4.list-manage.com/subscribe?u=08406db9cc49d8dd58bd3a28a&id=f70b74727c"
      }, "Events")))))));
    }
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

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();

 // import config from '../../../data/config'

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "footer",
    className: "section block is-vcentered",
    style: {
      background: 'blue',
      padding: '10%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-centered is-size-4 is-uppercase has-text-weight-semibold is-large block has-text-white"
  }, "HELPING THE PEOPLE OF THE GREATER TORONTO AREA COME TOGETHER, GROW IN FAITH, AND TO CELEBRATE WHAT MAKES CANADA GREAT - OUR DIVERSITY."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section block is-flex is-horizontal-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "center",
    className: "button is-link is-centered is-mobile is-rounded is-medium center is-captialized",
    href: "http://shrivitthal.us4.list-manage1.com/subscribe?u=08406db9cc49d8dd58bd3a28a&id=f70b74727c",
    target: "_blank",
    rel: "nofollow noopener"
  }, "Join Us")));
};

var _default = Footer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Footer, "Footer", "C:\\Users\\ali12\\OneDrive\\Desktop\\charity-project-final\\src\\components\\Footer\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\ali12\\OneDrive\\Desktop\\charity-project-final\\src\\components\\Footer\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = {
  siteTitle: 'SVHM Temple',
  // Site title.
  siteTitleAlt: 'SVHM Temple',
  // Alternative site title for SEO.
  siteLogo: '/icons/icon-512x512.png',
  // Logo used for SEO and manifest.
  siteUrl: 'https://gatsby-starter-business.netlify.com',
  // Domain of your website without pathPrefix.
  pathPrefix: '/',
  // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-business/.
  siteDescription: 'Leverage Gatsby Business Starter for your Business.',
  // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml',
  siteFBAppID: '',
  // FB Application ID for using app insights
  googleTagManagerID: '',
  // GTM tracking ID.
  disqusShortname: 'gatsby-business-starter',
  // Disqus shortname.
  userName: 'Vaibhav Sharma',
  userTwitter: 'vaibhaved',
  userLocation: 'Delhi NCR, India',
  userDescription: '',
  copyright: 'Copyright © Gatsby Starter Business 2018-2019. All Rights Reserved.',
  // Copyright string for the footer of the website and RSS feed.
  themeColor: '#00d1b2',
  // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff' // Used for setting manifest background color.

};

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

})
//# sourceMappingURL=0.370b156f44a52add801b.hot-update.js.map