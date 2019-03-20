webpackHotUpdate(0,[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HomePageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129);




var HomePagePreview = function HomePagePreview(_ref) {
  var entry = _ref.entry,
      getAsset = _ref.getAsset;
  var entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs']);
  var blurbs = entryBlurbs ? entryBlurbs.toJS() : [];
  var entryTestimonials = entry.getIn(['data', 'testimonials']);
  var testimonials = entryTestimonials ? entryTestimonials.toJS() : [];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePageTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: entry.getIn(['data', 'title']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_description: entry.getIn(['data', 'meta_description']),
    heading: entry.getIn(['data', 'heading']),
    description: entry.getIn(['data', 'description']),
    offerings: {
      blurbs: blurbs
    },
    testimonials: testimonials
  });
};

HomePagePreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  getAsset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (HomePagePreview);

/***/ }),
/* 6 */
false,
/* 7 */
false,
/* 8 */
false,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
false,
/* 15 */,
/* 16 */
false,
/* 17 */
false,
/* 18 */
false,
/* 19 */
false,
/* 20 */,
/* 21 */
false,
/* 22 */
false,
/* 23 */
false,
/* 24 */,
/* 25 */
false,
/* 26 */
false,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
false,
/* 33 */
false,
/* 34 */
false,
/* 35 */
false,
/* 36 */
false,
/* 37 */
false,
/* 38 */
false,
/* 39 */
false,
/* 40 */
false,
/* 41 */
false,
/* 42 */
false,
/* 43 */
false,
/* 44 */
false,
/* 45 */
false,
/* 46 */
false,
/* 47 */
false,
/* 48 */
false,
/* 49 */
false,
/* 50 */
false,
/* 51 */
false,
/* 52 */
false,
/* 53 */
false,
/* 54 */
false,
/* 55 */
false,
/* 56 */
false,
/* 57 */
false,
/* 58 */
false,
/* 59 */
false,
/* 60 */
false,
/* 61 */
false,
/* 62 */
false,
/* 63 */
false,
/* 64 */
false,
/* 65 */
false,
/* 66 */
false,
/* 67 */
false,
/* 68 */
false,
/* 69 */
false,
/* 70 */
false,
/* 71 */
false,
/* 72 */
false,
/* 73 */
false,
/* 74 */
false,
/* 75 */
false,
/* 76 */
false,
/* 77 */
false,
/* 78 */
false,
/* 79 */
false,
/* 80 */
false,
/* 81 */
false,
/* 82 */
false,
/* 83 */
false,
/* 84 */
false,
/* 85 */
false,
/* 86 */
false,
/* 87 */
false,
/* 88 */
false,
/* 89 */
false,
/* 90 */
false,
/* 91 */
false,
/* 92 */
false,
/* 93 */
false,
/* 94 */
false,
/* 95 */
false,
/* 96 */
false,
/* 97 */
false,
/* 98 */
false,
/* 99 */
false,
/* 100 */
false,
/* 101 */
false,
/* 102 */
false,
/* 103 */
false,
/* 104 */
false,
/* 105 */
false,
/* 106 */
false,
/* 107 */
false,
/* 108 */
false,
/* 109 */
false,
/* 110 */
false,
/* 111 */
false,
/* 112 */
false,
/* 113 */
false,
/* 114 */
false,
/* 115 */
false,
/* 116 */
false,
/* 117 */
false,
/* 118 */
false,
/* 119 */
false,
/* 120 */
false,
/* 121 */
false,
/* 122 */
false,
/* 123 */
false,
/* 124 */
false,
/* 125 */
false,
/* 126 */
false,
/* 127 */
false,
/* 128 */
false,
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(130);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(138);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);

 // import Offerings from '../Offerings'
// import Testimonials from '../Testimonials'




