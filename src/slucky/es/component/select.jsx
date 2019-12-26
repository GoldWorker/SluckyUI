import React, { Component } from 'react';
export default class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '',
            selectedLabel: this.props.value || this.props.defaultValue || '',
            option: this.props.option || []
        };
        this.id = Math.random().toString(36).substring(2);
    }
    handleClickSelected(label, value) {
        this.setState({
            selectedLabel: label,
            selectedValue: value
        }, () => {
            this.props.onChange && this.props.onChange(this.state.selectedValue);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value != undefined) {
            this.setState({
                selectedLabel: nextProps.value
            });
        }
    }

    render() {
        return (
            <div className="select-down-modern">
                {
                    this.props.labelName ? <label htmlFor={this.id} className="pb4 mb0 fs12 d-b">{this.props.labelName}</label> : null
                }
                <input
                    id={this.id}
                    type="text"
                    className="input-normal"
                    style={{ width: this.props.width || 384 + 'px' }}
                    placeholder={this.props.placeholder || ''}
                    // onChange={() => { }}
                    value={this.state.selectedLabel} />
                <div className="select-down-icon d-f jc fd-c">
                    {/* <div className="tri-top mb2"></div> */}
                    <div className="tri-down"></div>
                </div>
                <ul className="select-option paper" scrollbar='normal'>
                    {
                        this.props.option ? this.props.option.map((item, index) => {
                            return <li onMouseDown={() => this.handleClickSelected(item.label, item.value)} key={index}>{item.label}</li>;
                        }) : null
                    }
                </ul>
            </div>
        );
    }
}
