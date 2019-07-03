"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Radio = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = exports.Radio = function (_Component) {
    _inherits(Radio, _Component);

    function Radio() {
        _classCallCheck(this, Radio);

        var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this));

        _this.id = Math.random().toString(36).substring(2);
        return _this;
    }

    _createClass(Radio, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "radio-box-normalize d-il pr16" },
                _react2.default.createElement("input", {
                    id: this.id,
                    name: this.props.name,
                    value: this.props.value,
                    defaultChecked: this.props.defaultChecked,
                    onChange: function onChange(e) {
                        return _this2.props.onAction(e);
                    },
                    type: "radio",
                    className: "d-n" }),
                _react2.default.createElement(
                    "label",
                    { className: "m0", htmlFor: this.id },
                    _react2.default.createElement(
                        "div",
                        { className: "radio-out" },
                        _react2.default.createElement("i", { className: "radio-in" })
                    ),
                    _react2.default.createElement(
                        "span",
                        { className: "pl8" },
                        this.props.label || ''
                    )
                )
            );
        }
    }]);

    return Radio;
}(_react.Component);

var Group = function (_Component2) {
    _inherits(Group, _Component2);

    function Group() {
        _classCallCheck(this, Group);

        var _this3 = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this));

        _this3.name = Math.random().toString(36).substring(2);
        return _this3;
    }

    _createClass(Group, [{
        key: "render",
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                "div",
                { className: this.props.className || '' },
                this.props.children ? null : this.props.option.map(function (item, index) {
                    return _react2.default.createElement(Radio, {
                        key: index,
                        defaultChecked: _this4.props.defaultValue == item.value,
                        name: _this4.name,
                        label: item.label,
                        value: item.value,
                        onAction: function onAction(e) {
                            return _this4.props.onChange(e);
                        } });
                })
            );
        }
    }]);

    return Group;
}(_react.Component);

Radio.Group = Group;