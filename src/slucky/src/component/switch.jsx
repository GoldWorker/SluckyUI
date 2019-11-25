import React, { Component } from 'react';

export default class Switch extends Component {
    constructor() {
        super();
        this.id = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div className="mb32 d-f ac">
                <span className='pr8'>{this.props.leftlabel || ''}</span>
                <div className="switch-box-normalize">
                    <label htmlFor={this.id} className="switch-mark-click"></label>
                    <input
                        type="checkbox"
                        // defaultValue={1}
                        id={this.id}
                        defaultChecked={this.props.defaultChecked}
                        onChange={(e) => this.props.onChange(e)} />
                    <div>
                        <i className="switch-move"></i>
                        <span className="switch-horizon"></span>
                    </div>
                </div>
                <span className='pl8'>{this.props.rightlabel || ''}</span>
            </div>
        );
    }
}
