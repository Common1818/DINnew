"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireDefault(require("react"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _reactRouterDom = require("react-router-dom");

var _framerMotion = require("framer-motion");

var _preloader = _interopRequireDefault(require("./components/Preloader/preloader"));

var _Navbar = _interopRequireDefault(require("./components/layout/Navbar/Navbar"));

var _completeProfile = _interopRequireDefault(require("./components/auth/completeProfile"));

// Auth
var SignUp = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/auth/SignUp"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
});
var SignIn = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/auth/SignIn"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
}); // Article page

var selectedArticle = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/learn/articles/SelectedArticle"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
});
var PreviewPage = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/learn/preview/PreviewPage"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
}); // Components

var Home = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/home/home"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
});
var About = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/aboutUs/about"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
});
var Learn = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/learn/learn"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
});
var EditHomepage = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/home/EDIT/editHomepage"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
});
var EditCard = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/learn/learningCards/UpdateCard"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
});
var AddCard = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/learn/learningCards/AddCard"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
});
var AddArticle = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/learn/articles/addArticle"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
});
var UpdateArticle = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/learn/articles/updateArticle"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
});
var AdminPanel = (0, _reactLoadable.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("./components/adminPanel/adminPanel"));
    });
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_preloader.default, null);
  }
});

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: Home
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/about",
    component: About
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/learn",
    component: Learn
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/signup",
    component: SignUp
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/signup/:referCode",
    component: SignUp
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/login",
    component: SignIn
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/:specialityId/:topicId/:Id",
    component: selectedArticle
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/learn/:specialityName",
    component: PreviewPage
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/adminpanel",
    component: AdminPanel
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/edit/homepage",
    component: EditHomepage
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/updatespeciality/:specailaityId",
    component: EditCard
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/addcard",
    component: AddCard
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/article/add/:SpecialityId/:id",
    component: AddArticle
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/article/update/:SpecialityId/:TopicId/:ArticleId",
    component: UpdateArticle
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/completeProfile",
    component: _completeProfile.default
  }))));
};

var _default = App;
exports.default = _default;