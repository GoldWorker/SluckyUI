import React, { Component } from 'react'
import TemplateA from './display-templateA'
import TemplateB from './display-templateB'
import util from './util'

export default class RenderCom extends Component {
    componentDidMount() {
        const { getConf } = this.props
        getConf()
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
    handleloadCom(comName) {
        return comName && util.onLoadCom(comName)
    }

    render() {
        const { pageConf, currentPage } = this.props
        const { temType, main, dec } = pageConf[currentPage]
        const { nav } = pageConf.pub
        const template = this.handleTemType(temType);

        const comConfig = {
            nav: this.handleloadCom(nav && nav.com, 'nav'),
            main: this.handleloadCom(main && main.com, 'main'),
            dec: this.handleloadCom(dec && dec.com, 'dec')
        }

        return (
            <div>
                {template && React.createElement(template, comConfig)}
            </div>
        )
    }
}
