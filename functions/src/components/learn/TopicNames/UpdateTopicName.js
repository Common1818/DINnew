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

var _topicContext = require("../../../contexts/topicContext");

var _topicFunctions = require("../../../crudFunctions/topicFunctions");

/* eslint-disable */
var UpdateTopicName = function UpdateTopicName(props) {
  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      Name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      Loading = _useState4[0],
      setLoading = _useState4[1];

  var _useContext = (0, _react.useContext)(_topicContext.TopicsContext),
      dispatch = _useContext.dispatch;

  var _useContext2 = (0, _react.useContext)(_topicContext.TopicsContext),
      topics = _useContext2.topics;

  var message = topics && topics.message;
  var color = topics && topics.color;
  var complete = topics && topics.complete;

  if (complete) {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }

  var handleInput = function handleInput(e) {
    setName(e.target.value);
  };

  var handleUpdate = function handleUpdate(e) {
    e.preventDefault();
    setLoading(true);
    (0, _topicFunctions.UpdateTopic)({
      Name: Name,
      id: props.Topic.id
    }, dispatch); // this.props.updateTopicName("TopicNames", {
    // ...this.state,
    // id: this.props.Topic.id
    // });
  };

  var Topic = props.Topic; // console.log(Topic)

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container m-0 p-0 "
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn text-primary text-",
    "data-toggle": "modal",
    "data-target": "#" + Topic.id
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://www.svgrepo.com/show/241804/edit.svg",
    style: {
      width: "20px"
    },
    alt: "edit"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal fade",
    id: Topic.id,
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": Topic.id + "label",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog ",
    role: "document"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content newsletter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "modal-title title",
    id: Topic.id + "label"
  }, "Update Topic Name"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body content"
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "Name",
    className: "form-control",
    defaultValue: Topic.Name,
    onChange: handleInput
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-outline-primary float-right m-3",
    onClick: handleUpdate
  }, "Update"), Loading && !complete ? /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Spinner, {
    animation: "border",
    role: "status"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Loading..."))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center " + "text-" + color
  }, message))))))));
};

var _default = UpdateTopicName;
exports.default = _default;