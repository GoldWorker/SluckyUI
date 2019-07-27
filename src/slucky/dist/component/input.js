'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Input = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = exports.Input = function (_Component) {
    _inherits(Input, _Component);

    function Input() {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this));

        _this.id = Math.random().toString(36).substring(2);
        return _this;
    }

    _createClass(Input, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'd-f ac', style: { width: this.props.width || 384 + 'px' } },
                this.props.labelName ? _react2.default.createElement(
                    'div',
                    { className: 's0', style: { width: this.props.labelWidth || 96 + 'px' } },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: this.id },
                        this.props.labelName
                    )
                ) : null,
                typeof this.props.value === 'undefined' ? _react2.default.createElement(
                    'div',
                    { style: { width: this.props.width || 384 + 'px' } },
                    _react2.default.createElement('input', {
                        id: this.props.id || this.id || '',
                        onChange: function onChange(e) {
                            return _this2.props.onChange && _this2.props.onChange(e.target.value);
                        },
                        style: { width: this.props.width || 384 + 'px' },
                        placeholder: this.props.placeholder || '',
                        type: this.props.type || 'text',
                        disabled: this.props.disabled || false,
                        readOnly: this.props.readOnly || false,
                        className: ['input-normal', this.props.error && this.props.error() && 'b-fail'].join(' '),
                        maxLength: this.props.maxLength || '100' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'fs12 c-fail p-a pt2' },
                        this.props.error && this.props.error()
                    )
                ) : _react2.default.createElement(
                    'div',
                    { style: { width: this.props.width || 384 + 'px' } },
                    _react2.default.createElement('input', {
                        id: this.props.id || this.id || '',
                        onChange: function onChange(e) {
                            return _this2.props.onChange && _this2.props.onChange(e.target.value);
                        },
                        style: { width: this.props.width || 384 + 'px' },
                        value: this.props.value || '',
                        placeholder: this.props.placeholder || '',
                        type: this.props.type || 'text',
                        disabled: this.props.disabled || false,
                        readOnly: this.props.readOnly || false,
                        className: ['input-normal', this.props.error && this.props.error() && 'b-fail'].join(' '),
                        maxLength: this.props.maxLength || '100' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'fs12 c-fail p-a pt2' },
                        this.props.error && this.props.error()
                    )
                )
            );
        }
    }]);

    return Input;
}(_react.Component);