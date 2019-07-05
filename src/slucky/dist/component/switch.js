'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Switch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = exports.Switch = function (_Component) {
    _inherits(Switch, _Component);

    function Switch() {
        _classCallCheck(this, Switch);

        var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this));

        _this.id = Math.random().toString(36).substring(2);
        return _this;
    }

    _createClass(Switch, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'mb32 d-f ac' },
                _react2.default.createElement(
                    'span',
                    { className: 'pr8' },
                    this.props.leftlabel || ''
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'switch-box-normalize' },
                    _react2.default.createElement('label', { htmlFor: this.id, className: 'switch-mark-click' }),
                    _react2.default.createElement('input', {
                        type: 'checkbox'
                        // defaultValue={1}
                        , id: this.id,
                        defaultChecked: this.props.defaultChecked,
                        onChange: function onChange(e) {
                            return _this2.props.onChange(e);
                        } }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('i', { className: 'switch-move' }),
                        _react2.default.createElement('span', { className: 'switch-horizon' })
                    )
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'pl8' },
                    this.props.rightlabel || ''
                )
            );
        }
    }]);

    return Switch;
}(_react.Component);