'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Select = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = exports.Select = function (_Component) {
    _inherits(Select, _Component);

    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

        _this.state = {
            selectedValue: '',
            selectedLabel: _this.props.defaultValue || ''
        };
        _this.id = Math.random().toString(36).substring(2);
        return _this;
    }

    _createClass(Select, [{
        key: 'handleClickSelected',
        value: function handleClickSelected(label, value) {
            var _this2 = this;

            this.setState({
                selectedLabel: label,
                selectedValue: value
            }, function () {
                _this2.props.onChange && _this2.props.onChange(_this2.state.selectedValue);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'select-down-modern' },
                this.props.labelName ? _react2.default.createElement(
                    'label',
                    { htmlFor: this.id, className: 'pb4 mb0 fs12 d-b' },
                    this.props.labelName
                ) : null,
                _react2.default.createElement(
                    'div',
                    { className: 'p-r' },
                    _react2.default.createElement('input', {
                        id: this.id,
                        type: 'text',
                        className: 'input-normal',
                        style: { width: this.props.width || 384 + 'px' },
                        placeholder: this.props.placeholder || '',
                        onChange: function onChange() {},
                        value: this.state.selectedLabel }),
                    _react2.default.createElement(
                        'div',
                        { className: 'select-down-icon d-f jc fd-c' },
                        _react2.default.createElement('div', { className: 'tri-down' })
                    )
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'select-option paper', scrollbar: 'normal' },
                    this.props.option ? this.props.option.map(function (item, index) {
                        return _react2.default.createElement(
                            'li',
                            { onMouseDown: function onMouseDown() {
                                    return _this3.handleClickSelected(item.label, item.value);
                                }, key: index },
                            item.label
                        );
                    }) : null
                )
            );
        }
    }]);

    return Select;
}(_react.Component);