var HomePageTemplate = function HomePageTemplate(_ref) {
  var title = _ref.title,
      heading = _ref.heading,
      description = _ref.description,
      offerings = _ref.offerings,
      meta_title = _ref.meta_title,
      meta_description = _ref.meta_description,
      testimonials = _ref.testimonials;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=yes"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "generator",
    content: "Gatsby 2.1.23"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, meta_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: meta_description
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero is-primary is-bold is-medium"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "h1",
    className: "title has-text-centered is-size-2 is-capitalized"
  }, "Mississauga Hindu Temple In The hear of the greater toronto area that welcomes all regarless of race or religious beliefs. come visit one of canada's oldest hindu mandir's and discover the beauty of celebrating diversity"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section section--gradient"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large"
  }, "Welcome to Svhms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content is-size-5"
  }, "Shri Vitthal Hindu Mandir (SVHM) is one of Mississauga\u2019s longest running registered non-profit devoted to bringing families together, providing a safe place of worship, assisting new comers transition into the Canadian life, and preserving old traditions while embracing new ones. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content is-size-5"
  }, "Established in 1996 in the beautiful city of Mississauga, Ontario, Canada \u2014 one of Canada\u2019s fastest growing and diverse cities \u2014 we abide by the old simple code known as the \u201CSystem of Vedanta\u201D which combines religion, philosophy, and innovative nature of the Hindu's.  The Vedanta teaches us that we are all divine, regardless of creed, class, gender, and ethnicity, and that our souls divinity may be manifested through worship, contemplation, and unselfish work.  At SVHM we welcome everyone."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content is-size-5"
  }, "The Mandir is located close to Toronto, Brampton, Oakville, Richmond Hill, Milton, and Etobicoke. Come visit us today and join our community, all are welcome!"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "video-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "temple video",
    width: "1035",
    height: "1000",
    src: "https://www.youtube.com/embed/mgabrMvtUrw",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large"
  }, "HINDU TEMPLE IN MISSISSAUGA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5"
  }, " SVHM is different from other the other temples and mandir\u2019s in and around Toronto, Richmond Hill, Brampton, and Mississauga as it is more family oriented and transparent. The temple does not fund any external political groups and adheres to CRA policies for non profit organizations. "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-blue"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "count is-size-4 has-text-weight-light"
  }, "\"Immigrating from Northern India in 2016, I did not find a facility in Toronto that provided a place where I can pray, mediate, practice yoga, and meet other Canadian-Tibetans like myself. Then I discovered SVHM, which has been instrumental in my journey of transitioning into the Canadian lifestyle, helping me establish myself in the GTA, build a network of quality peers who share my values, and where I can peacefully pray.\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-vcentered is-gapless is-mobile is-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image is-128x128"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "is-rounded",
    src: "https://shrivitthal.com/wp-content/uploads/2018/02/25497478040_140ce47f31_k.jpg",
    alt: "25497478040_140ce47f31_k.jpg"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5 is-uppercase is-centered"
  }, "TSERING WANGCHUKs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-6 is-centered"
  }, "Tibetan-Canadian")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-blue"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-4"
  }, " SVHM is different from other the other temples and mandir\u2019s in and around Toronto, Richmond Hill, Brampton, and Mississauga as it is more family oriented and transparent. The temple does not fund any external political groups and adheres to CRA policies for non profit organizations. "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large"
  }, "WHAT WE OFFER"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-full block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-vcentered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "is-size-4 has-text-link is-uppercase"
  }, "CULTURAL PRESERVATION"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5"
  }, "Through events and story telling, we keep the ancient Hindu traditions alive ensuring their adoption by the next generation of Canadians.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "video-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "video one",
    width: "1035",
    height: "1000",
    src: "https://www.youtube.com/embed/mgabrMvtUrw",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-full-width"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column  is-full block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-vcentered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "is-size-4 has-text-link is-uppercase"
  }, "A PLACE OF WORSHIP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5"
  }, "Our primary divine figureheads are Vitthoba, Ganesh, & Sai Baba however members of our community are free to worship and pray to their god/goddess of choice.  Our facility has integrated most idols and we frequently hold cross-cultural events with other non-profits and places of worship.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "video-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "video two",
    width: "1522",
    height: "856",
    src: "https://www.youtube.com/embed/Fa9dFBf5Z4A",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-full-width"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-full block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-vcentered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "is-size-4 has-text-link is-uppercase"
  }, "EMBRACE CANADA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5"
  }, "Throughout the year we hold numerous events that allow new immigrants and visiting dignitaries to experience Canadian culture \u2013 true north strong and free."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5"
  }, "We also help newcomers transition into the Canadian life by helping them learn the language and idioms, cultural norms, and connecting them with other community events as well as government services.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "video-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "video three",
    width: "1522",
    height: "856",
    src: "https://www.youtube.com/embed/I73Hvl7nhfw",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-full-width"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large"
  }, "EVENTS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5 has-text-left"
  }, "The following our are current events:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table is-fullwidth"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Event"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Time"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/shri-devi-mahalakshmi-upasana/",
    target: "_blank",
    rel: "noopener"
  }, "Shri Devi Mahalakshmi Upasana")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Shri Lakashmi Adoration/Worship."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Tuesday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "6:00pm to 7:00pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/hanuman-chalisa/",
    target: "_blank",
    rel: "noopener"
  }, "Hanuman Chalisa")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Tuesday\u2019s Hanumanji\u2019s sacred hymn recital."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Tuesday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "7:00pm to 9:00pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/hanuman-chalisa/",
    target: "_blank",
    rel: "noopener"
  }, "Hanuman Chalisa")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Saturday\u2019s Hanumanji\u2019s sacred hymn recital."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Saturday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "12:30pm to 1:00pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/shirdi-sai-baba-toronto/",
    target: "_blank",
    rel: "noopener"
  }, "Sai Baba Adoration")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "A day devoted to the prayer and worship of Shri Sai Baba of Shirdi."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Thursday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "6:00pm to 9:00pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Classical ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/indian-dance-classess-in-mississauga/",
    target: "_blank",
    rel: "noopener"
  }, "Indian Dance Class")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Classical Bharatanatyam dance class for youth."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Friday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "7:00pm to 8:30pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Sai Baba Kakad Aarthi & Mahima"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Sai Baba morning aarthi followed by breakfast."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Saturday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "8:30am to 10:00am")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Vishnu Sahasranamam"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Reciting the thousand names of Lord Vishnu."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Saturday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "12:00pm to 12:30pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/vedanta-society-of-toronto/",
    target: "_blank",
    rel: "noopener"
  }, "Sloka Class")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Teaching youth different verses of ancient text, bhajans and stories."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Saturday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "3:00pm to 4:00pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Lakshmi Stotram"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Sri Lakshmi Sahasranama; Prayers and worship of Goddess Lakshmi."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Saturday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "12:45pm to 1:00pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Shri Vithoba & Shri Rakhumai"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Prayers, Bhajans, and worship of Lord Vithoba & Rakhumai."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Sunday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "6:00pm to 8:00pm")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large"
  }, "Location & Service times"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline is-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content is-size-5"
  }, "SVHM is open Monday to Sunday from 8:00 pm to 9:00 pm. We are located in the beautiful wooded area near the Hersey Sports Complex and close to all major highways and the Square One Shopping Centre, the Community Center\u2019s 3,000 square foot hall and full service kitchen are available for rent."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image is-1000x1000 block is-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://shrivitthal.com/wp-content/uploads/2018/02/shri-vitthal-mandir-location.jpg",
    alt: "Shri Vitthal Mandir Location"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "column",
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "center",
    className: "content button is-link is-centered is-mobile is-rounded is-medium center",
    href: "https://www.google.ca/maps/place/Shri+Vitthal+Hindu+Mandir/@43.6356401,-79.7255082,13z/data=!4m19!1m13!4m12!1m4!2m2!1d-79.7378192!2d43.6499971!4e1!1m6!1m2!1s0x882b38aeadba59af:0x3dd6ccc430171a2e!2sShri+Vitthal+Hindu+Mandir,+5359+Timberlea+Blvd+%2310,+Mississauga,+ON+L4W+4N5!2m2!1d-79.6429866!2d43.6310776!3m4!1s0x882b38aeadba59af:0x3dd6ccc430171a2e!8m2!3d43.6310776!4d-79.6429866",
    target: "_blank",
    rel: "nofollow noopener"
  }, "Directions")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-centered is-size-4 is-uppercase is-large block"
  }, "PROUDLY SUPPORTED BY:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section block is-flex is-horizontal-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-mobile is-vcentered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image is-256x256"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://shrivitthal.com/wp-content/uploads/2018/02/mississauga-hindu-temple-300x61.jpg",
    alt: "img1"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image is-256x256"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://shrivitthal.com/wp-content/uploads/2018/02/ontario-logo-2.jpg",
    alt: "img2"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image is-256x256"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://shrivitthal.com/wp-content/uploads/2018/02/google-nonprofit.jpg",
    alt: "img3"
  })))))))));
};

HomePageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  meta_title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  meta_description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  offerings: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    blurbs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
  }),
  testimonials: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (HomePageTemplate);

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AboutPageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(140);




var AboutPagePreview = function AboutPagePreview(_ref) {
  var entry = _ref.entry,
      widgetFor = _ref.widgetFor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AboutPageTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: entry.getIn(['data', 'title']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_description: entry.getIn(['data', 'meta_description']),
    content: widgetFor('body')
  });
};

AboutPagePreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  widgetFor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (AboutPagePreview);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var AboutPageTemplate = function AboutPageTemplate(_ref) {
  var title = _ref.title,
      content = _ref.content,
      contentComponent = _ref.contentComponent;
  var PageContent = contentComponent || _Content__WEBPACK_IMPORTED_MODULE_1__["default"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Helmet, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=yes"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "generator",
    content: "Gatsby 2.1.23"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, meta_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: meta_description
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero is-primary is-bold is-medium"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "h1",
    className: "title has-text-centered is-size-2 is-capitalized"
  }, "Mississauga Hindu Temple In The hear of the greater toronto area that welcomes all regarless of race or religious beliefs. come visit one of canada's oldest hindu mandir's and discover the beauty of celebrating diversity"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section section--gradient"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large"
  }, "Welcome to Svhms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content is-size-5"
  }, "Shri Vitthal Hindu Mandir (SVHM) is one of Mississauga\u2019s longest running registered non-profit devoted to bringing families together, providing a safe place of worship, assisting new comers transition into the Canadian life, and preserving old traditions while embracing new ones. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content is-size-5"
  }, "Established in 1996 in the beautiful city of Mississauga, Ontario, Canada \u2014 one of Canada\u2019s fastest growing and diverse cities \u2014 we abide by the old simple code known as the \u201CSystem of Vedanta\u201D which combines religion, philosophy, and innovative nature of the Hindu's.  The Vedanta teaches us that we are all divine, regardless of creed, class, gender, and ethnicity, and that our souls divinity may be manifested through worship, contemplation, and unselfish work.  At SVHM we welcome everyone."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content is-size-5"
  }, "The Mandir is located close to Toronto, Brampton, Oakville, Richmond Hill, Milton, and Etobicoke. Come visit us today and join our community, all are welcome!"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "video-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "temple video",
    width: "1035",
    height: "1000",
    src: "https://www.youtube.com/embed/mgabrMvtUrw",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large"
  }, "HINDU TEMPLE IN MISSISSAUGA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5"
  }, " SVHM is different from other the other temples and mandir\u2019s in and around Toronto, Richmond Hill, Brampton, and Mississauga as it is more family oriented and transparent. The temple does not fund any external political groups and adheres to CRA policies for non profit organizations. "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-blue"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "count is-size-4 has-text-weight-light"
  }, "\"Immigrating from Northern India in 2016, I did not find a facility in Toronto that provided a place where I can pray, mediate, practice yoga, and meet other Canadian-Tibetans like myself. Then I discovered SVHM, which has been instrumental in my journey of transitioning into the Canadian lifestyle, helping me establish myself in the GTA, build a network of quality peers who share my values, and where I can peacefully pray.\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-vcentered is-gapless is-mobile is-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image is-128x128"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "is-rounded",
    src: "https://shrivitthal.com/wp-content/uploads/2018/02/25497478040_140ce47f31_k.jpg",
    alt: "25497478040_140ce47f31_k.jpg"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5 is-uppercase is-centered"
  }, "TSERING WANGCHUKs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-6 is-centered"
  }, "Tibetan-Canadian")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-blue"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-4"
  }, " SVHM is different from other the other temples and mandir\u2019s in and around Toronto, Richmond Hill, Brampton, and Mississauga as it is more family oriented and transparent. The temple does not fund any external political groups and adheres to CRA policies for non profit organizations. "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large"
  }, "WHAT WE OFFER"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-full block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-vcentered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "is-size-4 has-text-link is-uppercase"
  }, "CULTURAL PRESERVATION"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5"
  }, "Through events and story telling, we keep the ancient Hindu traditions alive ensuring their adoption by the next generation of Canadians.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "video-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "video one",
    width: "1035",
    height: "1000",
    src: "https://www.youtube.com/embed/mgabrMvtUrw",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-full-width"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column  is-full block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-vcentered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "is-size-4 has-text-link is-uppercase"
  }, "A PLACE OF WORSHIP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5"
  }, "Our primary divine figureheads are Vitthoba, Ganesh, & Sai Baba however members of our community are free to worship and pray to their god/goddess of choice.  Our facility has integrated most idols and we frequently hold cross-cultural events with other non-profits and places of worship.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "video-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "video two",
    width: "1522",
    height: "856",
    src: "https://www.youtube.com/embed/Fa9dFBf5Z4A",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-full-width"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-full block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-vcentered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "is-size-4 has-text-link is-uppercase"
  }, "EMBRACE CANADA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5"
  }, "Throughout the year we hold numerous events that allow new immigrants and visiting dignitaries to experience Canadian culture \u2013 true north strong and free."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5"
  }, "We also help newcomers transition into the Canadian life by helping them learn the language and idioms, cultural norms, and connecting them with other community events as well as government services.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "video-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "video three",
    width: "1522",
    height: "856",
    src: "https://www.youtube.com/embed/I73Hvl7nhfw",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr-full-width"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large"
  }, "EVENTS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5 has-text-left"
  }, "The following our are current events:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table is-fullwidth"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Event"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Time"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/shri-devi-mahalakshmi-upasana/",
    target: "_blank",
    rel: "noopener"
  }, "Shri Devi Mahalakshmi Upasana")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Shri Lakashmi Adoration/Worship."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Tuesday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "6:00pm to 7:00pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/hanuman-chalisa/",
    target: "_blank",
    rel: "noopener"
  }, "Hanuman Chalisa")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Tuesday\u2019s Hanumanji\u2019s sacred hymn recital."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Tuesday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "7:00pm to 9:00pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/hanuman-chalisa/",
    target: "_blank",
    rel: "noopener"
  }, "Hanuman Chalisa")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Saturday\u2019s Hanumanji\u2019s sacred hymn recital."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Saturday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "12:30pm to 1:00pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/shirdi-sai-baba-toronto/",
    target: "_blank",
    rel: "noopener"
  }, "Sai Baba Adoration")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "A day devoted to the prayer and worship of Shri Sai Baba of Shirdi."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Thursday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "6:00pm to 9:00pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Classical ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/indian-dance-classess-in-mississauga/",
    target: "_blank",
    rel: "noopener"
  }, "Indian Dance Class")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Classical Bharatanatyam dance class for youth."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Friday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "7:00pm to 8:30pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Sai Baba Kakad Aarthi & Mahima"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Sai Baba morning aarthi followed by breakfast."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Saturday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "8:30am to 10:00am")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Vishnu Sahasranamam"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Reciting the thousand names of Lord Vishnu."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Saturday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "12:00pm to 12:30pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://web.archive.org/web/20161101033503/http://www.shrivitthal.com/events/vedanta-society-of-toronto/",
    target: "_blank",
    rel: "noopener"
  }, "Sloka Class")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Teaching youth different verses of ancient text, bhajans and stories."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Saturday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "3:00pm to 4:00pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Lakshmi Stotram"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Sri Lakshmi Sahasranama; Prayers and worship of Goddess Lakshmi."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Saturday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "12:45pm to 1:00pm")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Shri Vithoba & Shri Rakhumai"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Prayers, Bhajans, and worship of Lord Vithoba & Rakhumai."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Sunday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "6:00pm to 8:00pm")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "content has-text-centered has-text-weight-semibold is-size-3 is-uppercase is-large"
  }, "Location & Service times"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline is-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content is-size-5"
  }, "SVHM is open Monday to Sunday from 8:00 pm to 9:00 pm. We are located in the beautiful wooded area near the Hersey Sports Complex and close to all major highways and the Square One Shopping Centre, the Community Center\u2019s 3,000 square foot hall and full service kitchen are available for rent."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image is-1000x1000 block is-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://shrivitthal.com/wp-content/uploads/2018/02/shri-vitthal-mandir-location.jpg",
    alt: "Shri Vitthal Mandir Location"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "column",
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "center",
    className: "content button is-link is-centered is-mobile is-rounded is-medium center",
    href: "https://www.google.ca/maps/place/Shri+Vitthal+Hindu+Mandir/@43.6356401,-79.7255082,13z/data=!4m19!1m13!4m12!1m4!2m2!1d-79.7378192!2d43.6499971!4e1!1m6!1m2!1s0x882b38aeadba59af:0x3dd6ccc430171a2e!2sShri+Vitthal+Hindu+Mandir,+5359+Timberlea+Blvd+%2310,+Mississauga,+ON+L4W+4N5!2m2!1d-79.6429866!2d43.6310776!3m4!1s0x882b38aeadba59af:0x3dd6ccc430171a2e!8m2!3d43.6310776!4d-79.6429866",
    target: "_blank",
    rel: "nofollow noopener"
  }, "Directions")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-centered is-size-4 is-uppercase is-large block"
  }, "PROUDLY SUPPORTED BY:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section block is-flex is-horizontal-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-mobile is-vcentered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image is-256x256"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://shrivitthal.com/wp-content/uploads/2018/02/mississauga-hindu-temple-300x61.jpg",
    alt: "img1"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image is-256x256"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://shrivitthal.com/wp-content/uploads/2018/02/ontario-logo-2.jpg",
    alt: "img2"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: "image is-256x256"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://shrivitthal.com/wp-content/uploads/2018/02/google-nonprofit.jpg",
    alt: "img3"
  })))))))));
};

AboutPageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  contentComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (AboutPageTemplate);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLContent", function() { return HTMLContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var HTMLContent = function HTMLContent(_ref) {
  var content = _ref.content,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};

var Content = function Content(_ref2) {
  var content = _ref2.content,
      className = _ref2.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, content);
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ArticleTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(143);




var ArticlePreview = function ArticlePreview(_ref) {
  var entry = _ref.entry,
      widgetFor = _ref.widgetFor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ArticleTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: widgetFor('body'),
    cover: entry.getIn(['data', 'cover']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_desc: entry.getIn(['data', 'meta_description']),
    title: entry.getIn(['data', 'title']),
    slug: entry.getIn(['data', 'slug'])
  });
};

ArticlePreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  widgetFor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ArticlePreview);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(144);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(145);





var ArticleTemplate = function ArticleTemplate(_ref) {
  var content = _ref.content,
      contentComponent = _ref.contentComponent,
      cover = _ref.cover,
      meta_title = _ref.meta_title,
      meta_desc = _ref.meta_desc,
      tags = _ref.tags,
      title = _ref.title;
  var PostContent = contentComponent || _Content__WEBPACK_IMPORTED_MODULE_1__["default"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title is-size-2 has-text-weight-bold is-bold-light"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: cover,
    alt: title
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostContent, {
    content: content
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "4rem"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Tags"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "taglist"
  }, tags && tags.length ? tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: tag + "tag"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/tags/" + Object(lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"])(tag) + "/"
    }, tag));
  }) : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleTemplate);

/***/ }),
/* 144 */,
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(146);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });




var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "development" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext);

/***/ }),
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (true) {
  module.exports = preferDefault(__webpack_require__(160));
} else {}

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(161);
var _pages_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(161, 1);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(162);
/* harmony import */ var _json_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(263);






var DevPageRenderer = function DevPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_3__["default"].getResourcesForPathnameSync(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_json_store__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pages: _pages_json__WEBPACK_IMPORTED_MODULE_2__,
    location: location,
    pageResources: pageResources
  });
};

DevPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DevPageRenderer);

