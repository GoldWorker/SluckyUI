'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonDemo = function (_Component) {
    _inherits(ButtonDemo, _Component);

    function ButtonDemo() {
        _classCallCheck(this, ButtonDemo);

        return _possibleConstructorReturn(this, (ButtonDemo.__proto__ || Object.getPrototypeOf(ButtonDemo)).apply(this, arguments));
    }

    _createClass(ButtonDemo, [{
        key: 'render',
        value: function render() {
            var demoString = '``` html' + '\n<div className="btn p-r m32 ptb6 svgMutiLine plr16">\n    <svg\n        className="btn-svgMutiLine"\n        viewBox="0 0 180 64"\n        version="1.1"\n        xmlns="http://www.w3.org/2000/svg">\n        <rect className="shape"></rect>\n    </svg>\n    <div>SluckyUI</div>\n</div>\n\n<div className="btn p-r m32 ptb6 regularLineMove plr16">SluckyUI</div>\n\n<div className="btn p-r m32 ptb6 regularShadowScale plr16">SluckyUI</div>\n\n<div className="btn p-r m32 ptb6 regularShadowMove plr16">SluckyUI</div>\n\n<button className="btn-n ptb6 plr16 m32">SluckyUI</button>\n\n<button className="btn-w bor b-side ptb6 plr16 m32">SluckyUI</button>\n\n<button className="btn-hollow ptb6 plr16 m32">SluckyUI</button>\n\n<button className="tag-hollow ptb6 plr16 m32">SluckyUI</button>\n\n<button className="tag-text ptb6 plr16 m32">SluckyUI</button>\n' + '```';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'd-f ac fw' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn p-r m32 ptb6 svgMutiLine plr16 tp' },
                        _react2.default.createElement(
                            'svg',
                            {
                                className: 'btn-svgMutiLine',
                                viewBox: '0 0 180 64',
                                version: '1.1',
                                xmlns: 'http://www.w3.org/2000/svg' },
                            _react2.default.createElement('rect', { className: 'shape' })
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            'SluckyUI'
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn p-r m32 ptb6 regularLineMove plr16 tp' },
                        'SluckyUI'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn p-r m32 ptb6 regularShadowScale plr16 tp' },
                        'SluckyUI'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn p-r m32 ptb6 regularShadowMove plr16 tp' },
                        'SluckyUI'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn-n ptb6 plr16 m32' },
                        'SluckyUI'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn-w bor b-side ptb6 plr16 m32' },
                        'SluckyUI'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn-hollow ptb6 plr16 m32' },
                        'SluckyUI'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'tag-text ptb6 plr16 m32' },
                        'SluckyUI'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn-action ptb6 plr16 m32' },
                        'SluckyUI'
                    )
                ),
                _react2.default.createElement(
                    'details',
                    { className: 'pb16 mb16 bor-b b-side-s' },
                    _react2.default.createElement(
                        'summary',
                        { className: 'btn-n pl8 pr64 ptb8' },
                        '\u663E\u793ADemo\u4EE3\u7801'
                    ),
                    _react2.default.createElement(
                        _reactHighlight2.default,
                        { innerHTML: true },
                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoString }))
                    )
                )
            );
        }
    }]);

    return ButtonDemo;
}(_react.Component);

exports.default = ButtonDemo;