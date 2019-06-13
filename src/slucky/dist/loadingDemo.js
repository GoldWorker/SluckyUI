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

var LoadingDemo = function (_Component) {
    _inherits(LoadingDemo, _Component);

    function LoadingDemo() {
        _classCallCheck(this, LoadingDemo);

        return _possibleConstructorReturn(this, (LoadingDemo.__proto__ || Object.getPrototypeOf(LoadingDemo)).apply(this, arguments));
    }

    _createClass(LoadingDemo, [{
        key: 'render',
        value: function render() {

            var demoString = '``` html' + '\n<div className="wave-box">\n    <div className="wave"></div>\n</div>\n\n<div className="mtb32">\n    <div className="w128 h128" loader-inline=\'circle\'>\n        <div className="c-hint-b">\u8BE5loading\u9002\u7528\u4E8E\u6709\u5185\u5D4C\u5185\u5BB9\u7684\u60C5\u51B5\uFF0C\u8BE5loading\u9002\u7528\u4E8E\u6709\u5185\u5D4C\u5185\u5BB9\u7684\u60C5\u51B5\uFF0C\u8BE5loading\u9002\u7528\u4E8E\u6709\u5185\u5D4C\u5185\u5BB9\u7684\u60C5\u51B5</div>\n    </div>\n</div>\n\n<div className="mtb32">\n    <div className="w128 h128 p-r">\n        <div className="d-f ac jc loading-container" >\n            <div data-loader=\'circle-side\'></div>\n        </div>\n        <div className="c-hint-b">\u8BE5loading\u9002\u7528\u65E0\u6CD5\u5185\u5D4C\u7684Dom\u7ED3\u6784\uFF0C\u8BE5loading\u9002\u7528\u65E0\u6CD5\u5185\u5D4C\u7684Dom\u7ED3\u6784\uFF0C\u8BE5loading\u9002\u7528\u65E0\u6CD5\u5185\u5D4C\u7684Dom\u7ED3\u6784</div>\n    </div>\n</div>\n';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'mtb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'wave-box' },
                        _react2.default.createElement('div', { className: 'wave' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mtb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'w128 h128', 'loader-inline': 'circle' },
                        _react2.default.createElement(
                            'div',
                            { className: 'c-hint-b' },
                            '\u8BE5loading\u9002\u7528\u4E8E\u6709\u5185\u5D4C\u5185\u5BB9\u7684\u60C5\u51B5\uFF0C\u8BE5loading\u9002\u7528\u4E8E\u6709\u5185\u5D4C\u5185\u5BB9\u7684\u60C5\u51B5\uFF0C\u8BE5loading\u9002\u7528\u4E8E\u6709\u5185\u5D4C\u5185\u5BB9\u7684\u60C5\u51B5'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mtb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'w128 h128 p-r' },
                        _react2.default.createElement(
                            'div',
                            { className: 'd-f ac jc loading-container' },
                            _react2.default.createElement('div', { 'data-loader': 'circle-side' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'c-hint-b' },
                            '\u8BE5loading\u9002\u7528\u65E0\u6CD5\u5185\u5D4C\u7684Dom\u7ED3\u6784\uFF0C\u8BE5loading\u9002\u7528\u65E0\u6CD5\u5185\u5D4C\u7684Dom\u7ED3\u6784\uFF0C\u8BE5loading\u9002\u7528\u65E0\u6CD5\u5185\u5D4C\u7684Dom\u7ED3\u6784'
                        )
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

    return LoadingDemo;
}(_react.Component);

exports.default = LoadingDemo;