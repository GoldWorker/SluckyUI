'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Search = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = exports.Search = function (_Component) {
    _inherits(Search, _Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = {
            value: _this.props.value || '',
            selectedValue: '',
            selectedLabel: _this.props.defaultValue || '',
            data: _this.props.option || [],
            dataCache: _this.props.option || []
        };
        _this.id = Math.random().toString(36).substring(2);
        return _this;
    }

    _createClass(Search, [{
        key: 'handleChange',
        value: function handleChange(value) {
            var _this2 = this;

            var dataCache = [];
            for (var i = 0; i < this.state.data.length; i++) {
                var item = this.state.data[i];
                if (item.indexOf(value) != -1) {
                    dataCache.push(item);
                }
            }

            this.setState({
                value: value,
                dataCache: dataCache
            }, function () {
                _this2.props.onChange && _this2.props.onChange(value);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'select-down-modern' },
                this.props.labelName ? _react2.default.createElement(
                    'label',
                    { htmlFor: this.id, className: 'pb4 mb0 fs12 d-b' },
                    this.props.labelName
                ) : null,
                _react2.default.createElement(
                    'div',
                    { className: 'p-r' },
                    _react2.default.createElement('input', {

                        id: this.id,
                        type: 'search',
                        className: 'input-normal',
                        style: { width: this.props.width || 384 + 'px', paddingLeft: 32 + 'px', paddingRight: 32 + 'px' },
                        placeholder: this.props.placeholder || '',
                        onChange: function onChange(e) {
                            return _this3.handleChange(e.target.value);
                        },
                        value: this.state.value })
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'select-option paper', scrollbar: 'normal' },
                    this.state.dataCache.map(function (item, index) {
                        return _react2.default.createElement(
                            'li',
                            { onMouseDown: function onMouseDown() {
                                    return _this3.handleChange(item);
                                }, key: index },
                            item
                        );
                    })
                )
            );
        }
    }]);

    return Search;
}(_react.Component);