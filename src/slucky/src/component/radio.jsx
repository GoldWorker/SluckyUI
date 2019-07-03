import React, { Component } from 'react'

export class Radio extends Component {
    constructor() {
        super()
        this.id = Math.random().toString(36).substring(2);
    }

    render() {
        return (
            <div className="radio-box-normalize d-il pr16">
                <input
                    id={this.id}
                    name={this.props.name}
                    value={this.props.value}
                    defaultChecked={this.props.defaultChecked}
                    onChange={(e) => this.props.onAction(e)}
                    type="radio"
                    className="d-n" />
                <label className="m0" htmlFor={this.id}>
                    <div className="radio-out">
                        <i className="radio-in"></i>
                    </div>
                    <span className="pl8">{this.props.label || ''}</span>
                </label>
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
            <div className={this.props.className || ''}>
                {
                    this.props.children ? null : this.props.option.map((item, index) => {
                        return <Radio
                            key={index}
                            defaultChecked={this.props.defaultValue == item.value}
                            name={this.name}
                            label={item.label}
                            value={item.value}
                            onAction={(e) => this.props.onChange(e)} />
                    })
                }
            </div>
        )
    }
}

Radio.Group = Group


