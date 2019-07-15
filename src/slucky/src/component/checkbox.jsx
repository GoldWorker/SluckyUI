import React, { Component } from 'react'

export class Checkbox extends Component {
    constructor() {
        super()
        this.id = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div className="checkbox-box-normalize mr16 mb8">
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


export class CheckboxFontIn extends Component {
    constructor() {
        super()
        this.id = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div className="checkbox-box-fontstyle d-il mr16 mb8">
                <input
                    id={this.id}
                    type="checkbox"
                    className="d-n"
                    name={this.props.name}
                    value={this.props.value}
                    defaultChecked={this.props.defaultChecked}
                    onChange={(e) => this.props.onAction(e)} />
                <label
                    htmlFor={this.id}
                    className="checkbox-fontstyle mb0"
                >
                    {/* <span className="fontstyle-sign">✓</span> */}
                    <span className="m0">{this.props.label || ''}</span>
                </label>
            </div>
        )
    }
}

class GroupFontIn extends Component {
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

                        return <CheckboxFontIn
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
Checkbox.GroupFontIn = GroupFontIn
