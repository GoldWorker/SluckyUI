"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _highorderMessage = require("./message/highorder-message");

var _highorderMessage2 = _interopRequireDefault(_highorderMessage);

var _slidebar = require("./slidebar");

var _slidebar2 = _interopRequireDefault(_slidebar);

var _highorderLoginWindow = require("./login/highorder-loginWindow");

var _highorderLoginWindow2 = _interopRequireDefault(_highorderLoginWindow);

var _highorderNavNormalize = require("./nav/highorder-navNormalize");

var _highorderNavNormalize2 = _interopRequireDefault(_highorderNavNormalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Global = function (_Component) {
    _inherits(Global, _Component);

    function Global(props) {
        _classCallCheck(this, Global);

        return _possibleConstructorReturn(this, (Global.__proto__ || Object.getPrototypeOf(Global)).call(this, props));
    }

    _createClass(Global, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_highorderNavNormalize2.default, null),
                _react2.default.createElement(_slidebar2.default, null),
                _react2.default.createElement(_highorderMessage2.default, null),
                _react2.default.createElement(_highorderLoginWindow2.default, null)
            );
        }
    }]);

    return Global;
}(_react.Component);

exports.default = Global;