'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Steps = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require("babel-polyfill");
var Steps = exports.Steps = function (_Component) {
    _inherits(Steps, _Component);

    function Steps(props) {
        _classCallCheck(this, Steps);

        var _this = _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this, props));

        _this.state = {
            currentStep: _this.props.currentStep || 0
        };
        return _this;
    }
    // 为步骤灵活变化准备


    _createClass(Steps, [{
        key: 'handleClickEvent',
        value: function handleClickEvent(step, index) {
            // this.onAction(step, index, this.state.currentStep);
        }
    }, {
        key: 'handelPreStep',
        value: function handelPreStep() {
            if (this.state.currentStep - 1 < 0) {
                console.log('start');
                // return this.onAction(this.props.stepset[0], this.state.currentStep, false);
            } else {
                console.log('pre');
                this.setState({
                    currentStep: this.state.currentStep - 1
                });
                // return this.onAction(this.props.stepset[this.state.currentStep], this.state.currentStep, false);
            }
        }
    }, {
        key: 'handelNextStep',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var len, AllowNext;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                len = this.props.stepset.length;

                                if (!this.props.stepset[this.state.currentStep].handleNext) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 4;
                                return this.props.stepset[this.state.currentStep].handleNext(this.props.stepset[this.state.currentStep], this.state.currentStep);

                            case 4:
                                AllowNext = _context.sent;

                                console.log('AllowNext', AllowNext);
                                if (AllowNext) {
                                    if (this.state.currentStep + 1 >= len) {
                                        console.log('end');
                                        // return this.onAction(this.props.stepset[this.state.currentStep], this.state.currentStep, true);
                                    } else {
                                        this.setState({
                                            currentStep: this.state.currentStep + 1
                                        });
                                        console.log('next');
                                        // return this.onAction(this.props.stepset[this.state.currentStep], this.state.currentStep, true);
                                    }
                                } else {
                                    console.log('阻塞', AllowNext);
                                }

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function handelNextStep() {
                return _ref.apply(this, arguments);
            }

            return handelNextStep;
        }()

        // async handelNextStep() {
        //     await console.log('await')
        // }

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: '' },
                    this.props.stepset.map(function (step, index) {
                        var _React$createElement;

                        return _react2.default.createElement(
                            'div',
                            { className: 'd-il step-title', key: index },
                            _react2.default.createElement(
                                'span',
                                (_React$createElement = { className: 'tag-text ptb2 plr4' }, _defineProperty(_React$createElement, 'className', [index <= _this2.state.currentStep ? 'c-theme' : '', index > _this2.state.currentStep ? 'c-hint-b' : ''].join(' ')), _defineProperty(_React$createElement, 'onClick', function onClick() {
                                    return _this2.handleClickEvent(step, index);
                                }), _React$createElement),
                                step.title
                            )
                        );
                    }),
                    this.props.stepset.map(function (step, index) {
                        return _react2.default.createElement(
                            'div',
                            { key: index, className: 'p-r' },
                            _react2.default.createElement(
                                'div',
                                { className: 'step-content p-a v-h', style: index == _this2.state.currentStep ? { position: "relative", visibility: "visible" } : {} },
                                _this2.props.isCacheData ? step.content && step.content(step.store || {}) : index == _this2.state.currentStep ? step.content && step.content(step.store || {}) : null
                            )
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ta-c pt16' },
                    this.state.currentStep != 0 ? _react2.default.createElement(
                        'button',
                        { className: 'btn-w bor b-side ptb6 plr16 mr16', onClick: function onClick() {
                                return _this2.handelPreStep();
                            } },
                        '\u4E0A\u4E00\u6B65'
                    ) : null,
                    _react2.default.createElement(
                        'button',
                        { className: 'btn-n ptb6 plr16', onClick: function onClick() {
                                return _this2.handelNextStep();
                            } },
                        this.state.currentStep + 1 == this.props.stepset.length ? '确认' : '下一步'
                    )
                )
            );
        }
    }]);

    return Steps;
}(_react.Component);