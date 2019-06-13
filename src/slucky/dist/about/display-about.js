'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About(props) {
	var content = '\n### \u672C\u7AD9\u4EE5\u5B66\u4E60\u4EA4\u6D41\u4E3A\u4E3B\u8981\u76EE\u7684\n\n- \u524D\u7AEF\u7531react\u6280\u672F\u6808\u642D\u5EFA\n- \u503C\u5F97\u4E00\u63D0\u7684\u662F\u6837\u5F0F\u5E93\u7528\u7684\u662F\u7531\u5E73\u65F6\u7ECF\u9A8C\u79EF\u7D2F\u603B\u7ED3\u800C\u6210\u7684\u201CSlucky\u201D\u5E93\uFF0C\u8BE5\u6837\u5F0F\u5E93\u6781\u529B\u907F\u514Djs\u7684\u8026\u5408\uFF0C\u76EE\u524D\u4E3A\u6B62\u7684\u6837\u5F0F\u5168\u7531CSS\u5B8C\u6210\uFF0CCSS\u6240\u8C03\u5EA6\u7684\u786C\u4EF6\u52A0\u901F\u5B9E\u5728\u662Fexcellent\n- \u540E\u53F0\u5219\u7CFBngnix+nodejs\u73AF\u5883\n- \u6587\u7AE0\u4E3B\u8981\u5185\u5BB9\u4E3A\u5E73\u65F6\u5B66\u4E60\u7684\u5FC3\u5F97\u4F53\u4F1A\n';
	return _react2.default.createElement(
		_reactAddonsCssTransitionGroup2.default,
		{
			transitionName: 'example',
			transitionAppear: true,
			transitionAppearTimeout: 500,
			transitionEnter: false,
			transitionLeave: false },
		_react2.default.createElement(
			'div',
			{ className: 'about-box' },
			_react2.default.createElement(
				'section',
				{ className: 't3d-container' },
				_react2.default.createElement('input', { type: 'radio', id: 'card_front', name: 'card-ctrl', defaultChecked: true }),
				_react2.default.createElement(
					'div',
					{ className: 'card-select-box' },
					_react2.default.createElement(
						'label',
						{ className: 'card-select', htmlFor: 'card_front' },
						'Email'
					),
					_react2.default.createElement(
						'label',
						{ className: 'card-select', htmlFor: 'card_back' },
						'Phone'
					)
				),
				_react2.default.createElement('input', { type: 'radio', id: 'card_back', name: 'card-ctrl', className: 'card-ischecked' }),
				_react2.default.createElement(
					'div',
					{ id: 'card' },
					_react2.default.createElement(
						'figure',
						{ className: 'front', id: 'front' },
						_react2.default.createElement(
							'div',
							{ className: 'checkbox-box-papertoggle w288 shadow' },
							_react2.default.createElement('input', { id: 'isSelectPackage', type: 'checkbox', className: 'd-n' }),
							_react2.default.createElement(
								'label',
								{ htmlFor: 'isSelectPackage', className: 'checkbox-papertoggle flex-box' },
								_react2.default.createElement(
									'div',
									{ className: 'checkbox-imgbox' },
									_react2.default.createElement('img', { src: require("../../images/bg_test.jpg"), alt: '' })
								),
								_react2.default.createElement(
									'div',
									{ className: 'flex1 lh16 pl16' },
									_react2.default.createElement(
										'p',
										{ className: 'bor-b b-divider-b pb8 mb8' },
										_react2.default.createElement(
											'span',
											null,
											'\u5B66\u4E60\u4EA4\u6D41'
										),
										_react2.default.createElement(
											'svg',
											{ className: 'icon f-r' },
											_react2.default.createElement('use', { xlinkHref: '#icon-arrow-right' })
										)
									),
									_react2.default.createElement(
										'span',
										{ className: 'c-hint-b fs12' },
										'695508580@qq.com'
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'checkbox-mark' },
									_react2.default.createElement(
										'span',
										null,
										'\u2713'
									),
									_react2.default.createElement(
										'p',
										null,
										'nice'
									)
								)
							)
						)
					),
					_react2.default.createElement(
						'figure',
						{ className: 'back', id: 'back' },
						_react2.default.createElement(
							'div',
							{ className: 'checkbox-box-papertoggle w288 shadow' },
							_react2.default.createElement('input', { id: 'isSelectPackage2', type: 'checkbox', className: 'd-n' }),
							_react2.default.createElement(
								'label',
								{ htmlFor: 'isSelectPackage2', className: 'checkbox-papertoggle flex-box' },
								_react2.default.createElement(
									'div',
									{ className: 'checkbox-imgbox' },
									_react2.default.createElement('img', { src: require("../../images/bg_test.jpg"), alt: '' })
								),
								_react2.default.createElement(
									'div',
									{ className: 'flex1 lh16 pl16' },
									_react2.default.createElement(
										'p',
										{ className: 'bor-b b-divider-b pb8 mb8' },
										_react2.default.createElement(
											'span',
											null,
											'\u975E\u8BDA\u52FF\u6270'
										),
										_react2.default.createElement(
											'svg',
											{ className: 'icon f-r' },
											_react2.default.createElement('use', { xlinkHref: '#icon-arrow-right' })
										)
									),
									_react2.default.createElement(
										'span',
										{ className: 'c-hint-b fs12' },
										'13160677675'
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'checkbox-mark' },
									_react2.default.createElement(
										'span',
										null,
										'\u2713'
									),
									_react2.default.createElement(
										'p',
										null,
										'nice'
									)
								)
							)
						)
					)
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'paper d-b p16 m16' },
				_react2.default.createElement(_reactMarkdown2.default, { source: content })
			)
		)
	);
};

exports.default = About;