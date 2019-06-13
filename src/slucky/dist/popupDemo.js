'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupDemo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopupDemo = exports.PopupDemo = function (_Component) {
    _inherits(PopupDemo, _Component);

    function PopupDemo() {
        _classCallCheck(this, PopupDemo);

        var _this = _possibleConstructorReturn(this, (PopupDemo.__proto__ || Object.getPrototypeOf(PopupDemo)).call(this));

        _this.count = 0;
        _this.state = {
            toggle: false
        };
        return _this;
    }

    _createClass(PopupDemo, [{
        key: 'handleClickToggle',
        value: function handleClickToggle() {
            this.setState({
                toggle: !this.state.toggle
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var useString = '``` jsx' + '\n// Style1\uFF1A\u4F7F\u7528\u51FD\u6570\u5F0F\u76F4\u63A5\u8C03\u7528\n\nimport { Dialog, Toast } from \'slucky\'\nReactDOM.render(\n    <div>\n        <button\n        className="tag-text ptb6 plr16 m32"\n        onClick={() => Toast.add({\n            content: \'\u5185\u5BB9\'\n        })}>\u5F39\u51FA\u6D88\u606F\u63D0\u793A</button>\n\n        <button \n            className="btn-n" \n            onClick={() => Dialog.model({ \n                content: 123, \n                onOk: () => { }, \n                title: \'Tips\' \n            })}>Open Dialog</button>\n    </div>,\n    document.body\n)\n\n//------------------------------------\n// Style2\uFF1A\u4F7F\u7528\u7EC4\u4EF6\u53BB\u8C03\u7528\nclass demo extends Component {\n    constructor() {\n        super()\n        this.state = {\n            toggle: false\n        }\n    }\n    handleClickToggle() {\n        this.setState({\n            toggle: !this.state.toggle\n        })\n    }\n    render() {\n        return (\n            <div>\n                <Dialog open={this.state.toggle} onClose={() => this.setState({ toggle: false })}>\n                    <div>\n                        <p>Your Title</p>\n                        <div>Breaking news, sport, TV, radio and a whole lot more. The BBC informs,\n                            educates and entertains - wherever you are, whatever your age.Visit BBC News for\n                            up-to-the-minute news, breaking news, video, audio and feature stories. BBC News\n                            provides trusted World and UK news as well as local and ...</div>\n                        <div className="ta-r pt8">\n                            <button\n                                className="tag-text ptb6 plr16"\n                                onClick={() => this.setState({ toggle: false })}>cancel</button>\n                            <button className="tag-text ptb6 plr16">ok</button>\n                        </div>\n                    </div>\n                </Dialog>\n            </div>\n        )\n    }\n}\n\n';
            var demoString = '``` html' + '\n <div className="fadeIn p-r z10">\n    <div className="dialog-mark"></div>\n    <div className="dialog-box d-f ac jc">\n        <span>\n            <div className="dialog paper fade-scale mlr64">\n                <div className="ta-r">\n                    <div className="mt4 mr4 pt4 plr8 ta-r">\n                        <div>X</div>\n                    </div>\n                </div>\n                <div>\n                    <div className="dialog-content ta-l">\n                        content\n                    </div>\n                </div>\n            </div>\n        </span>\n    </div>\n</div>\n\n<div className="toastlists-normalize-box">\n    <div className="toastlist">\n        <div className="toast-item paper" >\n            <div className="pb8 c-success" style="min-width:256px;">Title</div>\n            <div className="">centent</div>\n        </div>\n    </div>\n</div>\n            \n<div className="pop-box">\n    <div className="bor-b b-theme pop-toggle plr4">\n        <span className="c-theme">?</span>\n        <div className="pop-main-r pl8">\n            <div className="pop-content p24 bg-b ta-l shadow fs14">\n                <pre className="c-text-w fs18">Title</pre>\n                <pre className="c-text-w">TV, radio and a whole lot more. The BBC informs</pre>\n                <pre className="c-text-w">TV, radio and a whole lot more. The BBC informs</pre>\n                <pre className="c-text-w">TV, radio and a whole lot more. The BBC informs</pre>\n            </div>\n        </div>\n    </div>\n</div>\n';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _index.Dialog,
                    { open: this.state.toggle, onClose: function onClose() {
                            return _this2.setState({ toggle: false });
                        } },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'p',
                            null,
                            'Your Title'
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            'Breaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever you are, whatever your age.Visit BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and ...'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ta-r pt8' },
                            _react2.default.createElement(
                                'button',
                                {
                                    className: 'tag-text ptb6 plr16',
                                    onClick: function onClick() {
                                        return _this2.setState({ toggle: false });
                                    } },
                                'cancel'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'tag-text ptb6 plr16' },
                                'ok'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'btn-n', onClick: function onClick() {
                            return _index.Dialog.model({ content: 123, onOk: function onOk() {}, title: 'Tips' });
                        } },
                    'Open Dialog'
                ),
                _react2.default.createElement(
                    'button',
                    {
                        className: 'tag-text ptb6 plr16 m32',
                        onClick: function onClick() {
                            return _this2.setState({ toggle: true });
                        } },
                    '\u5F39\u51FA\u5BF9\u8BDD\u6846'
                ),
                _react2.default.createElement(
                    'button',
                    {
                        className: 'tag-text ptb6 plr16 m32',
                        onClick: function onClick() {
                            return _index.Toast.add({
                                content: '\u5185\u5BB9' + _this2.count++
                            });
                        } },
                    '\u5F39\u51FA\u6D88\u606F\u63D0\u793A'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pop-box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pop-toggle plr4' },
                        _react2.default.createElement(
                            'div',
                            { className: 'circle bg-icon c-text-w d-f jc ac fs12' },
                            '?'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'pop-main-r pl8' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pop-content p24 bg-b ta-l shadow fs14' },
                                _react2.default.createElement(
                                    'pre',
                                    { className: 'c-text-w fs18' },
                                    'Title'
                                ),
                                _react2.default.createElement(
                                    'pre',
                                    { className: 'c-text-w' },
                                    'TV, radio and a whole lot more. The BBC informs'
                                ),
                                _react2.default.createElement(
                                    'pre',
                                    { className: 'c-text-w' },
                                    'TV, radio and a whole lot more. The BBC informs'
                                ),
                                _react2.default.createElement(
                                    'pre',
                                    { className: 'c-text-w' },
                                    'TV, radio and a whole lot more. The BBC informs'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'details',
                    { className: 'pb16 mb16 bor-b b-side-s' },
                    _react2.default.createElement(
                        'summary',
                        { className: 'btn-n pl8 pr64 ptb8' },
                        '\u663E\u793A\u4F7F\u7528\u4F8B\u5B50'
                    ),
                    _react2.default.createElement(
                        _reactHighlight2.default,
                        { innerHTML: true },
                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: useString }))
                    )
                ),
                _react2.default.createElement(
                    'details',
                    { className: 'pb16 mb16 bor-b b-side-s' },
                    _react2.default.createElement(
                        'summary',
                        { className: 'btn-n pl8 pr64 ptb8' },
                        '\u663E\u793A\u6837\u5F0F\u4EE3\u7801'
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

    return PopupDemo;
}(_react.Component);