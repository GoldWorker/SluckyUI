import React, { Component } from 'react'

export class Checkbox extends Component {
    constructor() {
        super()
        this.id = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div className="checkbox-box-normalize mr16">
                <input
                    id={this.id}
                    type="checkbox"
                    name={this.props.name}
                    value={this.props.value}
                    defaultChecked={this.props.defaultChecked}
                    onChange={(e) => this.props.onAction(e)} />
                <span className="checkbox-hook ta-c">
                    <span className="checkbox-hook-in fs12 op0">✓</span>
                </span>
                <label htmlFor={this.id} className="p-r z10 pl8">{this.props.label || ''}</label>
            </div>
        )
    }
}

class Group extends Component {
    constructor() {
        super()
        this.name = Math.random().toString(36).substring(2);
        this.selected = []
    }
    onAction(e) {
        const { value, checked } = e.target
        if (checked) {
            this.selected.push(value)
        } else {
            const ind = this.selected.indexOf(value)
            ind != -1 && this.selected.splice(ind, 1)
        }
        this.props.onChange(this.selected)
    }
    render() {
        return (
            <div className={this.props.className || ''}>
                {
                    this.props.children ? null : this.props.option.map((item, index) => {
                        if (this.props.defaultValue == item.value) {
                            this.selected.push(item.value)
                        }
                        return <Checkbox
                            key={index}
                            defaultChecked={this.props.defaultValue == item.value}
                            name={this.name}
                            label={item.label}
                            value={item.value}
                            onAction={(e) => this.onAction(e)} />
                    })
                }
            </div>
        )
    }
}

Checkbox.Group = Group
