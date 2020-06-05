"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var SpecialityPreviewArticle = function SpecialityPreviewArticle(_ref) {
  var Specialities = _ref.Specialities,
      requiredSpeciality = _ref.requiredSpeciality;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "material-icons card-header "
  }, "Read This before You start..."), /*#__PURE__*/_react.default.createElement("hr", null), Specialities && Specialities.map(function (item) {
    if (item.Name === requiredSpeciality) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ql-snow",
        key: item.id
      }, /*#__PURE__*/_react.default.createElement("div", {
        key: item.id,
        className: "card-no-body ql-editor",
        dangerouslySetInnerHTML: {
          __html: item.ArticleContent
        }
      }));
    }

    return null;
  }));
};

var _default = SpecialityPreviewArticle;
exports.default = _default;