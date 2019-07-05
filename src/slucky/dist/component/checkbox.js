"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Checkbox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = exports.Checkbox = function (_Component) {
    _inherits(Checkbox, _Component);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));

        _this.id = Math.random().toString(36).substring(2);
        return _this;
    }

    _createClass(Checkbox, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "checkbox-box-normalize mr16" },
                _react2.default.createElement("input", {
                    id: this.id,
                    type: "checkbox",
                    name: this.props.name,
                    value: this.props.value,
                    defaultChecked: this.props.defaultChecked,
                    onChange: function onChange(e) {
                        return _this2.props.onAction(e);
                    } }),
                _react2.default.createElement(
                    "span",
                    { className: "checkbox-hook ta-c" },
                    _react2.default.createElement(
                        "span",
                        { className: "checkbox-hook-in fs12 op0" },
                        "\u2713"
                    )
                ),
                _react2.default.createElement(
                    "label",
                    { htmlFor: this.id, className: "p-r z10 pl8" },
                    this.props.label || ''
                )
            );
        }
    }]);

    return Checkbox;
}(_react.Component);

var Group = function (_Component2) {
    _inherits(Group, _Component2);

    function Group() {
        _classCallCheck(this, Group);

        var _this3 = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this));

        _this3.name = Math.random().toString(36).substring(2);
        _this3.selected = [];
        return _this3;
    }

    _createClass(Group, [{
        key: "onAction",
        value: function onAction(e) {
            var _e$target = e.target,
                value = _e$target.value,
                checked = _e$target.checked;

            if (checked) {
                this.selected.push(value);
            } else {
                var ind = this.selected.indexOf(value);
                ind != -1 && this.selected.splice(ind, 1);
            }
            this.props.onChange(this.selected);
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                "div",
                { className: this.props.className || '' },
                this.props.children ? null : this.props.option.map(function (item, index) {
                    if (_this4.props.defaultValue == item.value) {
                        _this4.selected.push(item.value);
                    }
                    return _react2.default.createElement(Checkbox, {
                        key: index,
                        defaultChecked: _this4.props.defaultValue == item.value,
                        name: _this4.name,
                        label: item.label,
                        value: item.value,
                        onAction: function onAction(e) {
                            return _this4.onAction(e);
                        } });
                })
            );
        }
    }]);

    return Group;
}(_react.Component);

Checkbox.Group = Group;