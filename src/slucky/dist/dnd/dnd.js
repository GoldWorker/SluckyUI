'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _displayBottomTool = require('./display-bottomTool');

var _displayBottomTool2 = _interopRequireDefault(_displayBottomTool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dnd = function (_Component) {
    _inherits(dnd, _Component);

    function dnd() {
        _classCallCheck(this, dnd);

        var _this = _possibleConstructorReturn(this, (dnd.__proto__ || Object.getPrototypeOf(dnd)).call(this));

        _this.state = {
            com: '',
            pos: {
                top: 200,
                left: 0
            },
            dragStatus: true
        };
        return _this;
    }

    _createClass(dnd, [{
        key: 'handleDragOver',
        value: function handleDragOver(ev) {
            //这保证 handleDroZoneDrop可以被调用
            ev.preventDefault();
        }
    }, {
        key: 'handleDragEnter',
        value: function handleDragEnter(ev) {
            // console.log(ev);
            ev.dataTransfer.dropEffect = "copy";
        }
    }, {
        key: 'handleDragLeave',
        value: function handleDragLeave(ev) {
            // console.log(ev);
        }
    }, {
        key: 'handleDrop',
        value: function handleDrop(ev) {
            var _this2 = this;

            // console.log(ev.target);
            console.log(ev.dataTransfer.getData('name'));
            var comName = ev.dataTransfer.getData('name') || '';

            _util2.default.onLoadCom(comName, function (com) {
                _this2.setState({ com: com });
            });
        }
    }, {
        key: 'handleDragStart',
        value: function handleDragStart(ev) {
            console.log(ev.target);
            ev.dataTransfer.setData('test', '123');
            ev.dataTransfer.effectAllowed = "copy";
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            var _this3 = this;

            console.log(this.context);
            console.log(this.state.com);
            require.ensure([], function (require) {
                var article = require('../../components/nav/navNormalize.js').default;
                _this3.setState({ com: article });
            });
        }
    }, {
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
            var _this4 = this;

            var conf = {
                mainCom: ['article', 'comment', 'nav', 'about'],
                decCom: ['menu', 'todoList', 'about'],
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
                        className: 'bg-grey p-a drag-menu',
                        style: this.state.pos,
                        onDrag: function onDrag(e) {
                            return _this4.handleChangePos(e);
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'menu-nd' },
                        _react2.default.createElement(
                            'div',
                            { className: 'drag-menu bg-grey p-a' },
                            _react2.default.createElement(
                                'div',
                                { className: 'p-r d-n list-container' },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'list paper' },
                                    conf.mainCom.map(function (item, index) {
                                        return _react2.default.createElement(
                                            'li',
                                            {
                                                'data-name': item,
                                                onDragStart: function onDragStart(e) {
                                                    return _this4.handleComDrag(e);
                                                },
                                                key: item,
                                                draggable: 'true' },
                                            item
                                        );
                                    })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'drag-menu bg-grey p-a' },
                            _react2.default.createElement(
                                'div',
                                { className: 'drag-menu bg-grey p-a' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'p-r d-n list-container' },
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'list paper' },
                                        conf.decCom.map(function (item, index) {
                                            return _react2.default.createElement(
                                                'li',
                                                {
                                                    'data-name': item,
                                                    onDragStart: function onDragStart(e) {
                                                        return _this4.handleComDrag(e);
                                                    },
                                                    key: item,
                                                    draggable: 'true' },
                                                item
                                            );
                                        })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'drag-menu bg-grey p-a' },
                            '3'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { draggable: 'true', onDragStart: function onDragStart() {
                            return _this4.handleDragStart();
                        } },
                    '123'
                ),
                this.state.com && _react2.default.createElement(this.state.com),
                _react2.default.createElement(
                    'div',
                    { className: 'survey-canvas col-md-9' },
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'drop-zone well well-drop-zone',
                            onDragOver: this.handleDragOver.bind(this),
                            onDragEnter: this.handleDragEnter.bind(this),
                            onDragLeave: this.handleDragLeave.bind(this),
                            onDrop: this.handleDrop.bind(this) },
                        'Drag and drop a module from the left'
                    )
                ),
                _react2.default.createElement(_displayBottomTool2.default, null)
            );
        }
    }]);

    return dnd;
}(_react.Component);

exports.default = dnd;