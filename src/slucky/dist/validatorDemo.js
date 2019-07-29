"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ValidatorDemo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _src = require("slucky/src");

var _input = require("slucky/src/component/input");

var _radio = require("slucky/src/component/radio");

var _checkbox = require("slucky/src/component/checkbox");

var _switch = require("slucky/src/component/switch");

var _tab = require("slucky/src/component/tab");

var _select = require("slucky/src/component/select");

var _search = require("slucky/src/component/search");

var _steps = require("slucky/src/component/steps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { Search } from "slucky/distTest/component/search";

var ValidatorDemo = exports.ValidatorDemo = function (_Component) {
    _inherits(ValidatorDemo, _Component);

    function ValidatorDemo() {
        _classCallCheck(this, ValidatorDemo);

        var _this = _possibleConstructorReturn(this, (ValidatorDemo.__proto__ || Object.getPrototypeOf(ValidatorDemo)).call(this));

        _this.handelClickSubmit = function () {
            //isSubmit只检测
            if (_this.Validator.isSubmit(_this.state)) {
                _src.Toast.add('ok');
            } else {
                _src.Toast.add({
                    content: 'vali fail',
                    status: 'fail'
                });
            }
            //更新校验信息
            _this.forceUpdate();
        };

        _this.handleChangeRadio = function (e) {
            console.log(e.target.value);
        };

        _this.handleChangeCheckbox = function (selected) {
            console.log(selected);
        };

        _this.handleChangeSwitch = function (e) {
            console.log(e.target.value);
        };

        _this.state = {
            name: 'asdf',
            email: '123',
            password: ''
        };
        _this.Validator = new _src.Validator();
        _src.Validator.types.isEmptyTest = {
            validate: function validate(value) {
                return value !== '';
            },

            instruction: '不为空自定义校验'
        };
        _this.Validator.config = {
            name: ['isEmpty', 'isEmptyTest'],
            email: ['isEmpty', 'isEmptyTest'],
            password: ['isEmpty', 'isInt', 'isEmptyTest']
        };
        return _this;
    }

    _createClass(ValidatorDemo, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "bor b-side p32 mtb32" },
                _react2.default.createElement(_steps.Steps, { isCacheData: true, stepset: [{
                        title: '1',
                        content: function content(data) {
                            return _react2.default.createElement(
                                "div",
                                null,
                                _react2.default.createElement(_search.Search, { onChange: function onChange(v) {
                                        console.log(v);
                                    }, option: ['asdf', '123', 'qwer123', 'zxcvqwe23', '2333hhh'] })
                            );
                        },
                        handleNext: function handleNext(data) {
                            return true;
                        }
                    }, {
                        title: '-> 2',
                        content: function content(data) {
                            return _react2.default.createElement(_select.Select, { defaultValue: "\u9009\u98792", onChange: function onChange(v) {
                                    console.log(v);
                                }, option: [{
                                    label: '选项1',
                                    value: 'v1'
                                }, {
                                    label: '选项2',
                                    value: 'v2'
                                }, {
                                    label: '选项3',
                                    value: 'v3'
                                }] });
                        },
                        handleNext: function handleNext(data) {
                            return true;
                        }
                    }, {
                        title: '-> 3',
                        content: function content(data) {
                            return _react2.default.createElement(
                                "div",
                                null,
                                data.name
                            );
                        },
                        handleNext: function handleNext(data) {
                            return true;
                        }
                    }], onChange: function onChange(currentSept) {
                        console.log(currentSept);
                    } }),
                _react2.default.createElement(_search.Search, { onChange: function onChange(v) {
                        console.log(v);
                    }, option: ['asdf', '123', 'qwer123', 'zxcvqwe23', '2333hhh'] }),
                _react2.default.createElement(_select.Select, { defaultValue: "\u9009\u98792", onChange: function onChange(v) {
                        console.log(v);
                    }, option: [{
                        label: '选项1',
                        value: 'v1'
                    }, {
                        label: '选项2',
                        value: 'v2'
                    }, {
                        label: '选项3',
                        value: 'v3'
                    }] }),
                _react2.default.createElement(_radio.Radio.Group, { className: "pb32", defaultValue: "Pear", onChange: function onChange(e) {
                        _this2.handleChangeRadio(e);
                    }, option: [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),
                _react2.default.createElement(_checkbox.Checkbox.Group, { className: "pb32", defaultValue: "Pear", onChange: function onChange(selected) {
                        _this2.handleChangeCheckbox(selected);
                    }, option: [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),
                _react2.default.createElement(_checkbox.Checkbox.GroupFontIn, { className: "pb32", defaultValue: "Pear", onChange: function onChange(selected) {
                        _this2.handleChangeCheckbox(selected);
                    }, option: [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),
                _react2.default.createElement(_switch.Switch, null),
                _react2.default.createElement(
                    _tab.Tab.Group,
                    null,
                    _react2.default.createElement(
                        _tab.Tab,
                        { title: "hello", defaultChecked: true },
                        "123"
                    ),
                    _react2.default.createElement(
                        _tab.Tab,
                        { title: "123" },
                        "qwer"
                    ),
                    _react2.default.createElement(
                        _tab.Tab,
                        { title: "qwe" },
                        "12asdf3"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-f ac mb24 mt36" },
                    _react2.default.createElement(
                        "div",
                        { className: "w96 s0" },
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "name" },
                            "Name:"
                        )
                    ),
                    _react2.default.createElement(_input.Input, { disabled: true, id: "name", width: "100%", value: this.state.name, onChange: function onChange(name) {
                            _this2.setState({ name: name });
                        }, error: function error() {
                            return _this2.Validator.formatRes('name');
                        } })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-f ac mb24" },
                    _react2.default.createElement(
                        "div",
                        { className: "w96 s0" },
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "email" },
                            "Email:"
                        )
                    ),
                    _react2.default.createElement(_input.Input, { readOnly: true, id: "email", value: this.state.email, onChange: function onChange(email) {
                            _this2.setState({ email: email });
                        }, error: function error() {
                            return _this2.Validator.formatRes('email');
                        } })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "d-f ac mb24" },
                    _react2.default.createElement(
                        "div",
                        { className: "w96 s0" },
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "password" },
                            "Password:"
                        )
                    ),
                    _react2.default.createElement(_input.Input, { id: "password", onChange: function onChange(password) {
                            _this2.setState({ password: password });
                        }, error: function error() {
                            return _this2.Validator.formatRes('password');
                        } })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "w384 ta-c" },
                    _react2.default.createElement(
                        "button",
                        { className: "btn-n ml8 plr16 ptb8", onClick: this.handelClickSubmit },
                        "\u6821\u9A8C\u8868\u5355"
                    )
                )
            );
        }
    }]);

    return ValidatorDemo;
}(_react.Component);