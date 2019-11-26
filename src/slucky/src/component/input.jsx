import React, { Component } from 'react';

export default class Input extends Component {
    constructor() {
        super();
        this.id = Math.random().toString(36).substring(2);
    }

    toThousands(number) {
        let num = (number || '').toString(), result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) { result = num + result; }
        return result;
    }

    onChange(value) {
        if (this.props.type == 'money') {
            value = (value || '').toString().replace(/\D/g, '');
        }
        this.props.onChange(value);
    }

    render() {
        let _selfValue = this.props.value;
        if (this.props.type == 'money') {
            _selfValue = (this.props.value || '').toString().replace(/\D/g, '');
            if (_selfValue == false) {
                _selfValue = '';
            }
            _selfValue = this.toThousands(_selfValue);
        }

        return (
            <div className="d-f ac" style={{ width: this.props.width || 384 + 'px' }}>
                {
                    this.props.labelName ? <div className="s0" style={{ width: this.props.labelWidth || 96 + 'px' }}>
                        <label htmlFor={this.id}>{this.props.labelName}</label>
                    </div> : null
                }
                {
                    typeof _selfValue === 'undefined' ?
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
                                onChange={(e) => this.props.onChange && this.onChange(e.target.value)}
                                style={{ width: this.props.width || 384 + 'px' }}
                                value={_selfValue}
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
            value: this.props.value || 0,
            max: this.props.max || Infinity,
            min: this.props.min || 0
        };
    }

    handleChange(value) {
        this.props.onChange && this.props.onChange(value);
    }

    handleClickCtrl(type) {
        const v = new Number(this.props.value);
        switch (type) {
            case 'UP':
                if (v < this.state.max) {
                    this.props.onChange && this.props.onChange(v + this.state.step);
                }
                break;
            case 'DOWM':
                if (v > this.state.min) {
                    this.props.onChange && this.props.onChange(v - this.state.step);
                }
                break;
        }
    }

    render() {
        return (
            <div className="d-il input-number p-r">
                <Input type='number' onChange={(v) => this.handleChange(v)} value={this.props.value} width={this.props.width || 128 + 'px'} />
                <div className="d-il input-ctrl t0 r0 p-a">
                    <div className="ctrl-up" onClick={() => this.handleClickCtrl('UP')}></div>
                    <div className="ctrl-down" onClick={() => this.handleClickCtrl('DOWM')}></div>
                </div>
            </div>
        );
    }
}

Input.Number = InputNumber;
