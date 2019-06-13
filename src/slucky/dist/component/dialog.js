'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dialog = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = exports.Dialog = function (_Component) {
    _inherits(Dialog, _Component);

    function Dialog() {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
    }

    _createClass(Dialog, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var tar = this.props.open ? _react2.default.createElement(
                'div',
                { className: 'fadeIn p-r z10' },
                _react2.default.createElement('div', { className: 'dialog-mark' }),
                _react2.default.createElement(
                    'div',
                    { className: 'dialog-box d-f ac jc' },
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'dialog paper fade-scale mlr64' },
                            _react2.default.createElement(
                                'div',
                                { className: 'ta-r' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'mt4 mr4 pt4 plr8 ta-r' },
                                    _react2.default.createElement(
                                        'div',
                                        {
                                            className: 'd-il',
                                            onClick: function onClick() {
                                                return _this2.props.onClose();
                                            },
                                            style: {
                                                cursor: 'pointer'
                                            } },
                                        'X'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'dialog-content ta-l' },
                                    this.props.children
                                )
                            )
                        )
                    )
                )
            ) : null;
            return _reactDom2.default.createPortal(tar, document.body); //传送门的另一端DOM node
        }
    }]);

    return Dialog;
}(_react.Component);

Dialog.model = function (_ref) {
    var content = _ref.content,
        onOk = _ref.onOk,
        title = _ref.title,
        footer = _ref.footer;

    var closeDialog = function closeDialog(onOk) {
        onOk && onOk();
        _reactDom2.default.render(_react2.default.cloneElement(component, { open: false }), div);
        _reactDom2.default.unmountComponentAtNode(div);
        div.remove();
    };
    var component = _react2.default.createElement(
        Dialog,
        { open: true, onClose: closeDialog },
        title && _react2.default.createElement(
            'p',
            null,
            title
        ),
        _react2.default.createElement(
            'div',
            null,
            content
        ),
        !footer && _react2.default.createElement(
            'div',
            { className: 'ta-r pt8' },
            _react2.default.createElement(
                'button',
                { className: 'tag-text ptb6 plr16', onClick: function onClick() {
                        return closeDialog();
                    } },
                '\u53D6\u6D88'
            ),
            onOk && _react2.default.createElement(
                'button',
                { className: 'tag-text ptb6 plr16', onClick: function onClick() {
                        return closeDialog(onOk);
                    } },
                '\u786E\u8BA4'
            )
        )
    );

    var div = document.createElement('div');
    document.body.append(div);
    _reactDom2.default.render(component, div);
};