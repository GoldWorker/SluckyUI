"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorDemo = function (_Component) {
    _inherits(ColorDemo, _Component);

    function ColorDemo() {
        _classCallCheck(this, ColorDemo);

        return _possibleConstructorReturn(this, (ColorDemo.__proto__ || Object.getPrototypeOf(ColorDemo)).apply(this, arguments));
    }

    _createClass(ColorDemo, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "d-il ta-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "circle-l bg-success d-f ac jc m16" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "#26a597"
                        )
                    ),
                    "success"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-il ta-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "circle-l bg-warn d-f ac jc m16" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "#fc7e36"
                        )
                    ),
                    "warn/hint"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-il ta-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "circle-l bg-fail d-f ac jc m16" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "#ff4444"
                        )
                    ),
                    "fail"
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                    "div",
                    { className: "d-il ta-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "circle-l bg-side d-f ac jc m16" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "#fafafa"
                        )
                    ),
                    "title"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-il ta-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "circle-l bg-side d-f ac jc m16" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "#f4f4f4"
                        )
                    ),
                    "side"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-il ta-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "circle-l bg-side-s d-f ac jc m16" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "#cacaca"
                        )
                    ),
                    "side-s"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-il ta-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "circle-l bg-placeholder d-f ac jc m16" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "#cccccc"
                        )
                    ),
                    "placeholder"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-il ta-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "circle-l bg-divider d-f ac jc m16" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "#E5E5E5"
                        )
                    ),
                    "divider"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-il ta-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "circle-l bg-hint d-f ac jc m16" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "#888888"
                        )
                    ),
                    "hint"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-il ta-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "circle-l bg-icon d-f ac jc m16" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "#666666"
                        )
                    ),
                    "icon"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-il ta-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "circle-l bg-text d-f ac jc m16" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "#222222"
                        )
                    ),
                    "text"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-il ta-c" },
                    _react2.default.createElement(
                        "div",
                        { className: "circle-l bg-disable d-f ac jc m16" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "#898183"
                        )
                    ),
                    "disable"
                )
            );
        }
    }]);

    return ColorDemo;
}(_react.Component);

exports.default = ColorDemo;