import React, { Component } from 'react';

export default class Slidebar extends Component {
    constructor() {
        super();
        this.id = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div>
                {
                    this.props.labelName ? <div className="s0" style={{ width: this.props.labelWidth || 96 + 'px' }}>
                        <label htmlFor={this.id}>{this.props.labelName}</label>
                    </div> : null
                }
                <div style={{ width: this.props.width || 384 + 'px' }}>
                    <input
                        id={this.props.id || this.id || ''}
                        onChange={(e) => this.props.onChange && this.props.onChange(e.target.value)}
                        style={{ width: this.props.width || 384 + 'px' }}
                        value={this.props.value || ''}
                        placeholder={this.props.placeholder || ''}
                        type="text"
                        className="input-normal"
                        maxLength={this.props.maxLength || '100'} />
                    <div className="fs12 c-fail p-a pt2">{this.props.error && this.props.error()}</div>
                </div>
            </div>
        );
    }
}
