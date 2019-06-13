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

var Slidebar = function (_Component) {
    _inherits(Slidebar, _Component);

    function Slidebar() {
        _classCallCheck(this, Slidebar);

        return _possibleConstructorReturn(this, (Slidebar.__proto__ || Object.getPrototypeOf(Slidebar)).apply(this, arguments));
    }

    _createClass(Slidebar, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { "class": "" },
                    _react2.default.createElement(
                        "div",
                        { "class": "slidebar2-box-normalize slidebar2-hover-b" },
                        _react2.default.createElement("input", { type: "checkbox", id: "slidebar2-switch", "class": "d-n", checked: true }),
                        _react2.default.createElement(
                            "div",
                            { "class": "slidebar2 bg-b d-f fd" },
                            _react2.default.createElement(
                                "div",
                                { "class": "slidebar2-tool p16 d-f jc-b ac d-il" },
                                _react2.default.createElement(
                                    "a",
                                    { "class": "ta-l" },
                                    _react2.default.createElement("img", { alt: "logo", "class": "logo-icon", src: require('../images/bg_test.jpg') })
                                ),
                                _react2.default.createElement(
                                    "label",
                                    { "for": "slidebar2-switch", "class": "d-il p8 m8 c-placeholder pointer" },
                                    _react2.default.createElement(
                                        "span",
                                        { "class": "" },
                                        "menu"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { "class": "ov-a h-full fs14", scrollbar: "normal" },
                            _react2.default.createElement(
                                "details",
                                null,
                                _react2.default.createElement(
                                    "summary",
                                    { "class": "pl16 ptb16 c-placeholder" },
                                    "adf"
                                ),
                                _react2.default.createElement(
                                    "ul",
                                    { "class": "menu w-full" },
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { "class": "c-placeholder", href: "" },
                                            "123"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { "class": "c-placeholder", href: "" },
                                            "123"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { "class": "c-placeholder", href: "" },
                                            "123"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "a",
                                            { "class": "c-placeholder", href: "" },
                                            "123"
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement("div", { "class": "mark-b" })
                ),
                _react2.default.createElement(
                    "div",
                    { "class": "w-full d-f fd" },
                    _react2.default.createElement("div", { "class": "app-root d-f iframe w-full" })
                )
            );
        }
    }]);

    return Slidebar;
}(_react.Component);

exports.default = Slidebar;