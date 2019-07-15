'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Table = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = exports.Table = function (_Component) {
    _inherits(Table, _Component);

    function Table() {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));

        _this.checkboxList = [];
        _this.isAllSelect = false;
        return _this;
    }

    _createClass(Table, [{
        key: 'handleCheckboxChange',
        value: function handleCheckboxChange(data, i, checked, callback) {
            var _this2 = this;

            console.log(checked);
            // data.checked = checked
            if (checked) {
                this.checkboxList.push(data);
            } else {
                this.checkboxList.forEach(function (elem, index) {
                    if (JSON.stringify(data) === JSON.stringify(elem)) {
                        _this2.checkboxList.splice(index, 1);
                    }
                });
            }
            callback(this.checkboxList);
        }
    }, {
        key: 'handleCheckboxTieleChange',
        value: function handleCheckboxTieleChange(e, callback) {
            this.isAllSelect = e.target.checked;
            if (this.isAllSelect) {
                this.checkboxList = [].concat(_toConsumableArray(this.props.dataset));
                this.props.dataset.map(function (item) {
                    return _extends({}, item, {
                        checked: true
                    });
                });
                console.log(this.props.dataset);
                this.forceUpdate();
            } else {
                this.checkboxList = [];
            }
            console.log(this.checkboxList, e.target.checked);
            this.forceUpdate();
            callback(this.checkboxList);
        }
    }, {
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
            var _this3 = this;

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
                                // 全选选项
                                if (conf.checkbox) {
                                    return _react2.default.createElement('div', { key: i, className: 'ptb16 plr6 d-il ta-c table-title s0', style: { 'width': conf.width } });
                                    return _react2.default.createElement(
                                        'div',
                                        { key: i, className: 'ptb16 plr6 d-il ta-c table-title s0', style: { 'width': conf.width } },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'checkbox-box-normalize' },
                                            _react2.default.createElement('input', { id: 'checkbox_normalize_title', type: 'checkbox', name: 'c_n',
                                                checked: _this3.isAllSelect, onChange: function onChange(e) {
                                                    return _this3.handleCheckboxTieleChange(e, conf.handle, _this3.props.dataset);
                                                } }),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'checkbox-hook ta-c' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'checkbox-hook-in fs12 op0' },
                                                    '\u2713'
                                                )
                                            ),
                                            _react2.default.createElement('label', { htmlFor: 'checkbox_normalize_title', className: 'p-r z10' })
                                        )
                                    );
                                }
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
                                        { className: 'table-list d-f ac jc-b p-r' },
                                        _this3.props.dataconf.map(function (conf, k) {
                                            if (conf.progress) {
                                                return _react2.default.createElement('progress', _defineProperty({ className: 'p-a w-full', style: { height: 3 + '%', top: 'unset', bottom: 0 }, max: '100', value: conf.progress && conf.progress(data)
                                                }, 'className', 'progress-loading'));
                                            } else {
                                                return null;
                                            }
                                        }),
                                        _this3.props.dataconf.map(function (conf, k) {
                                            var _React$createElement2;

                                            return _react2.default.createElement(
                                                'div',
                                                (_React$createElement2 = { className: 'd-il ptb12 plr6 ta-c p-r s0 fw-w', style: 'cursor:pointer' }, _defineProperty(_React$createElement2, 'style', { 'width': conf.width }), _defineProperty(_React$createElement2, 'key', k), _React$createElement2),
                                                !conf.handle && !conf.pipe && !conf.textarea && !conf.progress && !conf.tagList && !conf.input ? _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    data[conf.name]
                                                ) : null,
                                                conf.handles ? Table.handleActions(_this3, conf.handles, data, i) : null,
                                                conf.pipe ? _react2.default.createElement(
                                                    'span',
                                                    { className: 'p-r z10' },
                                                    conf.pipe(data, i)
                                                ) : null,
                                                conf.textarea ? _react2.default.createElement('textarea', { rows: '4', className: 'textarea w-full', value: data[conf.name], readonly: true }) : null,
                                                conf.progress && conf.progress(data) ? Table.handleProgress(data, conf) : null,
                                                conf.checkbox ? Table.handleCheckbox(_this3, data, i, conf) : null
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

Table.handleActions = function (self_this, handles, data, i) {
    return handles.map(function (handleItem, j) {
        return self_this.handleDisplay(handleItem.display, data, i) ? _react2.default.createElement(
            'div',
            { className: 'pop-box', key: j },
            _react2.default.createElement(
                'div',
                { className: ['pop-toggle ptb4 mlr4', self_this.handleClass(handleItem.btnType)].join(' '), onClick: function onClick() {
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
    });
};

Table.handleProgress = function (data, conf) {
    return _react2.default.createElement(
        'div',
        { className: 'd-il' },
        !conf.pipe ? _react2.default.createElement(
            'span',
            { className: 'p-r z10' },
            data[conf.name]
        ) : null
    );
};

Table.handleCheckbox = function (self_this, data, i, conf) {
    return _react2.default.createElement(
        'div',
        { className: 'checkbox-box-normalize' },
        _react2.default.createElement('input', { id: 'checkbox_normalize_table' + i, type: 'checkbox', name: 'c_n'
            // checked={data.checked}
            , onChange: function onChange(e) {
                return self_this.handleCheckboxChange(data, i, e.target.checked, conf.handle);
            } }),
        _react2.default.createElement(
            'span',
            { className: 'checkbox-hook ta-c' },
            _react2.default.createElement(
                'span',
                { className: 'checkbox-hook-in fs12 op0' },
                '\u2713'
            )
        ),
        _react2.default.createElement('label', { htmlFor: 'checkbox_normalize_table' + i, className: 'p-r z10' })
    );
};

Table.handelPopup = function (handleItem) {
    return _react2.default.createElement(
        'div',
        { 'class': 'pop-box' },
        _react2.default.createElement(
            'div',
            { className: 'pop-toggle ptb4 mlr4' },
            _react2.default.createElement(
                'div',
                { className: 'pop-main pr8' },
                _react2.default.createElement(
                    'div',
                    { className: 'pop-content' },
                    handleItem.pipe(data, i)
                )
            )
        )
    );
};