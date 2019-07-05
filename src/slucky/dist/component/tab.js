"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tab = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = exports.Tab = function (_Component) {
    _inherits(Tab, _Component);

    function Tab() {
        _classCallCheck(this, Tab);

        var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this));

        _this.id = Math.random().toString(36).substring(2);
        return _this;
    }

    _createClass(Tab, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "tab-item" },
                _react2.default.createElement("input", { type: "radio", id: this.id, name: this.props.name, defaultChecked: true }),
                _react2.default.createElement(
                    "label",
                    { htmlFor: this.id },
                    _react2.default.createElement(
                        "div",
                        { className: "tab-container" },
                        _react2.default.createElement(
                            "div",
                            { className: "tab-toggle" },
                            _react2.default.createElement(
                                "div",
                                { className: "tab-decoration" },
                                _react2.default.createElement(
                                    "span",
                                    null,
                                    this.props.title || ''
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "tab-content w-full" },
                    _react2.default.createElement(
                        "div",
                        null,
                        this.props.children
                    )
                )
            );
        }
    }]);

    return Tab;
}(_react.Component);

var Group = function (_Component2) {
    _inherits(Group, _Component2);

    function Group() {
        _classCallCheck(this, Group);

        var _this2 = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this));

        _this2.name = Math.random().toString(36).substring(2);
        return _this2;
    }

    _createClass(Group, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "tab-box-lr w-full" },
                    _react2.default.createElement(
                        "div",
                        { className: "tab-contrl" },
                        _react2.default.Children.map(this.props.children, function (child) {
                            return _react2.default.cloneElement(child, { name: _this3.name });
                        })
                    )
                )
            );
        }
    }]);

    return Group;
}(_react.Component);

Tab.Group = Group;