/***/ }),
/* 161 */,
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postInitialRenderWork", function() { return postInitialRenderWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setApiRunnerForLoader", function() { return setApiRunnerForLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(195);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(199);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(209);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(214);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(215);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(229);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(230);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _find_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(247);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(251);
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(253);












var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

var devGetPageData;
var inInitialRender = true;
var hasFetched = Object.create(null);
var syncRequires = {};
var asyncRequires = {};
var jsonDataPaths = {};
var fetchHistory = [];
var fetchingPageResourceMapPromise = null;
var fetchedPageResourceMap = false;
/**
 * Indicate if pages manifest is loaded
 *  - in production it is split to separate "pages-manifest" chunk that need to be lazy loaded,
 *  - in development it is part of single "common" chunk and is available from the start.
 */

var hasPageResourceMap = "development" !== "production";
var apiRunner;
var failedPaths = {};
var MAX_HISTORY = 5;
var jsonPromiseStore = {};

if (true) {
  devGetPageData = __webpack_require__(254).getPageData;
}
/**
 * Fetch resource map (pages data and paths to json files with results of
 *  queries)
 */


var fetchPageResourceMap = function fetchPageResourceMap() {
  if (!fetchingPageResourceMapPromise) {
    fetchingPageResourceMapPromise = new Promise(function (resolve) {
      asyncRequires.data().then(function (_ref) {
        var pages = _ref.pages,
            dataPaths = _ref.dataPaths;
        // TODO — expose proper way to access this data from plugins.
        // Need to come up with an API for plugins to access
        // site info.
        window.___dataPaths = dataPaths;
        queue.addPagesArray(pages);
        queue.addDataPaths(dataPaths);
        hasPageResourceMap = true;
        resolve(fetchedPageResourceMap = true);
      }).catch(function (e) {
        console.warn("Failed to fetch pages manifest. Gatsby will reload on next navigation."); // failed to grab pages metadata
        // for now let's just resolve this - on navigation this will cause missing resources
        // and will trigger page reload and then it will retry
        // this can happen with service worker updates when webpack manifest points to old
        // chunk that no longer exists on server

        resolve(fetchedPageResourceMap = true);
      });
    });
  }

  return fetchingPageResourceMapPromise;
};

var createJsonURL = function createJsonURL(jsonName) {
  return "" + "/static/d/" + jsonName + ".json";
};

var createComponentUrls = function createComponentUrls(componentChunkName) {
  return window.___chunkMapping[componentChunkName].map(function (chunk) {
    return "" + chunk;
  });
};

var fetchResource = function fetchResource(resourceName) {
  // Find resource
  var resourceFunction;

  if (resourceName.slice(0, 12) === "component---") {
    resourceFunction = asyncRequires.components[resourceName];
  } else {
    if (resourceName in jsonPromiseStore) {
      resourceFunction = function resourceFunction() {
        return jsonPromiseStore[resourceName];
      };
    } else {
      resourceFunction = function resourceFunction() {
        var fetchPromise = new Promise(function (resolve, reject) {
          var url = createJsonURL(jsonDataPaths[resourceName]);
          var req = new XMLHttpRequest();
          req.open("GET", url, true);
          req.withCredentials = true;

          req.onreadystatechange = function () {
            if (req.readyState == 4) {
              if (req.status === 200) {
                resolve(JSON.parse(req.responseText));
              } else {
                delete jsonPromiseStore[resourceName];
                reject();
              }
            }
          };

          req.send(null);
        });
        jsonPromiseStore[resourceName] = fetchPromise;
        return fetchPromise;
      };
    }
  } // Download the resource


  hasFetched[resourceName] = true;
  return new Promise(function (resolve) {
    var fetchPromise = resourceFunction();
    var failed = false;
    return fetchPromise.catch(function () {
      failed = true;
    }).then(function (component) {
      fetchHistory.push({
        resource: resourceName,
        succeeded: !failed
      });
      fetchHistory = fetchHistory.slice(-MAX_HISTORY);
      resolve(component);
    });
  });
};

var prefetchResource = function prefetchResource(resourceName) {
  if (resourceName.slice(0, 12) === "component---") {
    return Promise.all(createComponentUrls(resourceName).map(function (url) {
      return Object(_prefetch__WEBPACK_IMPORTED_MODULE_10__["default"])(url);
    }));
  } else {
    var url = createJsonURL(jsonDataPaths[resourceName]);
    return Object(_prefetch__WEBPACK_IMPORTED_MODULE_10__["default"])(url);
  }
};

var getResourceModule = function getResourceModule(resourceName) {
  return fetchResource(resourceName).then(preferDefault);
};

var appearsOnLine = function appearsOnLine() {
  var isOnLine = navigator.onLine;

  if (typeof isOnLine === "boolean") {
    return isOnLine;
  } // If no navigator.onLine support assume onLine if any of last N fetches succeeded


  var succeededFetch = fetchHistory.find(function (entry) {
    return entry.succeeded;
  });
  return !!succeededFetch;
};

var handleResourceLoadError = function handleResourceLoadError(path, message) {
  if (!failedPaths[path]) {
    failedPaths[path] = message;
  }

  if (appearsOnLine() && window.location.pathname.replace(/\/$/g, "") !== path.replace(/\/$/g, "")) {
    window.location.pathname = path;
  }
};

var onPrefetchPathname = function onPrefetchPathname(pathname) {
  if (!prefetchTriggered[pathname]) {
    apiRunner("onPrefetchPathname", {
      pathname: pathname
    });
    prefetchTriggered[pathname] = true;
  }
};

var onPostPrefetchPathname = function onPostPrefetchPathname(pathname) {
  if (!prefetchCompleted[pathname]) {
    apiRunner("onPostPrefetchPathname", {
      pathname: pathname
    });
    prefetchCompleted[pathname] = true;
  }
};
/**
 * Check if we should fallback to resources for 404 page if resources for a page are not found
 *
 * We can't do that when we don't have full pages manifest - we don't know if page exist or not if we don't have it.
 * We also can't do that on initial render / mount in case we just can't load resources needed for first page.
 * Not falling back to 404 resources will cause "EnsureResources" component to handle scenarios like this with
 * potential reload
 * @param {string} path Path to a page
 */


var shouldFallbackTo404Resources = function shouldFallbackTo404Resources(path) {
  return (hasPageResourceMap || inInitialRender) && path !== "/404.html";
}; // Note we're not actively using the path data atm. There
// could be future optimizations however around trying to ensure
// we load all resources for likely-to-be-visited paths.
// let pathArray = []
// let pathCount = {}


var findPage;
var pathScriptsCache = {};
var prefetchTriggered = {};
var prefetchCompleted = {};
var disableCorePrefetching = false;
var queue = {
  addPagesArray: function addPagesArray(newPages) {
    findPage = Object(_find_page__WEBPACK_IMPORTED_MODULE_8__["default"])(newPages, "");
  },
  addDevRequires: function addDevRequires(devRequires) {
    syncRequires = devRequires;
  },
  addProdRequires: function addProdRequires(prodRequires) {
    asyncRequires = prodRequires;
  },
  addDataPaths: function addDataPaths(dataPaths) {
    jsonDataPaths = dataPaths;
  },
  // Hovering on a link is a very strong indication the user is going to
  // click on it soon so let's start prefetching resources for this
  // pathname.
  hovering: function hovering(path) {
    queue.getResourcesForPathname(path);
  },
  enqueue: function enqueue(path) {
    if (!apiRunner) console.error("Run setApiRunnerForLoader() before enqueing paths"); // Skip prefetching if we know user is on slow or constrained connection

    if ("connection" in navigator) {
      if ((navigator.connection.effectiveType || "").includes("2g")) {
        return false;
      }

      if (navigator.connection.saveData) {
        return false;
      }
    } // Tell plugins with custom prefetching logic that they should start
    // prefetching this path.


    onPrefetchPathname(path); // If a plugin has disabled core prefetching, stop now.

    if (disableCorePrefetching.some(function (a) {
      return a;
    })) {
      return false;
    } // Check if the page exists.


    var page = findPage(path); // In production, we lazy load page metadata. If that
    // hasn't been fetched yet, start fetching it now.

    if (false) {}

    if (!page) {
      return false;
    }

    if (true) {
      devGetPageData(page.path);
    } // Prefetch resources.


    if (false) {}

    return true;
  },
  getPage: function getPage(pathname) {
    return findPage(pathname);
  },
  getResourceURLsForPathname: function getResourceURLsForPathname(path) {
    var page = findPage(path);

    if (page) {
      return [].concat(createComponentUrls(page.componentChunkName), [createJsonURL(jsonDataPaths[page.jsonName])]);
    } else {
      return null;
    }
  },
  getResourcesForPathnameSync: function getResourcesForPathnameSync(path) {
    var page = findPage(path);

    if (page) {
      return pathScriptsCache[page.path];
    } else if (shouldFallbackTo404Resources(path)) {
      return queue.getResourcesForPathnameSync("/404.html");
    } else {
      return null;
    }
  },
  // Get resources (code/data) for a path. Fetches metdata first
  // if necessary and then the code/data bundles. Used for prefetching
  // and getting resources for page changes.
  getResourcesForPathname: function getResourcesForPathname(path) {
    return new Promise(function (resolve, reject) {
      // Production code path
      if (failedPaths[path]) {
        handleResourceLoadError(path, "Previously detected load failure for \"" + path + "\"");
        reject();
        return;
      }

      var page = findPage(path); // In production, we lazy load page metadata. If that
      // hasn't been fetched yet, start fetching it now.

      if (!page && !fetchedPageResourceMap && "development" === "production") {
        // If page wasn't found check and we didn't fetch resources map for
        // all pages, wait for fetch to complete and try to get resources again
        fetchPageResourceMap().then(function () {
          return resolve(queue.getResourcesForPathname(path));
        });
        return;
      }

      if (!page) {
        if (shouldFallbackTo404Resources(path)) {
          console.log("A page wasn't found for \"" + path + "\""); // Preload the custom 404 page

          resolve(queue.getResourcesForPathname("/404.html"));
          return;
        }

        resolve();
        return;
      } // Use the path from the page so the pathScriptsCache uses
      // the normalized path.


      path = page.path; // Check if it's in the cache already.

      if (pathScriptsCache[path]) {
        _emitter__WEBPACK_IMPORTED_MODULE_9__["default"].emit("onPostLoadPageResources", {
          page: page,
          pageResources: pathScriptsCache[path]
        });
        resolve(pathScriptsCache[path]);
        return;
      } // Nope, we need to load resource(s)


      _emitter__WEBPACK_IMPORTED_MODULE_9__["default"].emit("onPreLoadPageResources", {
        path: path
      }); // In development we know the code is loaded already
      // so we just return with it immediately.

      if (true) {
        var pageResources = {
          component: syncRequires.components[page.componentChunkName],
          page: page // Add to the cache.

        };
        pathScriptsCache[path] = pageResources;
        devGetPageData(page.path).then(function (pageData) {
          _emitter__WEBPACK_IMPORTED_MODULE_9__["default"].emit("onPostLoadPageResources", {
            page: page,
            pageResources: pageResources
          }); // Tell plugins the path has been successfully prefetched

          onPostPrefetchPathname(path);
          resolve(pageResources);
        });
      } else {}
    });
  }
};
var postInitialRenderWork = function postInitialRenderWork() {
  inInitialRender = false;

  if (false) {}
};
var setApiRunnerForLoader = function setApiRunnerForLoader(runner) {
  apiRunner = runner;
  disableCorePrefetching = apiRunner("disableCorePrefetching");
};
var publicLoader = {
  getResourcesForPathname: queue.getResourcesForPathname,
  getResourceURLsForPathname: queue.getResourceURLsForPathname,
  getResourcesForPathnameSync: queue.getResourcesForPathnameSync
};
/* harmony default export */ __webpack_exports__["default"] = (queue);

/***/ }),
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(249);
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(250);

