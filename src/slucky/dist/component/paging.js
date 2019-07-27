'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Paging = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paging = exports.Paging = function (_Component) {
    _inherits(Paging, _Component);

    function Paging(props) {
        _classCallCheck(this, Paging);

        var _this = _possibleConstructorReturn(this, (Paging.__proto__ || Object.getPrototypeOf(Paging)).call(this, props));

        _this.start = 1;
        _this.maxWidth = 5;
        _this.minWidth = '';
        _this.end = '';
        // 分页对象

        _this.state = {
            pageInfo: {
                total: _this.props.pageInfo.total || 0,
                maxToShow: _this.props.pageInfo.maxToShow || 0,
                currentPage: _this.props.pageInfo.currentPage || 1
            },
            viewBox: {
                width: '', // 可视容器的宽度
                list: [], // 可视容器列表
                before: false, // 前后省略号
                after: false,
                currentPage: '' // 当前页
            }
        };
        return _this;
    }

    _createClass(Paging, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.init();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            // 在重新render之前更新state不会重新触发生命周期
            // console.log('componentWillReceiveProps', nextProps, this.props)
            this.setState({
                pageInfo: {
                    total: nextProps.pageInfo.total || 0,
                    maxToShow: nextProps.pageInfo.maxToShow || 0,
                    currentPage: nextProps.pageInfo.currentPage || 1
                },
                viewBox: {
                    width: '', // 可视容器的宽度
                    list: [], // 可视容器列表
                    before: false, // 前后省略号
                    after: false,
                    currentPage: '' // 当前页
                }
            }, function () {
                if (nextProps.pageInfo.currentPage && _this2.state.viewBox) {
                    _this2.init(_this2.handleChangePageSelf(nextProps.pageInfo.currentPage));
                } else {
                    _this2.init();
                }
            });
        }
    }, {
        key: 'init',
        value: function init(cb) {
            var pageInfo = this.state.pageInfo;

            this.end = Math.ceil(pageInfo.total / pageInfo.maxToShow);
            this.end > 0 ? this.end : this.end = 1;
            // console.log(this.end);
            this.minWidth = this.end - 2;
            var currentWidth = this.maxWidth > this.minWidth ? this.minWidth : this.maxWidth;

            this.setState({
                viewBox: {
                    width: currentWidth,
                    list: function (width) {
                        var list = [];
                        for (var i = 1; i <= width; i++) {
                            var k = i;
                            list.push(++k);
                        }
                        // console.log(list);
                        return list;
                    }(currentWidth),
                    before: false,
                    after: this.maxWidth < this.minWidth,
                    currentPage: pageInfo.currentPage || 1
                }
            }, function () {
                // console.log(this.state.viewBox);
                cb && cb();
            });
        }
    }, {
        key: 'handleChangePage',
        value: function handleChangePage(currentPage) {
            // console.log(currentPage);
            currentPage = parseInt(currentPage);
            // 保证临界条件
            if (currentPage < this.start) currentPage = this.start;
            if (currentPage > this.end) currentPage = this.end;
            // console.log('currentPage', currentPage)
            this.handleViewBox(currentPage);
            this.props.onAction && this.props.onAction(currentPage);
        }
    }, {
        key: 'handleChangePageSelf',
        value: function handleChangePageSelf(currentPage) {
            currentPage = parseInt(currentPage);
            // 保证临界条件
            if (currentPage < this.start) currentPage = this.start;
            if (currentPage > this.end) currentPage = this.end;
            this.handleViewBox(currentPage);
        }
    }, {
        key: 'handleChangePageLeft',
        value: function handleChangePageLeft() {
            this.handleChangePage(--this.state.viewBox.currentPage);
        }
    }, {
        key: 'handleChangePageRight',
        value: function handleChangePageRight() {
            this.handleChangePage(++this.state.viewBox.currentPage);
        }

        // 维护viewBox

    }, {
        key: 'handleViewBox',
        value: function handleViewBox(currentPage) {
            var width = this.state.viewBox.width;

            // 多条件判断
            if (this.end - 2 >= this.maxWidth) {
                // 左临界
                if (currentPage < this.start + Math.floor(width / 2)) {
                    var list = [];
                    for (var i = this.start + 1; i < this.start + 1 + width; i++) {
                        list.push(i);
                    }
                    // console.log('l', list);
                    this.setState({
                        viewBox: Object.assign(this.state.viewBox, {
                            list: list,
                            currentPage: currentPage,
                            before: false,
                            after: true
                        })
                    }, function () {
                        // console.log('handleViewBox l', this.state.viewBox)
                    });
                }
                // 右临界
                if (currentPage > this.end - Math.ceil(width / 2)) {
                    var _list = [];
                    for (var _i = this.end - width; _i < this.end; _i++) {
                        _list.push(_i);
                    }
                    // console.log('r', list);
                    this.setState({
                        viewBox: Object.assign(this.state.viewBox, {
                            list: _list,
                            currentPage: currentPage,
                            before: true,
                            after: false
                        })
                    }, function () {
                        // console.log('handleViewBox r', this.state.viewBox)
                    });
                }
                // 通常情况
                if (currentPage >= this.start + Math.floor(width / 2) && currentPage <= this.end - Math.ceil(width / 2)) {
                    var _list2 = [];
                    var _i2 = currentPage - Math.floor(width / 2);
                    // 重新判断临界条件
                    if (_i2 < 2) _i2 = 2;
                    if (_i2 > this.end - width) _i2 = this.end - width;
                    while (width--) {
                        _list2.push(_i2++);
                    }
                    // console.log('n', list);
                    this.setState({
                        viewBox: Object.assign(this.state.viewBox, {
                            list: _list2,
                            currentPage: currentPage,
                            before: true,
                            after: true
                        })
                    }, function () {
                        // console.log('handleViewBox n', this.state.viewBox)
                    });
                }
            } else {
                this.setState({
                    viewBox: Object.assign(this.state.viewBox, {
                        currentPage: currentPage,
                        before: false,
                        after: false
                    })
                }, function () {
                    // console.log('handleViewBox', this.state.viewBox)
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            // console.log(this.start, this.end, this.state.viewBox.currentPage, this.state.viewBox.list);
            var pageInfo = this.state.pageInfo;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: ['d-f ac jc-b', this.props.style || 'paging-normal'].join(' ') },
                    _react2.default.createElement(
                        'div',
                        { className: 'fs12' },
                        '\u5171',
                        _react2.default.createElement(
                            'strong',
                            { className: 'plr4' },
                            pageInfo.total
                        ),
                        '\u6761\uFF0C\u6BCF\u9875',
                        _react2.default.createElement(
                            'strong',
                            { className: 'plr4' },
                            pageInfo.maxToShow
                        ),
                        '\u6761'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'paging-viewbox' },
                        _react2.default.createElement('span', { className: 'btn-paging arrow-left', onClick: function onClick() {
                                return _this3.handleChangePageLeft();
                            } }),
                        _react2.default.createElement(
                            'span',
                            { onClick: function onClick() {
                                    return _this3.handleChangePage(_this3.start);
                                }, className: ['btn-paging', this.start === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ') },
                            this.start
                        ),
                        this.state.viewBox.before ? _react2.default.createElement(
                            'span',
                            { className: 'mr8' },
                            '...'
                        ) : null,
                        this.state.viewBox.list.map(function (item, i) {
                            // console.log(item, this.state.viewBox.currentPage);
                            return _react2.default.createElement(
                                'span',
                                { key: i, onClick: function onClick() {
                                        return _this3.handleChangePage(item);
                                    }, className: ['btn-paging', item === _this3.state.viewBox.currentPage ? 'btn-active' : ''].join(' ') },
                                item
                            );
                        }),
                        this.state.viewBox.after ? _react2.default.createElement(
                            'span',
                            { className: 'mr8' },
                            '...'
                        ) : null,
                        this.state.viewBox.width >= 0 ? _react2.default.createElement(
                            'span',
                            { onClick: function onClick() {
                                    return _this3.handleChangePage(_this3.end);
                                }, className: ['btn-paging', this.end === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ') },
                            this.end
                        ) : null,
                        _react2.default.createElement('span', { className: 'btn-paging arrow-right', onClick: function onClick() {
                                return _this3.handleChangePageRight();
                            } })
                    )
                )
            );
        }
    }]);

    return Paging;
}(_react.Component);