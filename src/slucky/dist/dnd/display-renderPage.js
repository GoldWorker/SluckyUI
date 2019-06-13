'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _displayTemplateA = require('./display-templateA');

var _displayTemplateA2 = _interopRequireDefault(_displayTemplateA);

var _displayTemplateB = require('./display-templateB');

var _displayTemplateB2 = _interopRequireDefault(_displayTemplateB);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderCom = function (_Component) {
    _inherits(RenderCom, _Component);

    function RenderCom() {
        _classCallCheck(this, RenderCom);

        return _possibleConstructorReturn(this, (RenderCom.__proto__ || Object.getPrototypeOf(RenderCom)).apply(this, arguments));
    }

    _createClass(RenderCom, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var getConf = this.props.getConf;

            getConf();
        }
    }, {
        key: 'handleTemType',
        value: function handleTemType(temType) {
            switch (temType) {
                case 'A':
                    return _displayTemplateA2.default;
                case 'B':
                    return _displayTemplateB2.default;
                default:
                    return _displayTemplateA2.default;
            }
        }
    }, {
        key: 'handleloadCom',
        value: function handleloadCom(comName) {
            return comName && _util2.default.onLoadCom(comName);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                pageConf = _props.pageConf,
                currentPage = _props.currentPage;
            var _pageConf$currentPage = pageConf[currentPage],
                temType = _pageConf$currentPage.temType,
                main = _pageConf$currentPage.main,
                dec = _pageConf$currentPage.dec;
            var nav = pageConf.pub.nav;

            var template = this.handleTemType(temType);

            var comConfig = {
                nav: this.handleloadCom(nav && nav.com, 'nav'),
                main: this.handleloadCom(main && main.com, 'main'),
                dec: this.handleloadCom(dec && dec.com, 'dec')
            };

            return _react2.default.createElement(
                'div',
                null,
                template && _react2.default.createElement(template, comConfig)
            );
        }
    }]);

    return RenderCom;
}(_react.Component);

exports.default = RenderCom;