// TODO add tests especially for handling prefixed links.


var pageCache = {};
/* harmony default export */ __webpack_exports__["default"] = (function (pages, pathPrefix) {
  if (pathPrefix === void 0) {
    pathPrefix = "";
  }

  return function (rawPathname) {
    var pathname = decodeURIComponent(rawPathname); // Remove the pathPrefix from the pathname.

    var trimmedPathname = Object(_strip_prefix__WEBPACK_IMPORTED_MODULE_2__["default"])(pathname, pathPrefix); // Remove any hashfragment

    if (trimmedPathname.split("#").length > 1) {
      trimmedPathname = trimmedPathname.split("#").slice(0, -1).join("");
    } // Remove search query


    if (trimmedPathname.split("?").length > 1) {
      trimmedPathname = trimmedPathname.split("?").slice(0, -1).join("");
    }

    if (pageCache[trimmedPathname]) {
      return pageCache[trimmedPathname];
    }

    var foundPage; // Array.prototype.find is not supported in IE so we use this somewhat odd
    // work around.

    pages.some(function (page) {
      var pathToMatch = page.matchPath ? page.matchPath : page.path;

      if (Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_1__["match"])(pathToMatch, trimmedPathname)) {
        foundPage = page;
        pageCache[trimmedPathname] = page;
        return true;
      } // Finally, try and match request with default document.


      if (Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_1__["match"])(page.path + "index.html", trimmedPathname)) {
        foundPage = page;
        pageCache[trimmedPathname] = page;
        return true;
      }

      return false;
    });
    return foundPage;
  };
});

/***/ }),
/* 248 */,
/* 249 */,
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */
/* harmony default export */ __webpack_exports__["default"] = (function (str, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }

  if (str.substr(0, prefix.length) === prefix) return str.slice(prefix.length);
  return str;
});

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(252);

var emitter = Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),
/* 252 */,
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(230);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);


var support = function support(feature) {
  if (typeof document === "undefined") {
    return false;
  }

  var fakeLink = document.createElement("link");

  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === "function") {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }

  return false;
};

var linkPrefetchStrategy = function linkPrefetchStrategy(url) {
  return new Promise(function (resolve, reject) {
    if (typeof document === "undefined") {
      reject();
      return;
    }

    var link = document.createElement("link");
    link.setAttribute("rel", "prefetch");
    link.setAttribute("href", url);
    link.onload = resolve;
    link.onerror = reject;
    var parentElement = document.getElementsByTagName("head")[0] || document.getElementsByName("script")[0].parentNode;
    parentElement.appendChild(link);
  });
};

var xhrPrefetchStrategy = function xhrPrefetchStrategy(url) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.withCredentials = true;

    req.onload = function () {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };

    req.send(null);
  });
};

var supportedPrefetchStrategy = support("prefetch") ? linkPrefetchStrategy : xhrPrefetchStrategy;
var preFetched = {};

var prefetch = function prefetch(url) {
  return new Promise(function (resolve) {
    if (preFetched[url]) {
      resolve();
      return;
    }

    supportedPrefetchStrategy(url).then(function () {
      resolve();
      preFetched[url] = true;
    }).catch(function () {}); // 404s are logged to the console anyway
  });
};

