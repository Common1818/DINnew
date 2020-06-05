"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _DeleteButton = _interopRequireDefault(require("../../../layout/Button/DeleteButton"));

var _jquery = _interopRequireDefault(require("jquery"));

/* eslint-disable */
var Article = function Article(_ref) {
  var readArticle = _ref.readArticle,
      article = _ref.article,
      item = _ref.item,
      isAdmin = _ref.isAdmin,
      displayMode = _ref.displayMode;
  var readIconUrl;

  if (displayMode === "light") {
    readIconUrl = "https://www.svgrepo.com/show/21266/open-book.svg";
  } else {
    readIconUrl = "https://www.svgrepo.com/show/1110/reader.svg";
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: " read col-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    type: "button",
    onClick: function onClick() {
      readArticle(article);
      var pos = (0, _jquery.default)(".card-container").offset().top;

      if (window.innerWidth <= 500) {
        (0, _jquery.default)("html, body").animate({
          scrollTop: pos
        }, 69);
      }
    },
    className: "display-article"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "article-name m-0"
  }, article.ArticleName)), /*#__PURE__*/_react.default.createElement("a", {
    type: "button",
    onClick: function onClick() {
      readArticle(article);
      var pos = (0, _jquery.default)(".card-container").offset().top;

      if (window.innerWidth <= 500) {
        (0, _jquery.default)("html, body").animate({
          scrollTop: pos
        }, 69);
      }
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("img", {
    src: readIconUrl,
    className: "read-book-svg",
    style: {
      width: "20px"
    },
    alt: "read " + article.ArticleName
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: " col-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "update-delete float-right"
  }, isAdmin ? /*#__PURE__*/_react.default.createElement(_DeleteButton.default, {
    collectionName: "Articles",
    DocId: article.id,
    size: "small"
  }) : null, /*#__PURE__*/_react.default.createElement("div", null, isAdmin ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "pr-4",
    to: "/article/update/" + item.SpecialityId + "/" + item.id + "/" + article.id
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://www.svgrepo.com/show/241804/edit.svg",
    style: {
      width: "20px"
    },
    alt: "edit" + article.Name
  })) : null))));
};

var _default = Article;
exports.default = _default;