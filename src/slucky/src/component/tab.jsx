import React, { Component } from 'react'

export class Tab extends Component {
    constructor() {
        super()
        this.cid = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div className="tab-item">
                <input type="radio" id={this.cid} name={this.props.name} defaultChecked={this.props.defaultChecked || false} />
                <label htmlFor={this.cid}>
                    <div className="tab-container">
                        <div className="tab-toggle">
                            <div className="tab-decoration">
                                <span>{this.props.title || ''}</span>
                            </div>
                        </div>
                    </div>
                </label>
                <div className="tab-content w-full">
                    <div>{this.props.children}</div>
                </div>
            </div>
        )
    }
}

class Group extends Component {
    constructor() {
        super()
        this.name = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div>
                <div className="tab-box-lr w-full">
                    <div className="tab-contrl">
                        {
                            React.Children.map(this.props.children,
                                (child) => React.cloneElement(child, { name: this.name, currentTab: this.props.currentTab || '' }))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

Tab.Group = Group


