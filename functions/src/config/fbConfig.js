"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.fbConfig = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/auth");

var fbConfig = {
  apiKey: "AIzaSyB_TdvVbP5CrbVRMcq9W-VAQ9wBMZnNP_U",
  authDomain: "do-it-now-665f3.firebaseapp.com",
  databaseURL: "https://do-it-now-665f3.firebaseio.com",
  projectId: "do-it-now-665f3",
  storageBucket: "do-it-now-665f3.appspot.com",
  messagingSenderId: "199827851953",
  appId: "1:199827851953:web:71b7e5eac50b8295c2f090",
  measurementId: "G-4LZLJLNC2M"
}; // Initialize Firebase

exports.fbConfig = fbConfig;

_app.default.initializeApp(fbConfig);

_app.default.firestore();

var _default = _app.default;
exports.default = _default;