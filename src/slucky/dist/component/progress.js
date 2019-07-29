"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProgressWave = exports.ProgressPie = exports.ProgressCircle = exports.Progress = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Progress = exports.Progress = function (_Component) {
    _inherits(Progress, _Component);

    function Progress() {
        _classCallCheck(this, Progress);

        return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
    }

    _createClass(Progress, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "d-il" },
                _react2.default.createElement("progress", { max: "100", value: this.props.percent, className: "progress-loading bg-warn", style: { width: this.props.width || 128 + 'px' } }),
                _react2.default.createElement(
                    "span",
                    { className: "d-il ml12" },
                    this.props.percent || 0,
                    "%"
                )
            );
        }
    }]);

    return Progress;
}(_react.Component);

var ProgressCircle = exports.ProgressCircle = function (_Component2) {
    _inherits(ProgressCircle, _Component2);

    function ProgressCircle() {
        _classCallCheck(this, ProgressCircle);

        return _possibleConstructorReturn(this, (ProgressCircle.__proto__ || Object.getPrototypeOf(ProgressCircle)).apply(this, arguments));
    }

    _createClass(ProgressCircle, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "progress-pie", style: {
                        "--percent": this.props.percent || 0,
                        width: this.props.radius || 64 + 'px',
                        height: this.props.radius || 64 + 'px'
                    } },
                _react2.default.createElement(
                    "div",
                    { className: "pip-content d-f ac jc", style: this.props.isPipe ? { backgroundColor: "transparent" } : {} },
                    this.props.percent || 0,
                    "%"
                ),
                _react2.default.createElement("div", { className: "pie-left" }),
                _react2.default.createElement("div", { className: "pie-right" })
            );
        }
    }]);

    return ProgressCircle;
}(_react.Component);

var ProgressPie = exports.ProgressPie = function (_Component3) {
    _inherits(ProgressPie, _Component3);

    function ProgressPie() {
        _classCallCheck(this, ProgressPie);

        return _possibleConstructorReturn(this, (ProgressPie.__proto__ || Object.getPrototypeOf(ProgressPie)).apply(this, arguments));
    }

    _createClass(ProgressPie, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(ProgressCircle, { isPipe: true, radius: this.props.radius, percent: this.props.percent });
        }
    }]);

    return ProgressPie;
}(_react.Component);

var ProgressWave = exports.ProgressWave = function (_Component4) {
    _inherits(ProgressWave, _Component4);

    function ProgressWave() {
        _classCallCheck(this, ProgressWave);

        return _possibleConstructorReturn(this, (ProgressWave.__proto__ || Object.getPrototypeOf(ProgressWave)).apply(this, arguments));
    }

    _createClass(ProgressWave, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "wave-box" },
                _react2.default.createElement(
                    "div",
                    { className: "wave", style: { "--radius": this.props.radius || 96 + "px", "--percent": 100 + (this.props.percent || 0) + "%" } },
                    _react2.default.createElement(
                        "div",
                        { className: "pip-content d-f ac jc" },
                        this.props.percent || 0,
                        "%"
                    )
                )
            );
        }
    }]);

    return ProgressWave;
}(_react.Component);