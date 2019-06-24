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

var _validatorDemo = require('./validatorDemo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormDemo = function (_Component) {
    _inherits(FormDemo, _Component);

    function FormDemo() {
        _classCallCheck(this, FormDemo);

        return _possibleConstructorReturn(this, (FormDemo.__proto__ || Object.getPrototypeOf(FormDemo)).call(this));
    }

    _createClass(FormDemo, [{
        key: 'render',
        value: function render() {
            var demoStringValidator = '``` jsx' + '\nclass ValidatorDemo extends Component {\n    constructor() {\n        super()\n        this.state = {\n            name: \'\',\n            email: \'\',\n            password: \'\'\n        }\n        this.Validator = new Validator()\n        Validator.types.isEmptyTest = {\n            validate(value) {\n                return value !== \'\';\n            },\n            instruction: \'\u4E0D\u4E3A\u7A7A\u81EA\u5B9A\u4E49\u6821\u9A8C\'\n        };\n        this.Validator.config = {\n            name: [\'isEmpty\', \'isEmptyTest\'],\n            email: [\'isEmpty\', \'isEmptyTest\'],\n            password: [\'isEmpty\', \'isInt\', \'isEmptyTest\']\n        };\n    }\n        \n    handelClickSubmit = () => {\n        //isSubmit\u53EA\u68C0\u6D4B\n        if (this.Validator.isSubmit(this.state)) {\n            Toast.add(\'ok\')\n        } else {\n            Toast.add({\n                content: \'vali fail\',\n                status: \'fail\'\n            })\n        }\n        //\u66F4\u65B0\u6821\u9A8C\u4FE1\u606F\n        this.forceUpdate();\n    }\n        \n    render() {\n        return (\n            <div className="bor b-side p32 mtb32">\n                <div className="d-f ac mb24">\n                    <div className="w96 s0">\n                    <label htmlFor="name">Name:</label>\n                    </div>\n                    <Inputs id="name" onChange={(name) => { this.setState({ name }) }} error={() => this.Validator.formatRes(\'name\')} />\n                </div>\n                <div className="d-f ac mb24">\n                    <div className="w96 s0">\n                    <label htmlFor="email">Email:</label>\n                    </div>\n                    <Inputs id="email" onChange={(email) => { this.setState({ email }) }} error={() => this.Validator.formatRes(\'email\')} />\n                </div>\n                <div className="d-f ac mb24">\n                    <div className="w96 s0">\n                    <label htmlFor="password">Password:</label>\n                    </div>\n                    <Inputs id="password" onChange={(password) => { this.setState({ password }) }} error={() => this.Validator.formatRes(\'password\')} />\n                </div>\n                <div className="w384 ta-c">\n                    <button className="btn-n ml8 plr16 ptb8" onClick={this.handelClickSubmit}>\u6821\u9A8C\u8868\u5355</button>\n                </div>\n            </div>\n        )\n    }\n}\n        ';
            var demoStringInput = '``` html' + '\n\n<div className="d-f ac mb32">\n    <div className="w96 s0">\u8868\u5355Key\uFF1A</div>\n    <div>\n        <input\n            type="text"\n            className="input-normal w384"\n            maxLength="100"\n            placeholder="placeholder" />\n        <div className="fs12 c-fail p-a pt2">\u663E\u793A\u9519\u8BEF\u63D0\u793A</div>\n    </div>\n</div>\n\n<div className="d-f ac mb32">\n    <div>\n        <label htmlFor="" className="pb4 mb0 fs12 d-b">\u8868\u5355Key\uFF1A</label>\n            <input\n                type="text"\n                className="input-down w384"\n                maxLength="100"\n                placeholder="placeholder" />\n        <div className="fs12 c-fail p-a pt2">\u663E\u793A\u9519\u8BEF\u63D0\u793A</div>\n    </div>\n</div>\n\n<div className="d-f ac mb32">\n    <div className="input-search-down">\n        <label htmlFor="" className="pb4 mb0 fs12 d-b">\u8868\u5355Key\uFF1A</label>\n            <input\n                type="text"\n                className="input-down w384"\n                placeholder="placeholder"\n                maxLength="50" />\n            <div className="fs12 c-fail p-a pt2">\u663E\u793A\u9519\u8BEF\u63D0\u793A</div>\n            <ul className="input-option paper bor b-side fs12 p0" scrollbar=\'normal\'>\n                <li className="p4 bor-b b-side d-f jc-b">Apple</li>\n                <li className="p4 bor-b b-side d-f jc-b">Boy</li>\n                <li className="p4 bor-b b-side d-f jc-b">Cat</li>\n            </ul>\n    </div>\n</div>\n\n<div className="d-f ac mb32">\n    <div className="input-search-normal d-f ac">\n        <input\n            type="text"\n            className="input-normal w384"\n            placeholder="placeholder" />\n        <button className="fs12 btn-n ptb8 mr2 plr16">\u641C\u7D22</button>\n    </div>\n</div>\n';

            var demoStringUpload = '``` html' + '\n<div className="mb32">\n    <div className="fileup-container">\n        <div className="fileup">\n            <label htmlFor="input-file" className="fileup-in btn ptb4 plr16 c-text-w bg-theme">\u70B9\u51FB\u9009\u62E9</label>\n            <input type="file" id="input-file" />\n        </div>\n        <img src="" alt="" />\n    </div>\n</div>\n\n<div className="mb32">\n    <div className="upload-hollow">\n        <label htmlFor="input-file"></label>\n        <div className="upload-mark d-f ac jc fs24 fd-c">\n            <span>+</span>\n            <span className="fs14">\u663E\u793A\u5EFA\u8BAE\u6587\u6848</span>\n        </div>\n        <p className="fs12 c-fail p-a pt2">\u663E\u793A\u9519\u8BEF\u63D0\u793A</p>\n        <div className="fileup-container">\n            <div className="fileup">\n                <input type="file" id="input-file" name="sdkFile" />\n                {/* <span className="file-upload-tooltip tooltip-style">\u663E\u793A\u6587\u4EF6\u540D</span> */}\n            </div>\n        </div>\n        <img alt="" />\n    </div>\n</div>\n';

            var demoStringSelect = '``` html' + '\n<div className="mb32">\n    <div className="select-box-normal">\n        <div>\n            <span className="fs10 pb2 c-hint-b">Age</span>\n        </div>\n        <select name="" id="select" className="c-icon-b">\n            <option defaultValue="Hour">Hour</option>\n            <option value="Day">Day</option>\n            <option value="Month">Month</option>\n        </select>\n    </div>\n</div>\n\n<div className="mb32">\n    <div className="select-box-down">\n        <div>\n            <span className="fs10 pb2 c-hint-b">Age</span>\n        </div>\n        <select name="" id="select" className="c-icon-b">\n            <option defaultValue="Hour">Hour</option>\n            <option value="Day">Day</option>\n            <option value="Month">Month</option>\n        </select>\n    </div>\n</div>\n';

            var demoStringCheckbox = '``` html' + '\n<div className="checkbox-box-normalize mr16">\n    <input id="checkbox_normalize_title" type="checkbox" name="c_n" defaultChecked />\n    <span className="checkbox-hook ta-c">\n        <span className="checkbox-hook-in fs12 op0">\u2713</span>\n    </span>\n    <label htmlFor="checkbox_normalize_title" className="p-r z10"></label>\n</div>\n\n<div className="checkbox-box-soild mr16">\n    <input id="checkbox_box_1" type="checkbox" name="c_n" />\n    <span className="checkbox-hook ta-c">\n        <span className="checkbox-hook-in fs12 op0"></span>\n    </span>\n    <label htmlFor="checkbox_box_1" className="p-r z10"></label>\n</div>\n\n<div className="checkbox-box-papertoggle shadow mb32">\n    <input id="isSelectPackage" type="checkbox" className="d-n" />\n    <label htmlFor="isSelectPackage" className="checkbox-papertoggle d-f">\n        <div className="checkbox-imgbox s0">\n            <img src={require("../images/bg_test.jpg")} alt="" />\n        </div>\n        <div className="pt12 pl16">\n            \u63CF\u8FF0Title\n            <div className="pt4 c-hint-b fs14">\n                Breaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever\n            </div>\n        </div>\n        <div className="checkbox-mark d-f ac jc fd-c">\n            <span>\u2713</span>\n            <p>\u5DF2\u9009\u62E9</p>\n        </div>\n    </label>\n</div>\n\n<div className="checkbox-box-fontstyle d-il mr4">\n    <input\n        id="push_callback"\n        value=""\n        type="checkbox"\n        name="pushSuccessfulCallbackData"\n        className="d-n"\n        defaultChecked\n    />\n    <label\n        htmlFor="push_callback"\n        className="checkbox-fontstyle mb0"\n    >\n        <span className="fontstyle-sign">\u2713</span>\n        <span className="m0">SluckyUI\u662F\u7EC4\u4EF6\u5E93\u79CD\u5B50</span>\n    </label>\n</div>\n<div className="checkbox-box-fontstyle d-il mr4">\n    <input\n        id="push_callback2"\n        value=""\n        type="checkbox"\n        name="pushSuccessfulCallbackData"\n        className="d-n"\n    />\n    <label\n        htmlFor="push_callback2"\n        className="checkbox-fontstyle mb0"\n    >\n        <span className="fontstyle-sign">\u2713</span>\n        <span className="m0">SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6</span>\n    </label>\n</div>\n\n<div className="mb32 d-f ac">\n    <span className=\'pr8\'>SluckyUI\u662F\u7EC4\u4EF6\u5E93\u79CD\u5B50</span>\n    <div className="switch-box-normalize">\n        <label htmlFor="switch-input" className="switch-mark-click"></label>\n        <input type="checkbox" defaultValue="1" id="switch-input" />\n        <div>\n            <i className="switch-move"></i>\n            <span className="switch-horizon"></span>\n        </div>\n    </div>\n    <span className=\'pl8\'>SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6</span>\n</div>\n\n<div className="checkbox-box-imgstyle mb32">\n    <input id="c_i" type="checkbox" name="c_i" className="d-n" />\n    <label htmlFor="c_i" className="checkbox-imgstyle">\n        <img src={require(\'../images/bg_test.jpg\')} alt="" />\n        <p className="m0">Title</p>\n        <div className="checkbox-mark d-f ac jc fd-c"><span>\u2713</span></div>\n    </label>\n</div>\n\n<div className="checkbox-box-papertoggle shadow mb32">\n    <input id="isSelectPackage" type="checkbox" className="d-n" />\n    <label htmlFor="isSelectPackage" className="checkbox-papertoggle d-f">\n        <div className="checkbox-imgbox s0">\n            <img src={require("../images/bg_test.jpg")} alt="" />\n        </div>\n        <div className="pt12 pl16">\n            \u63CF\u8FF0Title\n            <div className="pt4 c-hint-b fs14">\nBreaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever\n            </div>\n        </div>\n        <div className="checkbox-mark d-f ac jc fd-c">\n            <span>\u2713</span>\n            <p>\u5DF2\u9009\u62E9</p>\n        </div>\n    </label>\n</div>\n';

            var demoStringRadio = '``` html' + '\n<div className="radio-box-normalize d-il pr16">\n    <input\n        id="isCallbackReport1"\n        type="radio"\n        name="managerCallbackReport"\n        defaultChecked\n        className="d-n" />\n    <label className="m0" htmlFor="isCallbackReport1">\n        <div className="radio-out">\n            <i className="radio-in"></i>\n        </div>\n        <span className="pl8">SluckyUI\u662F\u7EC4\u4EF6\u5E93\u79CD\u5B50</span>\n    </label>\n</div>\n\n<div className="radio-box-normalize d-il pr16">\n    <input\n        id="isCallbackReport2"\n        type="radio"\n        name="managerCallbackReport"\n        className="d-n" />\n    <label className="m0" htmlFor="isCallbackReport2">\n        <div className="radio-out">\n            <i className="radio-in"></i>\n        </div>\n        <span className="pl8">SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6</span>\n    </label>\n</div>\n';

            var demoStringTextarea = '``` html' + '\n<textarea name="" id="" cols="50" rows="6" className="textarea"></textarea>\n';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    { className: 'bor-l b-theme pl8 fs18 mt32' },
                    '\u8868\u5355\u6821\u9A8C Validator'
                ),
                _react2.default.createElement(_validatorDemo.ValidatorDemo, null),
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
                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoStringValidator }))
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'bor-l b-theme pl8 fs18' },
                    '\u8F93\u5165\u6846 Input'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'd-f ac mb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'w96 s0' },
                        '\u8868\u5355Key\uFF1A'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', {
                            type: 'text',
                            className: 'input-normal w384',
                            maxLength: '100',
                            placeholder: 'placeholder' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'fs12 c-fail p-a pt2' },
                            '\u663E\u793A\u9519\u8BEF\u63D0\u793A'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'd-f ac mb32' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: '', className: 'pb4 mb0 fs12 d-b' },
                            '\u8868\u5355Key\uFF1A'
                        ),
                        _react2.default.createElement('input', {
                            type: 'text',
                            className: 'input-down w384',
                            maxLength: '100',
                            placeholder: 'placeholder' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'fs12 c-fail p-a pt2' },
                            '\u663E\u793A\u9519\u8BEF\u63D0\u793A'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'd-f ac mb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'input-search-down' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: '', className: 'pb4 mb0 fs12 d-b' },
                            '\u8868\u5355Key\uFF1A'
                        ),
                        _react2.default.createElement('input', {
                            type: 'text',
                            className: 'input-down w384',
                            placeholder: 'placeholder',
                            maxLength: '50' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'fs12 c-fail p-a pt2' },
                            '\u663E\u793A\u9519\u8BEF\u63D0\u793A'
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'input-option paper bor b-side fs12 p0', scrollbar: 'normal' },
                            _react2.default.createElement(
                                'li',
                                { className: 'p4 bor-b b-side d-f jc-b' },
                                'Apple'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'p4 bor-b b-side d-f jc-b' },
                                'Boy'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'p4 bor-b b-side d-f jc-b' },
                                'Cat'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'd-f ac mb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'input-search-normal d-f ac' },
                        _react2.default.createElement('input', {
                            type: 'text',
                            className: 'input-normal w384',
                            placeholder: 'placeholder' }),
                        _react2.default.createElement(
                            'button',
                            { className: 'fs12 btn-n ptb8 mr2 plr16' },
                            '\u641C\u7D22'
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
                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoStringInput }))
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'bor-l b-theme pl8 fs18' },
                    '\u4E0A\u4F20 Upload'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'fileup-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'fileup' },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'input-file', className: 'fileup-in btn ptb4 plr16 c-text-w bg-theme' },
                                '\u70B9\u51FB\u9009\u62E9'
                            ),
                            _react2.default.createElement('input', { type: 'file', id: 'input-file' })
                        ),
                        _react2.default.createElement('img', { src: '', alt: '' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'upload-hollow' },
                        _react2.default.createElement('label', { htmlFor: 'input-file' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'upload-mark d-f ac jc fs24 fd-c' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '+'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'fs14' },
                                '\u663E\u793A\u5EFA\u8BAE\u6587\u6848'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'fs12 c-fail p-a pt2' },
                            '\u663E\u793A\u9519\u8BEF\u63D0\u793A'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'fileup-container' },
                            _react2.default.createElement(
                                'div',
                                { className: 'fileup' },
                                _react2.default.createElement('input', { type: 'file', id: 'input-file', name: 'sdkFile' })
                            )
                        ),
                        _react2.default.createElement('img', { alt: '' })
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
                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoStringUpload }))
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'bor-l b-theme pl8 fs18' },
                    '\u9009\u62E9\u6846 Select'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'select-box-normal' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'span',
                                { className: 'fs10 pb2 c-hint-b' },
                                'Age'
                            )
                        ),
                        _react2.default.createElement(
                            'select',
                            { name: '', id: 'select', className: 'c-icon-b' },
                            _react2.default.createElement(
                                'option',
                                { defaultValue: 'Hour' },
                                'Hour'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'Day' },
                                'Day'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'Month' },
                                'Month'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'select-box-down' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'span',
                                { className: 'fs10 pb2 c-hint-b' },
                                'Age'
                            )
                        ),
                        _react2.default.createElement(
                            'select',
                            { name: '', id: 'select', className: 'c-icon-b' },
                            _react2.default.createElement(
                                'option',
                                { defaultValue: 'Hour' },
                                'Hour'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'Day' },
                                'Day'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'Month' },
                                'Month'
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
                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoStringSelect }))
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'bor-l b-theme pl8 fs18' },
                    '\u591A\u9009\u6846 Checkbox'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'checkbox-box-normalize mr16' },
                        _react2.default.createElement('input', { id: 'checkbox_normalize_title', type: 'checkbox', name: 'c_n', defaultChecked: true }),
                        _react2.default.createElement(
                            'span',
                            { className: 'checkbox-hook ta-c' },
                            _react2.default.createElement(
                                'span',
                                { className: 'checkbox-hook-in fs12 op0' },
                                '\u2713'
                            )
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'checkbox_normalize_title', className: 'p-r z10 pl8' },
                            'SluckyUI\u662F\u7EC4\u4EF6\u5E93\u79CD\u5B50'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'checkbox-box-normalize mr16' },
                        _react2.default.createElement('input', { id: 'checkbox_normalize_title_1', type: 'checkbox', name: 'c_n' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'checkbox-hook ta-c' },
                            _react2.default.createElement(
                                'span',
                                { className: 'checkbox-hook-in fs12 op0' },
                                '\u2713'
                            )
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'checkbox_normalize_title_1', className: 'p-r z10 pl8' },
                            'SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32 d-f ac' },
                    _react2.default.createElement(
                        'div',
                        { className: 'checkbox-box-soild mr16' },
                        _react2.default.createElement('input', { id: 'checkbox_box_1', type: 'checkbox', name: 'c_n' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'checkbox-hook ta-c' },
                            _react2.default.createElement('span', { className: 'checkbox-hook-in fs12 op0' })
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'checkbox_box_1', className: 'p-r z10 pl8' },
                            'SluckyUI\u662F\u7EC4\u4EF6\u5E93\u79CD\u5B50'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'checkbox-box-soild mr16' },
                        _react2.default.createElement('input', { id: 'checkbox_box_2', type: 'checkbox', name: 'c_n', defaultChecked: true }),
                        _react2.default.createElement(
                            'span',
                            { className: 'checkbox-hook ta-c' },
                            _react2.default.createElement('span', { className: 'checkbox-hook-in fs12 op0' })
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'checkbox_box_2', className: 'p-r z10 pl8' },
                            'SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32 d-f ac' },
                    _react2.default.createElement(
                        'div',
                        { className: 'checkbox-box-fontstyle d-il mr4' },
                        _react2.default.createElement('input', {
                            id: 'push_callback',
                            value: '',
                            type: 'checkbox',
                            name: 'pushSuccessfulCallbackData',
                            className: 'd-n',
                            defaultChecked: true
                        }),
                        _react2.default.createElement(
                            'label',
                            {
                                htmlFor: 'push_callback',
                                className: 'checkbox-fontstyle mb0'
                            },
                            _react2.default.createElement(
                                'span',
                                { className: 'fontstyle-sign' },
                                '\u2713'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'm0' },
                                'SluckyUI\u662F\u7EC4\u4EF6\u5E93\u79CD\u5B50'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'checkbox-box-fontstyle d-il mr4' },
                        _react2.default.createElement('input', {
                            id: 'push_callback2',
                            value: '',
                            type: 'checkbox',
                            name: 'pushSuccessfulCallbackData',
                            className: 'd-n'
                        }),
                        _react2.default.createElement(
                            'label',
                            {
                                htmlFor: 'push_callback2',
                                className: 'checkbox-fontstyle mb0'
                            },
                            _react2.default.createElement(
                                'span',
                                { className: 'fontstyle-sign' },
                                '\u2713'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'm0' },
                                'SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32 d-f ac' },
                    _react2.default.createElement(
                        'span',
                        { className: 'pr8' },
                        'SluckyUI\u662F\u7EC4\u4EF6\u5E93\u79CD\u5B50'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'switch-box-normalize' },
                        _react2.default.createElement('label', { htmlFor: 'switch-input', className: 'switch-mark-click' }),
                        _react2.default.createElement('input', { type: 'checkbox', defaultValue: '1', id: 'switch-input' }),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement('i', { className: 'switch-move' }),
                            _react2.default.createElement('span', { className: 'switch-horizon' })
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'pl8' },
                        'SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'checkbox-box-imgstyle mb32' },
                    _react2.default.createElement('input', { id: 'c_i', type: 'checkbox', name: 'c_i', className: 'd-n' }),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'c_i', className: 'checkbox-imgstyle' },
                        _react2.default.createElement('img', { src: require('../images/bg_test.jpg'), alt: '' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'm0' },
                            'Title'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'checkbox-mark d-f ac jc fd-c' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u2713'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'checkbox-box-papertoggle shadow mb32' },
                    _react2.default.createElement('input', { id: 'isSelectPackage', type: 'checkbox', className: 'd-n' }),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'isSelectPackage', className: 'checkbox-papertoggle d-f' },
                        _react2.default.createElement(
                            'div',
                            { className: 'checkbox-imgbox s0' },
                            _react2.default.createElement('img', { src: require("../images/bg_test.jpg"), alt: '' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'pt12 pl16' },
                            '\u63CF\u8FF0Title',
                            _react2.default.createElement(
                                'div',
                                { className: 'pt4 c-hint-b fs14' },
                                'Breaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'checkbox-mark d-f ac jc fd-c' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u2713'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                '\u5DF2\u9009\u62E9'
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
                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoStringCheckbox }))
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'bor-l b-theme pl8 fs18' },
                    '\u5355\u9009\u6846 Radio'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32' },
                    _react2.default.createElement(
                        'div',
                        { className: 'radio-box-normalize d-il pr16' },
                        _react2.default.createElement('input', {
                            id: 'isCallbackReport1',
                            type: 'radio',
                            name: 'managerCallbackReport',
                            defaultChecked: true,
                            className: 'd-n' }),
                        _react2.default.createElement(
                            'label',
                            { className: 'm0', htmlFor: 'isCallbackReport1' },
                            _react2.default.createElement(
                                'div',
                                { className: 'radio-out' },
                                _react2.default.createElement('i', { className: 'radio-in' })
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'pl8' },
                                'SluckyUI\u662F\u7EC4\u4EF6\u5E93\u79CD\u5B50'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'radio-box-normalize d-il pr16' },
                        _react2.default.createElement('input', {
                            id: 'isCallbackReport2',
                            type: 'radio',
                            name: 'managerCallbackReport',
                            className: 'd-n' }),
                        _react2.default.createElement(
                            'label',
                            { className: 'm0', htmlFor: 'isCallbackReport2' },
                            _react2.default.createElement(
                                'div',
                                { className: 'radio-out' },
                                _react2.default.createElement('i', { className: 'radio-in' })
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'pl8' },
                                'SluckyUI\u7684\u8DE8\u5E73\u53F0\u6027\u8D28\u53EF\u5FEB\u901F\u52A0\u5DE5\u6210react\uFF0Cvue\uFF0Cangular\u7684\u7EC4\u4EF6'
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
                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoStringRadio }))
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'bor-l b-theme pl8 fs18' },
                    '\u5BCC\u6587\u672C\u6846 Textarea'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mb32' },
                    _react2.default.createElement('textarea', { name: '', id: '', cols: '50', rows: '6', className: 'textarea' })
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
                        _server2.default.renderToStaticMarkup(_react2.default.createElement(_reactMarkdown2.default, { source: demoStringTextarea }))
                    )
                )
            )
            // <div>
            //     <div className="d-f ac mb32">
            //         <div>
            //             <label htmlFor="" className="pb4 mb0 fs12 d-b">表单Key：</label>
            //             <input
            //                 onChange={(e) => { this.setState({ name: e.target.value }) }}
            //                 type="text"
            //                 className="input-down w384"
            //                 maxLength="100"
            //                 placeholder="placeholder" />
            //             <div className="fs12 c-fail p-a pt2">显示错误提示</div>
            //             {console.log(this.state)}
            //         </div>
            //     </div>
            // </div>
            ;
        }
    }]);

    return FormDemo;
}(_react.Component);

exports.default = FormDemo;