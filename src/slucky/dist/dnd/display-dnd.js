'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _displayBottomTool = require('./display-bottomTool');

var _displayBottomTool2 = _interopRequireDefault(_displayBottomTool);

var _displayTemplateA = require('./display-templateA');

var _displayTemplateA2 = _interopRequireDefault(_displayTemplateA);

var _displayTemplateB = require('./display-templateB');

var _displayTemplateB2 = _interopRequireDefault(_displayTemplateB);

var _containerDrop = require('./container-drop');

var _containerDrop2 = _interopRequireDefault(_containerDrop);

var _displayDragMenu = require('./display-dragMenu');

var _displayDragMenu2 = _interopRequireDefault(_displayDragMenu);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dnd = function (_Component) {
	_inherits(Dnd, _Component);

	function Dnd() {
		_classCallCheck(this, Dnd);

		var _this = _possibleConstructorReturn(this, (Dnd.__proto__ || Object.getPrototypeOf(Dnd)).call(this));

		_this.state = {
			current: 'index'
		};
		return _this;
	}

	_createClass(Dnd, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var fetchData = this.props.fetchData;

			fetchData();
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
		key: 'handlePageTypeChange',
		value: function handlePageTypeChange(data) {
			var page = data.page,
			    type = data.type;
			var updateTemType = this.props.updateTemType;

			console.log(data);
			this.setState({
				current: page
			});
			updateTemType && updateTemType(page, type);
		}
	}, {
		key: 'handleSaveConf',
		value: function handleSaveConf(pageConf) {
			var updateConf = this.props.updateConf;

			updateConf(pageConf);
		}
	}, {
		key: 'handleInitConf',
		value: function handleInitConf() {
			var initConf = this.props.initConf;

			initConf();
		}

		//加载组件

	}, {
		key: 'handleloadCom',
		value: function handleloadCom(comName, mod) {
			var updateCom = this.props.updateCom;
			var current = this.state.current;

			return comName && (0, _containerDrop2.default)(_util2.default.onLoadCom(comName), { onAction: function onAction(com) {
					return updateCom(current, com, mod);
				} });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			console.log(this.props);
			var _props = this.props,
			    pageConf = _props.pageConf,
			    updateCom = _props.updateCom;
			var current = this.state.current;
			var _pageConf$current = pageConf[current],
			    main = _pageConf$current.main,
			    dec = _pageConf$current.dec,
			    temType = _pageConf$current.temType,
			    bg = _pageConf$current.bg;
			var nav = pageConf.pub.nav;


			var comConfig = {
				nav: this.handleloadCom(nav && nav.com, 'nav'),
				main: this.handleloadCom(main && main.com, 'main'),
				dec: this.handleloadCom(dec && dec.com, 'dec')
			};
			var template = this.handleTemType(temType);

			console.log(comConfig);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_displayDragMenu2.default, null),
				template && _react2.default.createElement(template, comConfig),
				_react2.default.createElement(_displayBottomTool2.default, { onAction: function onAction(data) {
						return _this2.handlePageTypeChange(data);
					}, onSave: function onSave() {
						return _this2.handleSaveConf(pageConf);
					}, onInit: function onInit() {
						return _this2.handleInitConf();
					} })
			);
		}
	}]);

	return Dnd;
}(_react.Component);

exports.default = Dnd;