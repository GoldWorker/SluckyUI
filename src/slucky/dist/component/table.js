'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Table = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = exports.Table = function (_Component) {
    _inherits(Table, _Component);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));
    }

    _createClass(Table, [{
        key: 'handleDisplay',
        value: function handleDisplay(callback, data, i) {
            if (callback === undefined) {
                return true;
            } else {
                return callback(data, i);
            }
        }
    }, {
        key: 'handleClass',
        value: function handleClass(btnType) {
            switch (btnType) {
                case 'hollow':
                    return 'tag-hollow plr16';
                case 'text':
                    return 'tag-text plr8';
                default:
                    return 'tag-hollow plr16';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'p-r' },
                    this.props.loading ? _react2.default.createElement(
                        'div',
                        { className: 'd-f ac jc table-loading' },
                        _react2.default.createElement('div', { 'data-loader': 'circle' })
                    ) : null,
                    _react2.default.createElement(
                        'div',
                        { className: 'slucky-table', style: { 'width': this.props.maxWidth, 'overflow': 'auto', 'maxHeight': this.props.maxHeight } },
                        _react2.default.createElement(
                            'div',
                            { className: ['bg-title d-f ac', this.props.fixTitle ? 'table-fix' : ''].join(' ') },
                            this.props.dataconf.map(function (conf, i) {
                                return !conf.checkbox && conf.title ? _react2.default.createElement(
                                    'div',
                                    { className: 'ptb16 d-il ta-c table-title s0', style: { 'width': conf.width }, key: i },
                                    conf.title
                                ) : null;
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'table-content' },
                            this.props.dataset && this.props.dataset.length == 0 ? _react2.default.createElement(
                                'div',
                                { className: 'ta-c pt32 pb16 c-hint-b' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    '\u6682\u65E0\u6570\u636E'
                                )
                            ) : null,
                            this.props.dataset.map(function (data, i) {
                                return _react2.default.createElement(
                                    'div',
                                    { className: 'bor-b b-side', key: i },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'table-list d-f ac ' },
                                        _this2.props.dataconf.map(function (conf, k) {
                                            var _React$createElement;

                                            return _react2.default.createElement(
                                                'div',
                                                (_React$createElement = { className: 'd-il ptb12 plr6 ta-c p-r s0 fw-w', style: 'cursor:pointer' }, _defineProperty(_React$createElement, 'style', { 'width': conf.width }), _defineProperty(_React$createElement, 'key', k), _React$createElement),
                                                !conf.handle && !conf.pipe && !conf.textarea && !conf.progress && !conf.tagList && !conf.input ? _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    data[conf.name]
                                                ) : null,
                                                conf.handles ? conf.handles.map(function (handleItem, j) {
                                                    return _this2.handleDisplay(handleItem.display, data, i) ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'pop-box', key: j },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: ['pop-toggle ptb4 mlr4', _this2.handleClass(handleItem.btnType)].join(' '), onClick: function onClick() {
                                                                    return handleItem.handle && handleItem.handle(data, i);
                                                                } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                handleItem.name
                                                            ),
                                                            handleItem.pipe ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'pop-main pr8', style: { 'minWidth': handleItem.width } },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'pop-content paper bor b-side ptb16 plr12 shadow c-text-b' },
                                                                    handleItem.pipe(data, i)
                                                                )
                                                            ) : null
                                                        )
                                                    ) : null;
                                                }) : null
                                            );
                                        })
                                    )
                                );
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Table;
}(_react.Component);