'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Steps = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require("babel-polyfill");
var Steps = exports.Steps = function (_Component) {
    _inherits(Steps, _Component);

    function Steps() {
        _classCallCheck(this, Steps);

        var _this = _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this));

        _this.currentStep = 0;
        return _this;
    }
    // 为步骤灵活变化准备


    _createClass(Steps, [{
        key: 'handleClickEvent',
        value: function handleClickEvent(step, index) {
            // this.onAction(step, index, this.currentStep);
        }
    }, {
        key: 'handelPreStep',
        value: function handelPreStep() {
            if (this.currentStep - 1 < 0) {
                return this.onAction(this.props.stepset[0], this.currentStep, false);
            } else {
                this.currentStep--;
                return this.onAction(this.props.stepset[this.currentStep], this.currentStep, false);
            }
        }

        // async handelNextStep() {
        //     const len = this.props.stepset.length;
        //     if (this.props.stepset[this.currentStep].handleNext) {
        //         const AllowNext = await this.props.stepset[this.currentStep].handleNext(this.props.stepset[this.currentStep], this.currentStep);
        //         console.log('AllowNext', AllowNext);
        //         if (AllowNext) {
        //             if (this.currentStep + 1 >= len) {
        //                 return this.onAction(this.props.stepset[this.currentStep], this.currentStep, true);
        //             } else {
        //                 this.currentStep++;
        //                 return this.onAction(this.props.stepset[this.currentStep], this.currentStep, true);
        //             }
        //         } else {
        //             console.log('阻塞', AllowNext);
        //         }
        //     }
        // }

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null);
        }
    }]);

    return Steps;
}(_react.Component);