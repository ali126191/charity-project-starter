webpackHotUpdate(0,{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(256);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(287);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(150);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(215);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(216);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(288);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(147);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(292);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "C:\\Users\\ali12\\OneDrive\\Desktop\\charity-project-final\\src\\components\\ContactPageTemplate\\index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();


 // import Helmet from 'react-helmet'




var encode = function encode(data) {
  return Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');
};

var ContactPageTemplate =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(ContactPageTemplate, _Component);

  function ContactPageTemplate(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleChange = function (e) {
      var _this$setState;

      _this.setState((_this$setState = {}, _this$setState[e.target.name] = e.target.value, _this$setState));
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var form = e.target; // eslint-disable-next-line

      fetch('/?no-cache=1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encode(Object.assign({
          'form-name': form.getAttribute('name')
        }, _this.state))
      }).then(function () {
        return Object(gatsby_link__WEBPACK_IMPORTED_MODULE_7__["navigate"])(form.getAttribute('action'));
      }) // eslint-disable-next-line
      .catch(function (error) {
        return alert(error);
      });
    };

    _this.state = {
      isValidated: false
    };
    return _this;
  }

  var _proto = ContactPageTemplate.prototype;

  _proto.render = function render() {
    // const {title, subtitle, meta_title, meta_description} = this.props
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
      className: "hero is-primary is-bold is-medium",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "hero-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "columns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "column is-10 is-offset-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
      id: "h1",
      className: "title has-text-centered is-size-1 is-capitalized is-spaced",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "SVHM"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
      className: "subtitle has-text-centered is-size-2 is-capitalized",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Community"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
      className: "subtitle has-text-centered is-size-3 is-capitalized",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Culture"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
      className: "subtitle has-text-centered is-size-4 is-capitalized",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "- SHRI VITTHAL HINDU MANDIR -"))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
      className: "section section--gradient",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
      className: "section block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
      className: "content has-text-centered has-text-weight-semibold is-size-3 is-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "CONTACT US"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
      className: "content has-text-centered has-text-weight-semibold is-size-4 is-uppercase is-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "You can contact us directly at ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "info@shrivitthal.com")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
      className: "section block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
      className: "content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "WHERE WE ARE"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      className: "content has-text-centered is-size-4 is-uppercase h-center",
      href: "https://www.google.com/maps/place/Shri+Vitthal+Hindu+Mandir,+5359+Timberlea+Blvd+%2310,+Mississauga,+ON+L4W+4N5/@43.6310776,-79.6429866,16z/data=!4m2!3m1!1s0x882b38aeadba59af:0x3dd6ccc430171a2e",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "\u2014 Get Directions \u2014"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("figure", {
      className: "image is-16by9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
      src: "https://shrivitthal.com/wp-content/uploads/2018/02/vithoba.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    })))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return ContactPageTemplate;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

; // ContactPageTemplate.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   meta_title: PropTypes.string,
//   meta_description: PropTypes.string,
// }

var _default = ContactPageTemplate;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(encode, "encode", "C:\\Users\\ali12\\OneDrive\\Desktop\\charity-project-final\\src\\components\\ContactPageTemplate\\index.js");
  reactHotLoader.register(ContactPageTemplate, "ContactPageTemplate", "C:\\Users\\ali12\\OneDrive\\Desktop\\charity-project-final\\src\\components\\ContactPageTemplate\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\ali12\\OneDrive\\Desktop\\charity-project-final\\src\\components\\ContactPageTemplate\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ })

})
//# sourceMappingURL=0.3d78dca31629c56f4b94.hot-update.js.map