"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _highlight = _interopRequireDefault(require("highlight.js"));

var _reactQuill = _interopRequireWildcard(require("react-quill"));

var _jquery = _interopRequireDefault(require("jquery"));

require("react-quill/dist/quill.snow.css");

require("./editor.css");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

_highlight.default.configure({
  languages: ["javascript", "ruby", "python", "rust"]
});

var CustomButton = function CustomButton() {
  return /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "20px"
    },
    src: "https://www.svgrepo.com/show/77584/image.svg",
    alt: ""
  });
};

var Size = _reactQuill.Quill.import("formats/size");

Size.whitelist = ["1", "2", "4", "6", "8", "10", "12", "14", "16", "20", "24", "26", "30"];

_reactQuill.Quill.register(Size, true);

function insertImage() {
  var length = this.quill.getLength();
  var value = prompt("What is the image URL");
  var alt = prompt("Enter alt text information");
  var size = prompt("Enter image size : cover/sm/lg/default ").toLowerCase();
  console.log(size, alt);
  console.log(length);
  this.quill.insertEmbed(length, "image", value, "alt tag");
  (0, _jquery.default)(".ql-container img[src$=\"".concat(value, "\"]")).attr("alt", alt);
  (0, _jquery.default)(".ql-container img[src$=\"".concat(value, "\"]")).addClass("ql-urlImage-".concat(size));
  console.log((0, _jquery.default)(".ql-container img[src$=\"".concat(value, "\"]")));
}

var CustomToolbar = function CustomToolbar() {
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "toolbar"
  }, /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-header",
    defaultValue: "",
    onChange: function onChange(e) {
      return e.persist();
    }
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "1"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "2"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "3"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "4"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "5"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "6"
  }), /*#__PURE__*/_react.default.createElement("option", {
    selected: true
  })), /*#__PURE__*/_react.default.createElement("select", {
    class: "ql-font"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "serif"
  }), /*#__PURE__*/_react.default.createElement("option", {
    selected: true
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "monospace"
  })), /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-size"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "1"
  }, "1"), /*#__PURE__*/_react.default.createElement("option", {
    selected: true,
    value: "2"
  }, "2"), /*#__PURE__*/_react.default.createElement("option", {
    value: "4"
  }, "4"), /*#__PURE__*/_react.default.createElement("option", {
    value: "6"
  }, "6"), /*#__PURE__*/_react.default.createElement("option", {
    value: "8"
  }, "8"), /*#__PURE__*/_react.default.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react.default.createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/_react.default.createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/_react.default.createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/_react.default.createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/_react.default.createElement("option", {
    value: "24"
  }, "24"), /*#__PURE__*/_react.default.createElement("option", {
    value: "26"
  }, "26"), /*#__PURE__*/_react.default.createElement("option", {
    value: "30"
  }, "30")), /*#__PURE__*/_react.default.createElement("select", {
    class: "ql-align"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "center"
  }), /*#__PURE__*/_react.default.createElement("option", {
    selected: true
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "right"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "justify"
  })), /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-background"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "red"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "green"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "blue"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "orange"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "violet"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "#d0d1d2"
  }), /*#__PURE__*/_react.default.createElement("option", {
    selected: true
  })), /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-color"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "red"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "green"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "blue"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "orange"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "violet"
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "#d0d1d2"
  }), /*#__PURE__*/_react.default.createElement("option", {
    selected: true
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-bold"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-italic"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-underline"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-strike"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-blockquote"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-direction"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-link"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-image"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-video"
  }), /*#__PURE__*/_react.default.createElement("button", {
    value: "ordered",
    className: "ql-list"
  }), /*#__PURE__*/_react.default.createElement("button", {
    value: "bullet",
    className: "ql-list"
  }), /*#__PURE__*/_react.default.createElement("button", {
    value: "-1",
    className: "ql-indent"
  }), /*#__PURE__*/_react.default.createElement("button", {
    value: "+1",
    className: "ql-indent"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-code-block"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-insertImage"
  }, /*#__PURE__*/_react.default.createElement(CustomButton, null)));
};
/*
 * Editor component with custom toolbar and content containers
 */


var Editor = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Editor, _React$Component);

  var _super = _createSuper(Editor);

  function Editor(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Editor);
    _this = _super.call(this, props);
    _this.state = {
      editorHtml: ""
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Editor, [{
    key: "handleChange",
    value: function handleChange(html) {
      this.setState({
        editorHtml: html
      });
      this.props.handleEditor(html);
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "text-editor"
      }, /*#__PURE__*/_react.default.createElement(CustomToolbar, null), /*#__PURE__*/_react.default.createElement(_reactQuill.default, {
        onChange: this.handleChange,
        placeholder: this.props.placeholder,
        modules: Editor.modules,
        value: this.state.editorHtml || ""
      }));
    }
  }]);
  return Editor;
}(_react.default.Component);

Editor.modules = {
  syntax: {
    highlight: function highlight(text) {
      return _highlight.default.highlightAuto(text).value;
    }
  },
  toolbar: {
    container: "#toolbar",
    handlers: {
      insertImage: insertImage
    }
  }
};
Editor.formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "color", "code-block"];
/*
 * PropType validation
 */

var _default = Editor; // // // -----------------------

exports.default = _default;