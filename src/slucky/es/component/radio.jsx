import React, { Component } from 'react';

export default class Radio extends Component {
    constructor() {
        super();
        this.id = Math.random().toString(36).substring(2);
    }

    render() {
        return (
            <div className="radio-box-normalize d-il pr16">
                {
                    this.props.checked == undefined ? <input
                        id={this.id}
                        name={this.props.name}
                        value={this.props.value}
                        defaultChecked={this.props.defaultChecked}
                        onChange={(e) => this.props.onAction(e)}
                        type="radio"
                        className="d-n" /> : <input
                            id={this.id}
                            name={this.props.name}
                            value={this.props.value}
                            checked={this.props.checked}
                            onChange={(e) => this.props.onAction(e)}
                            type="radio"
                            className="d-n" />
                }
                <label className="m0" htmlFor={this.id}>
                    <div className="radio-out">
                        <i className="radio-in"></i>
                    </div>
                    <span className="pl8">{this.props.label || ''}</span>
                </label>
            </div>
        );
    }
}
export class RadioBorder extends Component {
    constructor() {
        super();
        this.id = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div className="trigger-box-border d-il mr16 mb8">
                {
                    this.props.checked == undefined ? <input
                        trigger="core"
                        id={this.id}
                        name={this.props.name}
                        value={this.props.value}
                        defaultChecked={this.props.defaultChecked}
                        onChange={(e) => this.props.onAction(e)}
                        type="radio"
                        className="d-n" /> : <input
                            trigger="core"
                            id={this.id}
                            name={this.props.name}
                            value={this.props.value}
                            checked={this.props.checked}
                            onChange={(e) => this.props.onAction(e)}
                            type="radio"
                            className="d-n" />
                }
                <label
                    htmlFor={this.id}
                    className="trigger-border mb0"
                >
                    {/* <span className="fontstyle-sign">✓</span> */}
                    <span className="m0">{this.props.label || ''}</span>
                </label>
            </div>
        );
    }
}

const GroupContainer = (component) => class Group extends Component {
    constructor() {
        super();
        this.name = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div className={this.props.className || ''}>
                {
                    this.props.children ? null : this.props.option.map((item, index) => {
                        return React.createElement(component, {
                            key: index,
                            defaultChecked: this.props.defaultValue == item.value,
                            checked: this.props.value ? this.props.value == item.value : undefined,
                            name: this.name,
                            label: item.label,
                            value: item.value,
                            onAction: (e) => this.props.onChange(e)
                        });
                    })
                }
            </div>
        );
    }
};

Radio.Group = GroupContainer(Radio);
Radio.GroupBorder = GroupContainer(RadioBorder);

// Demo
// class Group extends Component {
//     constructor() {
//         super()
//         this.name = Math.random().toString(36).substring(2);
//     }
//     render() {
//         return (
//             <div className={this.props.className || ''}>
//                 {
//                     this.props.children ? null : this.props.option.map((item, index) => {
//                         return <Radio
//                             key={index}
//                             defaultChecked={this.props.defaultValue == item.value}
//                             name={this.name}
//                             label={item.label}
//                             value={item.value}
//                             onAction={(e) => this.props.onChange(e)} />
//                     })
//                 }
//             </div>
//         )
//     }
// }
