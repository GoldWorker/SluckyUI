import React, { Component } from 'react';

export class Input extends Component {
    constructor() {
        super();
        this.id = Math.random().toString(36).substring(2);
    }

    render() {
        return (
            <div className="d-f ac" style={{ width: this.props.width || 384 + 'px' }}>
                {
                    this.props.labelName ? <div className="s0" style={{ width: this.props.labelWidth || 96 + 'px' }}>
                        <label htmlFor={this.id}>{this.props.labelName}</label>
                    </div> : null
                }
                {
                    typeof this.props.value === 'undefined' ?
                        <div style={{ width: this.props.width || 384 + 'px' }}>
                            <input
                                id={this.props.id || this.id || ''}
                                onChange={(e) => this.props.onChange && this.props.onChange(e.target.value)}
                                style={{ width: this.props.width || 384 + 'px' }}
                                placeholder={this.props.placeholder || ''}
                                type={this.props.type || 'text'}
                                disabled={this.props.disabled || false}
                                readOnly={this.props.readOnly || false}
                                className={['input-normal', this.props.error && this.props.error() && 'b-fail'].join(' ')}
                                maxLength={this.props.maxLength || '100'} />
                            <div className="fs12 c-fail p-a pt2">{this.props.error && this.props.error()}</div>
                        </div> : <div style={{ width: this.props.width || 384 + 'px' }}>
                            <input
                                id={this.props.id || this.id || ''}
                                onChange={(e) => this.props.onChange && this.props.onChange(e.target.value)}
                                style={{ width: this.props.width || 384 + 'px' }}
                                value={this.props.value}
                                placeholder={this.props.placeholder || ''}
                                type={this.props.type || 'text'}
                                disabled={this.props.disabled || false}
                                readOnly={this.props.readOnly || false}
                                className={['input-normal', this.props.error && this.props.error() && 'b-fail'].join(' ')}
                                maxLength={this.props.maxLength || '100'} />
                            <div className="fs12 c-fail p-a pt2">{this.props.error && this.props.error()}</div>
                        </div>
                }
                {
                    // console.log(this.props.error, this.props.error && this.props.error() && 'b-fail')
                }
            </div>
        );
    }
}

class InputNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: this.props.step || 1,
            value: this.props.defaultValue || 0,
            max: this.props.max || Infinity,
            min: this.props.min || 0
        };
    }

    handleChange(value) {
        this.setState({
            value
        }, this.props.onChange && this.props.onChange(value));
    }

    handleClickCtrl(type) {
        console.log(type);
        const v = new Number(this.state.value);
        switch (type) {
            case 'UP':
                if (v < this.state.max) {
                    this.setState({
                        value: v + this.state.step
                    }, this.props.onChange && this.props.onChange(this.state.value));
                }
                break;
            case 'DOWM':
                if (v > this.state.min) {
                    this.setState({
                        value: v - this.state.step
                    }, this.props.onChange && this.props.onChange(this.state.value));
                }
                break;
        }
    }

    render() {
        return (
            <div className="d-f input-number">
                <Input type='number' onChange={(v) => this.handleChange(v)} value={this.state.value} width={this.props.width || 128 + 'px'} />
                <div className="d-il input-ctrl">
                    <div className="ctrl-up" onClick={() => this.handleClickCtrl('UP')}></div>
                    <div className="ctrl-down" onClick={() => this.handleClickCtrl('DOWM')}></div>
                </div>
            </div>
        );
    }
}

Input.Number = InputNumber;
