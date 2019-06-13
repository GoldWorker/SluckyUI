'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BottomTool = function (_Component) {
    _inherits(BottomTool, _Component);

    function BottomTool() {
        _classCallCheck(this, BottomTool);

        var _this = _possibleConstructorReturn(this, (BottomTool.__proto__ || Object.getPrototypeOf(BottomTool)).call(this));

        _this.state = {
            type: 'A',
            page: 'index'
        };
        return _this;
    }

    _createClass(BottomTool, [{
        key: 'handleChange',
        value: function handleChange(e) {
            var _e$target$dataset = e.target.dataset,
                type = _e$target$dataset.type,
                page = _e$target$dataset.page;

            console.log(type, page);
            if (type) this.setState({
                type: type
            }, this.props.onAction && this.props.onAction({ type: type, page: this.state.page }));else this.setState({
                page: page
            }, this.props.onAction && this.props.onAction({ page: page, type: this.state.type }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                onSave = _props.onSave,
                onInit = _props.onInit;

            return _react2.default.createElement(
                'div',
                { className: 'drag-bottom bg-black c-text-w' },
                _react2.default.createElement(
                    'div',
                    { className: '' },
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u6A21\u677F\u7C7B\u578B\uFF1A'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'd-il' },
                        _react2.default.createElement('input', {
                            type: 'radio',
                            'data-type': 'A',
                            onChange: function onChange(e) {
                                return _this2.handleChange(e);
                            },
                            name: 'type',
                            id: 'pa',
                            defaultChecked: true }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'pa', className: 'd-il' },
                            'A'
                        ),
                        _react2.default.createElement('input', {
                            type: 'radio',
                            'data-type': 'B',
                            onChange: function onChange(e) {
                                return _this2.handleChange(e);
                            },
                            name: 'type',
                            id: 'pb' }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'pb', className: 'd-il' },
                            'B'
                        ),
                        _react2.default.createElement('input', {
                            type: 'radio',
                            'data-type': 'C',
                            onChange: function onChange(e) {
                                return _this2.handleChange(e);
                            },
                            name: 'type',
                            id: 'pc' }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'pc', className: 'd-il' },
                            'C'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mt8' },
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u9875\u9762\uFF1A'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'd-il' },
                        _react2.default.createElement('input', {
                            type: 'radio',
                            'data-page': 'index',
                            onChange: function onChange(e) {
                                return _this2.handleChange(e);
                            },
                            name: 'page',
                            id: 'index',
                            defaultChecked: true }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'index', className: 'd-il' },
                            '\u9996\u9875'
                        ),
                        _react2.default.createElement('input', {
                            type: 'radio',
                            'data-page': 'article',
                            onChange: function onChange(e) {
                                return _this2.handleChange(e);
                            },
                            name: 'page',
                            id: 'article' }),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'article', className: 'd-il' },
                            '\u6587\u7AE0\u9875'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: '' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn c-text-w bg-blue ptb4 plr16 mr8 mt16', onClick: onSave },
                        '\u4FDD\u5B58'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn c-text-w bg-blue ptb4 plr16', onClick: onInit },
                        '\u521D\u59CB\u5316'
                    )
                )
            );
        }
    }]);

    return BottomTool;
}(_react.Component);

exports.default = BottomTool;