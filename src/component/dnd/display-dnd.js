import React, { Component } from 'react'
import BottomTool from './display-bottomTool'
import TemplateA from './display-templateA'
import TemplateB from './display-templateB'
import ContainerDrop from './container-drop'
import DargMenu from './display-dragMenu'
import util from './util'

export default class Dnd extends Component {
	constructor() {
		super()
		this.state = {
			current: 'index'
		}
	}
	componentDidMount() {
		const { fetchData } = this.props;
		fetchData()
	}
	handleTemType(temType) {
		switch (temType) {
			case 'A':
				return TemplateA
			case 'B':
				return TemplateB
			default:
				return TemplateA
		}
	}
	handlePageTypeChange(data) {
		const { page, type } = data;
		const { updateTemType } = this.props;
		console.log(data);
		this.setState({
			current: page
		})
		updateTemType && updateTemType(page, type)
	}

	handleSaveConf(pageConf) {
		const { updateConf } = this.props
		updateConf(pageConf)
	}

	handleInitConf() {
		const { initConf } = this.props
		initConf()
	}

	//加载组件
	handleloadCom(comName, mod) {
		const { updateCom } = this.props;
		const { current } = this.state;
		return comName && ContainerDrop(util.onLoadCom(comName), { onAction: (com) => updateCom(current, com, mod) });
	}

	render() {
		console.log(this.props);
		const { pageConf, updateCom } = this.props;
		const { current } = this.state;
		const { main, dec, temType, bg } = pageConf[current];
		const { nav } = pageConf.pub

		const comConfig = {
			nav: this.handleloadCom(nav && nav.com, 'nav'),
			main: this.handleloadCom(main && main.com, 'main'),
			dec: this.handleloadCom(dec && dec.com, 'dec')
		}
		const template = this.handleTemType(temType);

		console.log(comConfig);
		return (
			<div>
				<DargMenu />
				{/* 选择模板&模板配置 */}
				{template && React.createElement(template, comConfig)}
				<BottomTool onAction={(data) => this.handlePageTypeChange(data)} onSave={() => this.handleSaveConf(pageConf)} onInit={() => this.handleInitConf()} />
			</div>
		)
	}
}
