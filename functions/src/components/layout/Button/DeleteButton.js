"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _topicFunctions = require("../../../crudFunctions/topicFunctions");

var _topicContext = require("../../../contexts/topicContext");

/* eslint-disable */
var DeleteButton = function DeleteButton(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      Deleting = _useState2[0],
      setDeleting = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      Deleted = _useState4[0],
      setDeleted = _useState4[1];

  var collectionName = props.collectionName,
      DocId = props.DocId,
      size = props.size;

  var _useContext = (0, _react.useContext)(_topicContext.TopicsContext),
      dispatch = _useContext.dispatch;

  var handleDelete = function handleDelete(e) {
    setDeleting(true);
    (0, _topicFunctions.DeleteTopicFunction)(collectionName, DocId, dispatch);
  };

  var width = window.innerWidth;
  var position;

  if (width < 500) {
    position = "bottom";
  } else {
    position = "right";
  }

  return /*#__PURE__*/_react.default.createElement("span", null, size === "small" ? /*#__PURE__*/_react.default.createElement("button", {
    className: "btn text-danger ",
    onClick: handleDelete
  }, Deleting && !Deleted ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Spinner, {
    animation: "border",
    role: "status"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Loading...")) : /*#__PURE__*/_react.default.createElement("img", {
    src: "https://www.svgrepo.com/show/92817/delete.svg",
    alt: "delete in " + collectionName,
    style: {
      width: "20px"
    }
  })) : /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-outline-danger btn-lg btn-block mr-3 mb-2 mt-2",
    onClick: handleDelete
  }, "Delete"));
};

var _default = DeleteButton;
exports.default = _default;