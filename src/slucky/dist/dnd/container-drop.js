'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerDrop = function ContainerDrop(WrappedComponent, data) {
    return function (_Component) {
        _inherits(ContainerDrop, _Component);

        function ContainerDrop() {
            _classCallCheck(this, ContainerDrop);

            var _this = _possibleConstructorReturn(this, (ContainerDrop.__proto__ || Object.getPrototypeOf(ContainerDrop)).call(this));

            _this.state = {
                com: WrappedComponent
            };
            return _this;
        }

        _createClass(ContainerDrop, [{
            key: 'handleDragOver',
            value: function handleDragOver(ev) {
                //这保证 handleDroZoneDrop可以被调用
                ev.preventDefault();
            }
        }, {
            key: 'handleDragEnter',
            value: function handleDragEnter(ev) {
                // console.log(ev);
                ev.dataTransfer.dropEffect = "copy";
            }
        }, {
            key: 'handleDragLeave',
            value: function handleDragLeave(ev) {
                // console.log(ev);
            }
        }, {
            key: 'handleDrop',
            value: function handleDrop(ev) {
                var _this2 = this;

                // console.log(ev.target);
                console.log(ev.dataTransfer.getData('name'));
                var comName = ev.dataTransfer.getData('name') || '';

                _util2.default.onLoadCom(comName, function (com) {
                    _this2.setState({
                        com: com
                    });
                });

                data.onAction && data.onAction(comName);
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    {
                        className: 'bor b-yellow-d',
                        onDragOver: this.handleDragOver.bind(this),
                        onDragEnter: this.handleDragEnter.bind(this),
                        onDragLeave: this.handleDragLeave.bind(this),
                        onDrop: this.handleDrop.bind(this) },
                    console.log('STATE_COM', WrappedComponent),
                    this.state.com && _react2.default.createElement(this.state.com, { data: data })
                );
            }
        }]);

        return ContainerDrop;
    }(_react.Component);
};

exports.default = ContainerDrop;