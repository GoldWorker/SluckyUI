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

var NavDemo = function (_Component) {
    _inherits(NavDemo, _Component);

    function NavDemo() {
        _classCallCheck(this, NavDemo);

        return _possibleConstructorReturn(this, (NavDemo.__proto__ || Object.getPrototypeOf(NavDemo)).apply(this, arguments));
    }

    _createClass(NavDemo, [{
        key: 'render',
        value: function render() {
            var demoString = '``` html' + '\n<ul className="nav-normal">\n    <li>A</li>\n    <li>B</li>\n    <li>123</li>\n    <li>adf</li>\n    <li>Aadfs1233</li>\n</ul>\n\n<nav className="nav bor b-side bg-b c-text-w fw">\n    <li className="nav-flag">\n        <a href="#">asd</a>\n        <svg className="icon icon-test">\n            <use xlinkHref="#icon-test"></use>\n        </svg>\n        <ul className="paper menu bor b-side">\n            <li>\n                <a href="#">1</a>\n            </li>\n            <li>\n                <a href="#">2</a>\n            </li>\n            <li>\n                <a href="#">3</a>\n            </li>\n        </ul>\n    </li>\n    <li className="nav-flag">\n        <a href="#">dddddd</a>\n        <svg className="icon icon-test">\n            <use xlinkHref="#icon-test"></use>\n        </svg>\n        <ul className="paper menu bor b-side">\n            <li className="menu-flag">\n                <a href="#">zxcxzc</a>\n                <ul className="paper menu bor b-side">\n                    <li className="menu-flag">\n                        <a href="#">zxcxzc</a>\n                        <ul className="paper menu bor b-side">\n                            <li>\n                                <a href="#">1</a>\n                            </li>\n                            <li>\n                                <a href="#">2</a>\n                            </li>\n                            <li>\n                                <a href="#">3</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li>\n                        <a href="#">qwf</a>\n                    </li>\n                    <li>\n                        <a href="#">cvvf</a>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a href="#">qwf</a>\n            </li>\n            <li>\n                <a href="#">cvvf</a>\n            </li>\n        </ul>\n    </li>\n    <li>\n        <a href="#">zxcxzc</a>\n    </li>\n    <li>\n        <a href="#">qwf</a>\n    </li>\n    <li className="nav-flag">\n        <a href="#">cvvf</a>\n        <svg className="icon icon-test">\n            <use xlinkHref="#icon-test"></use>\n        </svg>\n        <ul className="paper menu bor b-side">\n            <li>\n                <a href="#">1</a>\n            </li>\n            <li>\n                <a href="#">2</a>\n            </li>\n            <li>\n                <a href="#">3</a>\n            </li>\n        </ul>\n    </li>\n    <li className="nav-flag">\n        <a href="#">\u5173\u4E8E</a>\n        <svg className="icon icon-test">\n            <use xlinkHref="#icon-test"></use>\n        </svg>\n        <ul className="paper menu bor b-side">\n            <li className="menu-flag">\n                <a href="#">\u8054\u7CFB\u65B9\u5F0F</a>\n                <ul className="paper menu bor b-side">\n                    <li className="menu-flag">\n                        <a href="#">\u554A\u53D1\u987A\u4E30cxzc</a>\n                        <ul className="paper menu bor b-side">\n                            <li>\n                                <a href="#">\u53D1\u6325</a>\n                            </li>\n                            <li>\n                                <a href="#">\u5176\u5473\u65E0\u7A77</a>\n                            </li>\n                            <li>\n                                <a href="#">\u963F\u65AF\u987F\u6CD5\u56FD</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li>\n                        <a href="#">\u81EA\u884C\u8F66</a>\n                    </li>\n                    <li>\n                        <a href="#">\u521D\u6B65</a>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a href="#">qwf</a>\n            </li>\n            <li>\n                <a href="#">cvvf</a>\n            </li>\n        </ul>\n    </li>\n</nav>\n' + '```';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'd-n' },
                    _react2.default.createElement(
                        'svg',
                        null,
                        _react2.default.createElement(
                            'symbol',
                            { id: 'icon-test', viewBox: '0 0 16 16' },
                            _react2.default.createElement(
                                'title',
                                null,
                                'test'
                            ),
                            _react2.default.createElement('path', {
                                className: 'path1',
                                d: 'M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'nav-normal' },
                        _react2.default.createElement(
                            'nav',
                            { className: 'plr8 pb8' },
                            '\u963F\u5C14\u6CD5'
                        ),
                        _react2.default.createElement(
                            'nav',
                            { className: 'plr8 pb8' },
                            '\u8D1D\u5854'
                        ),
                        _react2.default.createElement(
                            'nav',
                            { className: 'plr8 pb8' },
                            '\u4F3D\u739B'
                        ),
                        _react2.default.createElement(
                            'nav',
                            { className: 'plr8 pb8' },
                            '\u6B27\u7C73\u4F3D'
                        ),
                        _react2.default.createElement(
                            'nav',
                            { className: 'plr8 pb8' },
                            '\u897F\u683C\u739B'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32' },
                    _react2.default.createElement(
                        'nav',
                        { className: 'nav bor b-side bg-b c-text-w fw' },
                        _react2.default.createElement(
                            'li',
                            { className: 'nav-flag' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u963F\u5C14\u6CD5'
                            ),
                            _react2.default.createElement(
                                'svg',
                                { className: 'icon icon-test' },
                                _react2.default.createElement('use', { xlinkHref: '#icon-test' })
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'paper menu bor b-side' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '1'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '2'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '3'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'nav-flag' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u8D1D\u5854'
                            ),
                            _react2.default.createElement(
                                'svg',
                                { className: 'icon icon-test' },
                                _react2.default.createElement('use', { xlinkHref: '#icon-test' })
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'paper menu bor b-side' },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'menu-flag' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'zxcxzc'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'paper menu bor b-side' },
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'menu-flag' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: '#' },
                                                'zxcxzc'
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'paper menu bor b-side' },
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: '#' },
                                                        '1'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: '#' },
                                                        '2'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: '#' },
                                                        '3'
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '#' },
                                                'qwf'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '#' },
                                                'cvvf'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'qwf'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'cvvf'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u6B27\u7C73\u4F3D'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u897F\u683C\u739B'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'nav-flag' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'BR&F'
                            ),
                            _react2.default.createElement(
                                'svg',
                                { className: 'icon icon-test' },
                                _react2.default.createElement('use', { xlinkHref: '#icon-test' })
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'paper menu bor b-side' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '1'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '2'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '3'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'nav-flag' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u5173\u4E8E'
                            ),
                            _react2.default.createElement(
                                'svg',
                                { className: 'icon icon-test' },
                                _react2.default.createElement('use', { xlinkHref: '#icon-test' })
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'paper menu bor b-side' },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'menu-flag' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '\u8054\u7CFB\u65B9\u5F0F'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'paper menu bor b-side' },
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'menu-flag' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: '#' },
                                                '\u554A\u53D1\u987A\u4E30cxzc'
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'paper menu bor b-side' },
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: '#' },
                                                        '\u53D1\u6325'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: '#' },
                                                        '\u5176\u5473\u65E0\u7A77'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: '#' },
                                                        '\u963F\u65AF\u987F\u6CD5\u56FD'
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '#' },
                                                '\u81EA\u884C\u8F66'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '#' },
                                                '\u521D\u6B65'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'qwf'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'cvvf'
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'paper menu bor b-side m16' },
                        _react2.default.createElement(
                            'li',
                            { className: 'menu-flag' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u963F\u5C14\u6CD5'
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'paper menu bor b-side' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '\u8FDE\u6D77\u5E73'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '\u5171\u6F6E\u751F'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '\u5343\u4E07\u91CC'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'menu-flag' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u8D1D\u5854'
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'paper menu bor b-side' },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'menu-flag' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '\u65E0\u6708\u660E'
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'paper menu bor b-side' },
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'menu-flag' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: '#' },
                                                '\u7ED5\u82B3\u7538'
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'paper menu bor b-side' },
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: '#' },
                                                        '\u7686\u4F3C\u9730'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: '#' },
                                                        '\u4E0D\u89C9\u98DE'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: '#' },
                                                        '\u770B\u4E0D\u89C1'
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '#' },
                                                '\u65E0\u7EA4\u5C18'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            null,
                                            _react2.default.createElement(
                                                'a',
                                                { href: '#' },
                                                '\u5B64\u6708\u8F6E'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '\u521D\u89C1\u6708'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '\u521D\u7167\u4EBA'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u4F3D\u9A6C'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u6B27\u7C73\u4F3D'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'menu-flag' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u897F\u683C\u739B'
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'paper menu bor b-side' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '\u65E0\u7A77\u5DF2'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        '\u671B\u76F8\u4F3C'
                                    )
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

    return NavDemo;
}(_react.Component);

exports.default = NavDemo;