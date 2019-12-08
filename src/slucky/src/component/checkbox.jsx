import React, { Component } from 'react';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.id = Math.random().toString(36).substring(2);
    }

    handleChange(e) {
        this.props.onChange(e);
    }

    render() {
        return (
            <div className="checkbox-box-normalize mr16 d-il" style={{ display: this.props.display || '' }}>
                {
                    this.props.checked == undefined ? <input
                        id={this.id}
                        trigger='core'
                        type="checkbox"
                        disabled={this.props.disabled}
                        className=""
                        name={this.props.name || ''}
                        value={this.props.value}
                        defaultChecked={this.props.defaultChecked || false}
                        onChange={(e) => this.handleChange(e)}
                    /> : <input
                            id={this.id}
                            trigger='core'
                            type="checkbox"
                            disabled={this.props.disabled}
                            className=""
                            name={this.props.name}
                            value={this.props.value}
                            checked={this.props.checked || false}
                            onChange={(e) => this.handleChange(e)}
                        />
                }
                <span className="checkbox-hook ta-c">
                    <span className="checkbox-hook-in fs12 op0">✓</span>
                </span>
                <label htmlFor={this.id} className="p-r z10 pl8">{this.props.label || ''}</label>
            </div>
        );
    }
}
export class CheckboxFontIn extends Component {
    constructor(props) {
        super(props);
        this.id = Math.random().toString(36).substring(2);
    }

    handleChange(e) {
        this.props.onChange(e);
    }

    render() {
        return (
            <div className="checkbox-box-fontstyle d-il mr16 mb8">
                {
                    this.props.checked == undefined ? <input
                        id={this.id}
                        trigger='core'
                        type="checkbox"
                        disabled={this.props.disabled}
                        className="d-n"
                        name={this.props.name}
                        value={this.props.value}
                        defaultChecked={this.props.defaultChecked || false}
                        onChange={(e) => this.handleChange(e)}
                    /> : <input
                            id={this.id}
                            trigger='core'
                            type="checkbox"
                            disabled={this.props.disabled}
                            className="d-n"
                            name={this.props.name}
                            value={this.props.value}
                            checked={this.props.checked || false}
                            onChange={(e) => this.handleChange(e)}
                        />
                }
                <label
                    htmlFor={this.id}
                    className="checkbox-fontstyle mb0">
                    <span className="m0">{this.props.label || ''}</span>
                </label>
            </div>
        );
    }
}

export class CheckboxBorder extends Component {
    constructor(props) {
        super(props);
        this.id = Math.random().toString(36).substring(2);
    }

    handleChange(e) {
        this.props.onChange(e);
    }

    render() {
        return (
            <div className="trigger-box-border d-il mr16 mb8">
                {
                    this.props.checked == undefined ? <input
                        id={this.id}
                        trigger='core'
                        type="checkbox"
                        disabled={this.props.disabled}
                        className="d-n"
                        name={this.props.name}
                        value={this.props.value}
                        defaultChecked={this.props.defaultChecked || false}
                        onChange={(e) => this.handleChange(e)}
                    /> : <input
                            id={this.id}
                            trigger='core'
                            type="checkbox"
                            disabled={this.props.disabled}
                            className="d-n"
                            name={this.props.name}
                            value={this.props.value}
                            checked={this.props.checked || false}
                            onChange={(e) => this.handleChange(e)}
                        />
                }
                <label
                    htmlFor={this.id}
                    className="trigger-border mb0"
                >
                    <span className="m0">{this.props.label || ''}</span>
                </label>
            </div>
        );
    }
}

const GroupContainer = (component) => class Group extends Component {
    constructor(props) {
        super(props);
        this.name = Math.random().toString(36).substring(2);
        this.state = {
            option: this.props.option,
            values: this.props.values,
            selected: this.props.defaultValue ? [...this.props.defaultValue] : []
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            option: nextProps.option,
            values: nextProps.values
        });
    }
    onChange(e) {
        const { value, checked } = e.target;
        const { values, selected } = this.state;
        let res = [];
        if (values) {
            //受控
            if (checked) {
                res = [...values, value];
            } else {
                const index = values.indexOf(value);
                if (index != -1) {
                    values.splice(index, 1);
                    res = [...values];
                }
            }
            this.setState({
                values: res
            }, () => this.props.onChange(this.state.values));
        } else {
            //非受控，values为undefined
            if (checked) {
                res = [...selected, value];
            } else {
                const index = selected.indexOf(value);
                if (index != -1) {
                    selected.splice(index, 1);
                    res = [...selected];
                }
            }
            this.setState({
                selected: res
            }, () => this.props.onChange(this.state.selected));
        }
    }
    isInArray(arr, value) {
        if (Array.isArray(arr)) {
            return arr.indexOf(value) != -1;
        }
        return undefined;
    }
    render() {
        return (
            <div className={this.props.className || ''}>
                {
                    this.props.children ? null : this.state.option.map((item, index) => {
                        return React.createElement(component, {
                            key: index,
                            defaultChecked: this.isInArray(this.props.defaultValue || [], item.value),
                            checked: this.isInArray(this.state.values, item.value),
                            name: this.name,
                            label: item.label,
                            value: item.value,
                            disabled: item.disabled || this.props.disabled,
                            display: item.display,
                            onChange: (e) => this.onChange(e)
                        });
                    })
                }
            </div>
        );
    }
};

Checkbox.Group = GroupContainer(Checkbox);
Checkbox.GroupFontIn = GroupContainer(CheckboxFontIn);
Checkbox.GroupBorder = GroupContainer(CheckboxBorder);

// Demo
// class Group extends Component {
//     constructor() {
//         super()
//         this.name = Math.random().toString(36).substring(2);
//         this.selected = []
//     }
//     onChange(e) {
//         const { value, checked } = e.target
//         if (checked) {
//             this.selected.push(value)
//         } else {
//             const ind = this.selected.indexOf(value)
//             ind != -1 && this.selected.splice(ind, 1)
//         }
//         this.props.onChange(this.selected)
//     }
//     render() {
//         return (
//             <div className={this.props.className || ''}>
//                 {
//                     this.props.children ? null : this.props.option.map((item, index) => {
//                         if (this.props.defaultValue == item.value) {
//                             this.selected.push(item.value)
//                         }

//                         return <Checkbox
//                             key={index}
//                             defaultChecked={this.props.defaultValue == item.value}
//                             name={this.name}
//                             label={item.label}
//                             value={item.value}
//                             onChange={(e) => this.onChange(e)} />
//                     })
//                 }
//             </div>
//         )
//     }
// }
