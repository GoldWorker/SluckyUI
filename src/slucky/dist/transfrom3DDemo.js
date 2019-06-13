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

var transfrom3DDemo = function (_Component) {
    _inherits(transfrom3DDemo, _Component);

    function transfrom3DDemo() {
        _classCallCheck(this, transfrom3DDemo);

        return _possibleConstructorReturn(this, (transfrom3DDemo.__proto__ || Object.getPrototypeOf(transfrom3DDemo)).apply(this, arguments));
    }

    _createClass(transfrom3DDemo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'section',
                    { className: 't3d-container' },
                    _react2.default.createElement('input', { type: 'radio', id: 'card_front', name: 'card-ctrl', defaultChecked: true }),
                    _react2.default.createElement(
                        'div',
                        { className: 'card-select-box' },
                        _react2.default.createElement(
                            'label',
                            { className: 'card-select', htmlFor: 'card_front' },
                            'front'
                        ),
                        _react2.default.createElement(
                            'label',
                            { className: 'card-select', htmlFor: 'card_back' },
                            'back'
                        )
                    ),
                    _react2.default.createElement('input', { type: 'radio', id: 'card_back', name: 'card-ctrl', className: 'card-ischecked' }),
                    _react2.default.createElement(
                        'div',
                        { id: 'card' },
                        _react2.default.createElement(
                            'figure',
                            { className: 'front', id: 'front' },
                            _react2.default.createElement('img', { style: { width: '100px' }, src: require('../images/bg_test.jpg'), alt: '' })
                        ),
                        _react2.default.createElement(
                            'figure',
                            { className: 'back', id: 'back' },
                            _react2.default.createElement('img', { style: { width: '100px' }, src: require('../images/bg_test.jpg'), alt: '' })
                        )
                    )
                )
            );
        }
    }]);

    return transfrom3DDemo;
}(_react.Component);

exports.default = transfrom3DDemo;