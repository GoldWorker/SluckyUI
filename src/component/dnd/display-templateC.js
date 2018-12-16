import React, { Component } from 'react'

export default class TemplateA extends Component {
    render() {
        const { nav, main, dec } = this.props
        return (
            <div>
                {nav && React.createElement(nav)}
                <div className="flex-box">
                    <div className="flex1">
                        {dec && React.createElement(dec)}
                    </div>
                    <div className="flex2">
                        {main && React.createElement(main)}
                    </div>
                    <div className="flex1">
                        {dec && React.createElement(dec)}
                    </div>
                </div>
            </div>
        )
    }
}
