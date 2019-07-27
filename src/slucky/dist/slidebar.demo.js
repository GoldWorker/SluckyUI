"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

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
                    { className: "slidebar-box-normalize slidebar-hover-b" },
                    _react2.default.createElement("input", { type: "checkbox", id: "slidebar-switch", className: "d-n" }),
                    _react2.default.createElement(
                        "div",
                        { className: "slidebar bg-b w256" },
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "slidebar-switch", className: "slidebar-tool p16 d-f ac jc-r" },
                            _react2.default.createElement(
                                "span",
                                { className: "mr16" },
                                "\u8FD4\u56DE"
                            ),
                            _react2.default.createElement(
                                "svg",
                                { className: "icon icon16", id: "slidebar_in" },
                                _react2.default.createElement("use", { xlinkHref: "#icon-menu" })
                            ),
                            _react2.default.createElement(
                                "div",
                                { id: "slidebar_out" },
                                _react2.default.createElement(
                                    "svg",
                                    { className: "icon icon24 c-theme", id: "slidebar_out" },
                                    _react2.default.createElement("use", { xlinkHref: "#icon-menu" })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "ul",
                            { className: "menu w-full" },
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { exact: true, to: "/", className: "nav-item", activeClassName: "nav-item-active" },
                                    "\u9996\u9875"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { to: "/articleList", className: "nav-item", activeClassName: "nav-item-active" },
                                    "\u6587\u7AE0"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { to: "/register", className: "nav-item", activeClassName: "nav-item-active" },
                                    "\u6210\u4E3ASluckyer"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement("div", { className: "mark-b" })
                )
            );
        }
    }]);

    return Slidebar;
}(_react.Component);

exports.default = Slidebar;