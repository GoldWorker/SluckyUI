'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableDemo = undefined;

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

var TableDemo = exports.TableDemo = function (_Component) {
    _inherits(TableDemo, _Component);

    function TableDemo() {
        _classCallCheck(this, TableDemo);

        var _this = _possibleConstructorReturn(this, (TableDemo.__proto__ || Object.getPrototypeOf(TableDemo)).call(this));

        _this.handleChangePage = function (currentPage) {
            console.log(currentPage);
        };

        _this.state = {
            pageInfo: {
                currentPage: 1,
                total: 120,
                maxToShow: 20
            }
        };
        setTimeout(function () {
            _this.setState({
                pageInfo: {
                    currentPage: 1,
                    total: 150,
                    maxToShow: 20
                }
            });
        }, 1000);
        return _this;
    }

    _createClass(TableDemo, [{
        key: 'render',
        value: function render() {
            var demoString = '``` jsx' + '\nimport React, { Component } from \'react\'\nimport { Table, Paging } from \'slucky\'\n\nclass TableDemo extends Component {\n    handleChangePage = (currentPage) => {\n        console.log(currentPage);\n    }\n    render(){\n        const dataconf = [\n            {\n                title: \'\',\n                width: \'10%\',\n                checkbox: true,\n                handle: (list) => {\n                    console.log(list)\n                }\n            },\n            {\n                title: \'progress\',\n                name: \'progress\',\n                width: \'25%\',\n                progress: (data) => {\n                    return data[\'progress\']\n                },\n                pipe: (data) => {\n                    return {data[\'progress\']}\n                }\n            },\n            {\n                title: \'ID\',\n                name: \'id\',\n                width: \'10%\'\n            }, {\n                title: \'\u59D3\u540D\',\n                name: \'name\',\n                width: \'10%\'\n            }, {\n                title: \'\u8EAB\u9AD8\',\n                name: \'height\',\n                width: \'10%\'\n            },\n            {\n                width: \'10%\',\n                name: \'\u63D0\u793A\',\n                popup: (data) => {\n                    return (\n                        <div>\n                            <pre className="c-text-w fs18">Title</pre>\n                            <pre className="c-text-w">SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6</pre>\n                            <pre className="c-text-w">SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6</pre>\n                            <pre className="c-text-w">SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6</pre>\n                        </div>\n                    )\n                }\n            },\n            {\n                title: \'\',\n                width: \'25%\',\n                name: \'action2\',\n                type: \'action\',\n                handles: [\n                    {\n                        name: \'\u914D\u7F6E\',\n                        btnType: \'text\',\n                        handle: (data) => {\n                            alert(\'\u914D\u7F6E\')\n                            console.log(data);\n                        }\n                    },\n                    {\n                        name: \'\u5220\u9664\',\n                        btnType: \'text\',\n                        handle: (data) => {\n                            alert(\'\u5907\u6CE8\')\n                            console.log(data);\n                        }\n                    }]\n            }\n        ]\n        const dataset = [{\n            id: 1,\n            name: \'Apple\',\n            height: 178,\n            progress: 30\n        }, {\n            id: 2,\n            name: \'Boy\',\n            height: 177,\n            progress: 60\n        }, {\n            id: 3,\n            name: \'Cat\',\n            height: 176,\n            progress: 90\n        }]\n        \n        const pageInfo = {\n            total: 119,\n            maxToShow: 20\n        }\n        return(\n            <Table dataconf={dataconf} dataset={dataset} />\n            <Paging pageInfo={pageInfo} onAction={this.handleChangePage} />\n        )\n    }\n}\n';
            var dataconf = [{
                title: '',
                width: '10%',
                checkbox: true,
                handle: function handle(list) {
                    console.log(list);
                }
            }, {
                title: 'progress',
                name: 'progress',
                width: '25%',
                progress: function progress(data) {
                    return data['progress'];
                },
                pipe: function pipe(data) {
                    return data['progress'] + '%';
                }
            }, {
                title: 'ID',
                name: 'id',
                width: '10%'
            }, {
                title: '姓名',
                name: 'name',
                width: '10%'
            }, {
                title: '身高',
                name: 'height',
                width: '10%'
            }, {
                width: '10%',
                name: '提示',
                popup: function popup(data) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'pre',
                            { className: 'c-text-w fs18' },
                            'Title'
                        ),
                        _react2.default.createElement(
                            'pre',
                            { className: 'c-text-w' },
                            'SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6'
                        ),
                        _react2.default.createElement(
                            'pre',
                            { className: 'c-text-w' },
                            'SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6'
                        ),
                        _react2.default.createElement(
                            'pre',
                            { className: 'c-text-w' },
                            'SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6'
                        )
                    );
                }
            }, {
                title: '',
                width: '25%',
                name: 'action2',
                type: 'action',
                handles: [{
                    name: '配置',
                    btnType: 'text',
                    handle: function handle(data) {
                        alert('配置');
                        console.log(data);
                    }
                }, {
                    name: '删除',
                    btnType: 'text',
                    handle: function handle(data) {
                        alert('备注');
                        console.log(data);
                    }
                }]
            }];
            var dataset = [{
                id: 1,
                name: 'Apple',
                height: 178,
                progress: 30
            }, {
                id: 2,
                name: 'Boy',
                height: 177,
                progress: 60
            }, {
                id: 3,
                name: 'Cat',
                height: 176,
                progress: 90
            }];

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'ptb32' },
                    _react2.default.createElement(_index.Table, { dataconf: dataconf, dataset: dataset }),
                    _react2.default.createElement(
                        'div',
                        { className: 'p16' },
                        _react2.default.createElement(_index.Paging, { pageInfo: this.state.pageInfo, onAction: this.handleChangePage }),
                        console.log(this.state.pageInfo)
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
                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoString }))
                    )
                )
            );
        }
    }]);

    return TableDemo;
}(_react.Component);