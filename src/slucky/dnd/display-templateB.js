import React, { Component } from 'react'

export default class TemplateA extends Component {
    render() {
        const { nav, main } = this.props
        return (
            <div>
                {nav && React.createElement(nav)}
                {main && React.createElement(main)}
            </div>
        )
    }
}
