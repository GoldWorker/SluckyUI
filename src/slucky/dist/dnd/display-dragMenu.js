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

var DragMenu = function (_Component) {
    _inherits(DragMenu, _Component);

    function DragMenu() {
        _classCallCheck(this, DragMenu);

        var _this = _possibleConstructorReturn(this, (DragMenu.__proto__ || Object.getPrototypeOf(DragMenu)).call(this));

        _this.state = {
            com: '',
            pos: {
                top: 112,
                left: 56
            }
        };
        return _this;
    }

    _createClass(DragMenu, [{
        key: 'handleChangePos',
        value: function handleChangePos(event) {
            var e = event || window.event;

            if (e.clientX > 0 && e.clientY > 0 && e.target.tagName != 'LI') {
                this.setState({
                    pos: {
                        top: e.clientY - 28,
                        left: e.clientX - 28
                    }
                });
            }
        }
    }, {
        key: 'handleComDrag',
        value: function handleComDrag(ev) {
            console.log(ev.target.dataset.name);
            var name = ev.target.dataset.name;

            ev.dataTransfer.setData('name', name);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var conf = {
                mainCom: ['article', 'nav', 'about', 'articleDetail'],
                decCom: ['todoList', 'weiboHotList'],
                color: ['black', 'blue'],
                bgImage: ['']
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    {
                        draggable: 'true',
                        className: 'bg-black c-text-w p-a drag-menu shadow',
                        style: this.state.pos,
                        onDrag: function onDrag(e) {
                            return _this2.handleChangePos(e);
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'menu-nd' },
                        _react2.default.createElement(
                            'div',
                            { className: 'drag-menu bg-black c-text-w p-a ta-c' },
                            _react2.default.createElement(
                                'span',
                                { className: 'lh56' },
                                '\u63A7\u5236'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'drag-menu bg-black c-text-w p-a ta-c' },
                            _react2.default.createElement(
                                'div',
                                { className: 'p-r d-n list-container' },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'paper bg-black p8' },
                                    conf.mainCom.map(function (item, index) {
                                        return _react2.default.createElement(
                                            'li',
                                            {
                                                'data-name': item,
                                                onDragStart: function onDragStart(e) {
                                                    return _this2.handleComDrag(e);
                                                },
                                                key: item,
                                                className: 'ptb4',
                                                draggable: 'true' },
                                            item
                                        );
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'lh56' },
                                '\u4E3B\u8981'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'drag-menu bg-black c-text-w p-a' },
                            _react2.default.createElement(
                                'div',
                                { className: 'drag-menu bg-black c-text-w p-a ta-c' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'p-r d-n list-container' },
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'paper bg-black plr8 ptb16' },
                                        conf.decCom.map(function (item, index) {
                                            return _react2.default.createElement(
                                                'li',
                                                {
                                                    'data-name': item,
                                                    onDragStart: function onDragStart(e) {
                                                        return _this2.handleComDrag(e);
                                                    },
                                                    key: item,
                                                    className: 'ptb4',
                                                    draggable: 'true' },
                                                item
                                            );
                                        })
                                    )
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'lh56' },
                                    '\u88C5\u9970'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DragMenu;
}(_react.Component);

exports.default = DragMenu;