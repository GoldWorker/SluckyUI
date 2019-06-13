"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _highorderLoginInfo = require("../login/highorder-loginInfo");

var _highorderLoginInfo2 = _interopRequireDefault(_highorderLoginInfo);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavNormalize = function (_Component) {
    _inherits(NavNormalize, _Component);

    function NavNormalize(props) {
        _classCallCheck(this, NavNormalize);

        return _possibleConstructorReturn(this, (NavNormalize.__proto__ || Object.getPrototypeOf(NavNormalize)).call(this, props));
    }

    _createClass(NavNormalize, [{
        key: "render",
        value: function render() {
            var isLogined = this.props.isLogined;

            return _react2.default.createElement(
                "div",
                { className: "nav-normal bor-b b-side pr16 bg-w" },
                _react2.default.createElement(
                    "nav",
                    { className: "ml48" },
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { exact: true, to: "/", className: "nav-item", activeClassName: "nav-item-active" },
                        "\u9996\u9875"
                    )
                ),
                isLogined ? _react2.default.createElement(
                    "nav",
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/edit", className: "nav-item", activeClassName: "nav-item-active" },
                        "\u7F16\u8F91"
                    )
                ) : null,
                _react2.default.createElement(
                    "nav",
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/articleList", className: "nav-item", activeClassName: "nav-item-active" },
                        "\u6587\u7AE0"
                    )
                ),
                _react2.default.createElement(
                    "nav",
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/register", className: "nav-item", activeClassName: "nav-item-active" },
                        "\u6210\u4E3ASluckyer"
                    )
                ),
                _react2.default.createElement(_highorderLoginInfo2.default, null)
            );
        }
    }]);

    return NavNormalize;
}(_react.Component);

exports.default = NavNormalize;