/* harmony default export */ __webpack_exports__["default"] = (prefetch);

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticQueryData", function() { return getStaticQueryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageQueryData", function() { return getPageQueryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsInitialized", function() { return getIsInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return socketIo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageData", function() { return getPageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPath", function() { return registerPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterPath", function() { return unregisterPath; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(230);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(255);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error_overlay_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(259);



var socket = null;
var staticQueryData = {};
var pageQueryData = {};
var isInitialized = false;
var getStaticQueryData = function getStaticQueryData() {
  return staticQueryData;
};
var getPageQueryData = function getPageQueryData() {
  return pageQueryData;
};
var getIsInitialized = function getIsInitialized() {
  return isInitialized;
};
function socketIo() {
  if (true) {
    if (!socket) {
      // Try to initialize web socket if we didn't do it already
      try {
        // eslint-disable-next-line no-undef
        socket = io();

        var didDataChange = function didDataChange(msg, queryData) {
          return !(msg.payload.id in queryData) || JSON.stringify(msg.payload.result) !== JSON.stringify(queryData[msg.payload.id]);
        };

        socket.on("message", function (msg) {
          if (msg.type === "staticQueryResult") {
            if (didDataChange(msg, staticQueryData)) {
              var _Object$assign;

              staticQueryData = Object.assign({}, staticQueryData, (_Object$assign = {}, _Object$assign[msg.payload.id] = msg.payload.result, _Object$assign));
            }
          } else if (msg.type === "pageQueryResult") {
            if (didDataChange(msg, pageQueryData)) {
              var _Object$assign2;

              pageQueryData = Object.assign({}, pageQueryData, (_Object$assign2 = {}, _Object$assign2[msg.payload.id] = msg.payload.result, _Object$assign2));
            }
          } else if (msg.type === "overlayError") {
            if (msg.payload.message) {
              Object(_error_overlay_handler__WEBPACK_IMPORTED_MODULE_2__["reportError"])(msg.payload.id, msg.payload.message);
            } else {
              Object(_error_overlay_handler__WEBPACK_IMPORTED_MODULE_2__["clearError"])(msg.payload.id);
            }
          }

          if (msg.type && msg.payload) {
            ___emitter.emit(msg.type, msg.payload);
          }
        });
      } catch (err) {
        console.error("Could not connect to socket.io on dev server.");
      }
    }

    return socket;
  } else {}
}
var inFlightGetPageDataPromiseCache = {};

function getPageData(pathname) {
  if (inFlightGetPageDataPromiseCache[pathname]) {
    return inFlightGetPageDataPromiseCache[pathname];
  } else {
    inFlightGetPageDataPromiseCache[pathname] = new Promise(function (resolve) {
      if (pageQueryData[pathname]) {
        delete inFlightGetPageDataPromiseCache[pathname];
        resolve(pageQueryData[pathname]);
      } else {
        var onPageDataCallback = function onPageDataCallback(msg) {
          if (msg.type === "pageQueryResult" && msg.payload.id === pathname) {
            socket.off("message", onPageDataCallback);
            delete inFlightGetPageDataPromiseCache[pathname];
            resolve(pageQueryData[pathname]);
          }
        };

        socket.on("message", onPageDataCallback);
        socket.emit("getDataForPath", pathname);
      }
    });
  }

  return inFlightGetPageDataPromiseCache[pathname];
} // Tell websocket-manager.js the new path we're on.
// This will help the backend prioritize queries for this
// path.


function registerPath(path) {
  socket.emit("registerPath", path);
} // Unregister the former path


function unregisterPath(path) {
  socket.emit("unregisterPath", path);
}



/***/ }),
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearError", function() { return clearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportError", function() { return reportError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMap", function() { return errorMap; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(215);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(260);
/* harmony import */ var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_error_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(262);
/* harmony import */ var react_error_overlay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_error_overlay__WEBPACK_IMPORTED_MODULE_3__);



 // Report runtime errors

react_error_overlay__WEBPACK_IMPORTED_MODULE_3__["startReportingRuntimeErrors"]({
  onError: function onError() {},
  filename: "/commons.js"
});
react_error_overlay__WEBPACK_IMPORTED_MODULE_3__["setEditorHandler"](function (errorLocation) {
  return window.fetch("/__open-stack-frame-in-editor?fileName=" + window.encodeURIComponent(errorLocation.fileName) + "&lineNumber=" + window.encodeURIComponent(errorLocation.lineNumber || 1));
});
var errorMap = {};

var handleErrorOverlay = function handleErrorOverlay() {
  var errors = Object.values(errorMap);

  if (errors.length > 0) {
    var errorMsg = errors.join("\n\n");
    react_error_overlay__WEBPACK_IMPORTED_MODULE_3__["reportBuildError"](errorMsg);
  } else {
    react_error_overlay__WEBPACK_IMPORTED_MODULE_3__["dismissBuildError"]();
  }
};

var clearError = function clearError(errorID) {
  delete errorMap[errorID];
  handleErrorOverlay();
};
var reportError = function reportError(errorID, error) {
  if (error) {
    errorMap[errorID] = error;
  }

  handleErrorOverlay();
};


/***/ }),
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(264);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(145);
/* harmony import */ var _socketIo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(254);








if (false) {}

var getPathFromProps = function getPathFromProps(props) {
  return props.pageResources && props.pageResources.page ? props.pageResources.page.path : undefined;
};

var JSONStore =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(JSONStore, _React$Component);

  function JSONStore(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleMittEvent = function (type, event) {
      _this.setState({
        staticQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["getStaticQueryData"])(),
        pageQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["getPageQueryData"])()
      });
    };

    _this.state = {
      staticQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["getStaticQueryData"])(),
      pageQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["getPageQueryData"])(),
      path: null
    };
    return _this;
  }

  var _proto = JSONStore.prototype;

  _proto.componentDidMount = function componentDidMount() {
    Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["registerPath"])(getPathFromProps(this.props));

    ___emitter.on("*", this.handleMittEvent);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["unregisterPath"])(this.state.path);

    ___emitter.off("*", this.handleMittEvent);
  };

  JSONStore.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var newPath = getPathFromProps(props);

    if (newPath !== state.path) {
      Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["unregisterPath"])(state.path);
      Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["registerPath"])(newPath);
      return {
        path: newPath
      };
    }

    return null;
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    // We want to update this component when:
    // - location changed
    // - page data for path changed
    // - static query results changed
    return this.props.location !== nextProps.location || this.state.path !== nextState.path || this.state.pageQueryData[nextState.path] !== nextState.pageQueryData[nextState.path] || this.state.staticQueryData !== nextState.staticQueryData;
  };

  _proto.render = function render() {
    var data = this.state.pageQueryData[getPathFromProps(this.props)]; // eslint-disable-next-line

    var _this$props = this.props,
        pages = _this$props.pages,
        propsWithoutPages = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["pages"]);

    if (!data) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null);
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["StaticQueryContext"].Provider, {
      value: this.state.staticQueryData
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, propsWithoutPages, data)));
  };

  return JSONStore;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (JSONStore);

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(162);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(265);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__);





 // Renders page

