"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var Plus = function Plus(_ref) {
  var SpecialityId = _ref.SpecialityId,
      id = _ref.id,
      Name = _ref.Name;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/article/add/" + SpecialityId + "/" + id,
    rel: "nofollow"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://www.svgrepo.com/show/2087/plus.svg",
    alt: "add Article to " + Name,
    style: {
      width: "20px"
    }
  }));
};

var _default = Plus;
exports.default = _default;