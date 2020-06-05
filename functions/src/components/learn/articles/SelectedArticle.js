"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = require("react-helmet");

var _articleContext = require("../../../contexts/articleContext");

var _topicContext = require("../../../contexts/topicContext");

var _authContext = require("../../../contexts/authContext");

require("./css/article.css");

require("react-quill/dist/quill.snow.css");

var _jquery = _interopRequireDefault(require("jquery"));

/* eslint-disable */
var SelectedArticle = function SelectedArticle(props) {
  var _useState = (0, _react.useState)(window.location.href),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      copied = _useState4[0],
      setCopied = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      show = _useState6[0],
      setShow = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      locked = _useState8[0],
      setLocked = _useState8[1];

  var _useContext = (0, _react.useContext)(_articleContext.ArticlesContext),
      articles = _useContext.articles;

  var _useContext2 = (0, _react.useContext)(_authContext.AuthContext),
      authState = _useContext2.authState,
      authData = _useContext2.authData;

  var _useContext3 = (0, _react.useContext)(_topicContext.TopicsContext),
      topics = _useContext3.topics;

  var Articles = articles && articles.articles;
  var _props$match$params = props.match.params,
      specialityId = _props$match$params.specialityId,
      topicId = _props$match$params.topicId,
      Id = _props$match$params.Id;
  var url = window.location.href;

  var goToTop = function goToTop() {
    (0, _jquery.default)("html, body").animate({
      scrollTop: 10
    }, 200);
  };

  topics.topics && authData.userProfile && topics.topics.map(function (item) {
    if (item.id == topicId && item.locked) {
      setLocked(true);
      authState.uid == null ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
        to: "/signup"
      }) : authData.userProfile.UnlockedTopicId.map(function (idItem) {
        if (idItem == topicId) setShow(true);
      });
    }
  }); // Add React Helmet Regardless of locked since its already taken care of

  return !locked || locked && show ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "selected-article"
  }, Articles && Articles.map(function (article) {
    if (article.id === Id && article.SpecialityId === specialityId && article.TopicId === topicId) {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, article.ArticleName), /*#__PURE__*/_react.default.createElement("meta", {
        name: "description",
        content: article.keywords
      }), /*#__PURE__*/_react.default.createElement("meta", {
        name: "robots",
        content: "index follow"
      })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
        key: article.id,
        className: "full-view-article p-2"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "share-icons"
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
        placement: "right",
        overlay: copied ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
          id: "tooltip-right"
        }, "Link Copied to ClipBoard") : /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
          id: "tooltip-right"
        }, "Copy link to clipboard")
      }, /*#__PURE__*/_react.default.createElement("div", {
        id: "link",
        className: "link-icon"
      }, /*#__PURE__*/_react.default.createElement(_reactCopyToClipboard.CopyToClipboard, {
        text: value,
        onCopy: function onCopy() {
          return setCopied(true);
        }
      }, /*#__PURE__*/_react.default.createElement("img", {
        style: {
          width: "25px"
        },
        src: "https://www.svgrepo.com/show/47491/link.svg",
        alt: "copy link of " + article.ArticleName
      })))), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
        placement: "right",
        overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
          id: "tooltip-right"
        }, "Share via mail")
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "mail-icon"
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: "mail-icon",
        href: "mailto:?Subject=".concat("Article on " + article.ArticleName, "&Body=Hey look i just found out this Amazing article on \"").concat(article.ArticleName, "\",Check it out : ").concat(url),
        target: "_top",
        rel: "nofollow"
      }, /*#__PURE__*/_react.default.createElement("img", {
        style: {
          width: "25px"
        },
        src: "https://www.svgrepo.com/show/303161/gmail-icon-logo.svg",
        alt: "share " + article.ArticleName + " on Gmail"
      })))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
        placement: "right",
        overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
          id: "tooltip-right"
        }, "Share on WhatsApp")
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
        className: "whatsapp-icon",
        rel: "noopener noreferrer",
        href: "https://api.whatsapp.com/send?text=Hey look i just found out this Amazing article on \"".concat(article.ArticleName, "\",Check it out : ").concat(url),
        target: "_blank"
      }, /*#__PURE__*/_react.default.createElement("img", {
        style: {
          width: "30px"
        },
        src: "https://www.svgrepo.com/show/303150/whatsapp-symbol-logo.svg",
        alt: "share " + article.ArticleName + " on Whatsapp"
      }))))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        sm: 2
      }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        id: "top",
        style: {
          padding: "0px"
        },
        sm: 8
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ql-snow"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "full-article ql-editor",
        dangerouslySetInnerHTML: {
          __html: article.ArticleContent
        }
      })), /*#__PURE__*/_react.default.createElement("a", {
        rel: "nofollow",
        href: "#"
      }, /*#__PURE__*/_react.default.createElement("img", {
        onClick: goToTop,
        className: "top-icon",
        id: "go-to-top",
        style: {
          width: "30px"
        },
        src: "https://www.svgrepo.com/show/247787/up-arrow-upload.svg",
        alt: "Go on Top of " + article.ArticleName
      }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        sm: 2
      })));
    }

    return null;
  }))) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: "/signup"
  });
};

var _default = SelectedArticle;
exports.default = _default;