var PageRenderer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(PageRenderer, _React$Component);

  function PageRenderer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PageRenderer.prototype;

  _proto.render = function render() {
    var props = Object.assign({}, this.props, {
      pathContext: this.props.pageContext
    });

    var _apiRunner = Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__["apiRunner"])("replaceComponentRenderer", {
      props: this.props,
      loader: _loader__WEBPACK_IMPORTED_MODULE_4__["publicLoader"]
    }),
        replacementElement = _apiRunner[0];

    var pageElement = replacementElement || Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(this.props.pageResources.component, Object.assign({}, props, {
      key: this.props.pageResources.page.path
    }));
    var wrappedPage = Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__["apiRunner"])("wrapPageElement", {
      element: pageElement,
      props: props
    }, pageElement, function (_ref) {
      var result = _ref.result;
      return {
        element: result,
        props: props
      };
    }).pop();
    return wrappedPage;
  };

  return PageRenderer;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

PageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  pageResources: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  pageContext: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PageRenderer);

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(230);

var plugins = __webpack_require__(266);

var _require$publicLoader = __webpack_require__(162).publicLoader,
    getResourcesForPathname = _require$publicLoader.getResourcesForPathname,
    getResourcesForPathnameSync = _require$publicLoader.getResourcesForPathnameSync,
    getResourceURLsForPathname = _require$publicLoader.getResourceURLsForPathname;

exports.apiRunner = function (api, args, defaultReturn, argTransform) {
  if (args === void 0) {
    args = {};
  }

  // Hooks for gatsby-cypress's API handler
  if (undefined) {
    if (window.___apiHandler) {
      window.___apiHandler(api);
    } else if (window.___resolvedAPIs) {
      window.___resolvedAPIs.push(api);
    } else {
      window.___resolvedAPIs = [api];
    }
  }

  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    args.getResourcesForPathnameSync = getResourcesForPathnameSync;
    args.getResourcesForPathname = getResourcesForPathname;
    args.getResourceURLsForPathname = getResourceURLsForPathname;
    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result,
        plugin: plugin
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else if (defaultReturn) {
    return [defaultReturn];
  } else {
    return [];
  }
};

exports.apiRunnerAsync = function (api, args, defaultReturn) {
  return plugins.reduce(function (previous, next) {
    return next.plugin[api] ? previous.then(function () {
      return next.plugin[api](args, next.options);
    }) : previous;
  }, Promise.resolve());
};

/***/ }),
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(130);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(272);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(277);
/* harmony import */ var _assets_sass_styles_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(278);
/* harmony import */ var _assets_sass_styles_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_styles_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(279);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_config__WEBPACK_IMPORTED_MODULE_7__);









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
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, this.props.children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  };

  return TemplateWrapper;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TemplateWrapper);

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);

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
        to: "/blog"
      }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field is-grouped"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "control"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "button is-primary is-outlined",
        to: "/contact"
      }, "Events")))))));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PricingPageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(285);




var PricingPagePreivew = function PricingPagePreivew(_ref) {
  var entry = _ref.entry,
      getAsset = _ref.getAsset;
  var entryPricingPlans = entry.getIn(['data', 'pricing', 'plans']);
  var pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PricingPageTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: entry.getIn(['data', 'title']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_description: entry.getIn(['data', 'meta_description']),
    pricing: {
      heading: entry.getIn(['data', 'pricing', 'heading']),
      description: entry.getIn(['data', 'pricing', 'description']),
      plans: pricingPlans
    }
  });
};

PricingPagePreivew.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  getAsset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (PricingPagePreivew);

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(130);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pricing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(286);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





var PricingPageTemplate = function PricingPageTemplate(_ref) {
  var title = _ref.title,
      meta_title = _ref.meta_title,
      meta_description = _ref.meta_description,
      pricing = _ref.pricing;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, meta_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: meta_description
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero is-primary is-bold is-medium"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title"
  }, title))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section section--gradient"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "has-text-weight-semibold is-size-2"
  }, pricing.heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5"
  }, pricing.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pricing__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: pricing.plans
  }))))))));
};

PricingPageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  meta_title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  meta_description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  pricing: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    heading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    plans: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PricingPageTemplate);

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Pricing = function Pricing(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, data.map(function (price) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: price.plan,
      className: "column",
      style: {
        border: '1px solid #eaecee'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "has-text-centered has-text-weight-semibold"
    }, price.plan), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "is-size-1 has-text-weight-bold has-text-primary has-text-centered"
    }, "$", price.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "has-text-weight-semibold"
    }, price.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, price.items.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: item,
        className: "is-size-5"
      }, item);
    }))));
  }));
};

Pricing.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    plan: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ContactPageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(288);




var ContactPagePreview = function ContactPagePreview(_ref) {
  var entry = _ref.entry,
      getAsset = _ref.getAsset;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContactPageTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: entry.getIn(['data', 'title']),
    subtitle: entry.getIn(['data', 'subtitle']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_description: entry.getIn(['data', 'meta_description'])
  });
};

ContactPagePreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  getAsset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ContactPagePreview);

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(289);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(214);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(215);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(290);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(146);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(130);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);











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
    var _this$props = this.props,
        title = _this$props.title,
        subtitle = _this$props.subtitle,
        meta_title = _this$props.meta_title,
        meta_description = _this$props.meta_description;
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", null, meta_title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
      name: "description",
      content: meta_description
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
      className: "hero is-primary is-bold is-medium"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "hero-body"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "columns"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "column is-10 is-offset-1"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
      className: "title"
    }, title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
      className: "subtitle"
    }, subtitle))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
      name: "contact",
      method: "post",
      action: "/contact/success",
      encType: "application/x-www-form-urlencoded",
      "data-netlify": "true",
      "data-netlify-honeypot": "bot-field",
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      type: "hidden",
      name: "form-name",
      value: "contact"
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      hidden: true
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Don\u2019t fill this out:", ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      name: "bot-field",
      onChange: this.handleChange
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
      className: "label"
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "control"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      className: "input",
      type: "text",
      placeholder: "Full Name",
      name: "name",
      id: "name",
      onChange: this.handleChange
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
      className: "label"
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "control"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      className: "input",
      type: "email",
      placeholder: "Email",
      name: "email",
      id: "email",
      onChange: this.handleChange
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "field"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
      className: "label"
    }, "Message"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "control"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea", {
      className: "textarea",
      placeholder: "Message",
      name: "message",
      id: "message",
      rows: "6",
      onChange: this.handleChange
    }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "field is-grouped is-pulled-right"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "control"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      className: "button is-text",
      type: "reset"
    }, "Cancel")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "control"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      className: "button is-primary",
      type: "submit"
    }, "Submit")))))));
  };

  return ContactPageTemplate;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;
ContactPageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  meta_title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  meta_description: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ContactPageTemplate);

/***/ })
])
//# sourceMappingURL=0.2d411c8b6c35a2e80e68.hot-update.js.map