'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Toast = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toastRef = '';

var Toast = exports.Toast = function (_React$Component) {
    _inherits(Toast, _React$Component);

    function Toast() {
        _classCallCheck(this, Toast);

        var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));

        _this.add = function (_ref) {
            var title = _ref.title,
                content = _ref.content,
                status = _ref.status;

            if (_this.state.list.length > 5) {
                var data = _this.state.list;
                data.shift();
                _this.setState({ list: data });
            }
            if (!_this.timer) {
                // console.log(this.timer,'timer');
                _this.timer = setInterval(function () {
                    var data = _this.state.list;
                    data.shift();
                    _this.setState({ list: data });

                    if (!data.length) {
                        _this.timer = clearInterval(_this.timer);
                    }
                }, 3000);
            }
            _this.setState({
                list: [].concat(_toConsumableArray(_this.state.list), [{
                    title: title,
                    content: content,
                    status: status
                }])
            });
            console.log(content, 'add succ');
        };

        _this.state = {
            list: [],
            toggle: false
        };
        _this.createPortalContainer();
        _this.timer = undefined;
        return _this;
    }

    _createClass(Toast, [{
        key: 'createPortalContainer',
        value: function createPortalContainer() {
            var doc = window.document;
            this.node = doc.createElement('div');
            doc.body.appendChild(this.node);
        }
    }, {
        key: 'clearPortalContainer',
        value: function clearPortalContainer() {
            window.document.body.removeChild(this.node);
        }
    }, {
        key: 'handleMapStatus',
        value: function handleMapStatus() {
            var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';

            switch (status) {
                case 'success':
                    return 'c-success';
                case 'warn':
                    return 'c-warn';
                case 'fail':
                    return 'c-fail';
                default:
                    return 'c-success';
            }
        }
    }, {
        key: 'handleMapTitle',
        value: function handleMapTitle() {
            var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';

            switch (status) {
                case 'success':
                    return '成功';
                case 'warn':
                    return '警告';
                case 'fail':
                    return '重试';
                default:
                    return false;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log(this.props.toggle, this.state.list, this.node);

            return (0, _reactDom.createPortal)(_react2.default.createElement(
                'div',
                { className: 'toastlists-normalize-box' },
                this.state.list.map(function (item, index) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'toastlist', key: index },
                        _react2.default.createElement(
                            'div',
                            { className: 'toast-item paper' },
                            _react2.default.createElement(
                                'div',
                                { className: ['pb8', _this2.handleMapStatus(item.status)].join(' '), style: { minWidth: 256 + 'px' } },
                                item.title || _this2.handleMapTitle(item.status)
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: '' },
                                item.content
                            )
                        )
                    );
                })
            ), this.node);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.clearPortalContainer();
        }
    }]);

    return Toast;
}(_react2.default.Component);

Toast.add = function (_ref2) {
    var title = _ref2.title,
        content = _ref2.content,
        status = _ref2.status;

    //保持一个实例
    if (!document.getElementById('slucky_toast')) {
        toastRef = _react2.default.createRef();
        var component = _react2.default.createElement(Toast, { ref: toastRef });
        var div = document.createElement('div');
        div.id = 'slucky_toast';
        document.body.append(div);
        _reactDom2.default.render(component, div);
    }
    toastRef.current.add({ title: title, content: content, status: status });
};

Toast.success = function (content) {
    Toast.add({ title: '成功', content: content, status: 'success' });
};

Toast.error = function (content) {
    Toast.add({ title: '错误', content: content, status: 'fail' });
};

Toast.warn = function (content) {
    Toast.add({ title: '提示', content: content, status: 'warn' });
};