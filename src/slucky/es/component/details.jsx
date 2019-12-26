import React, { Component } from 'react';

export default class Details extends Component {
    constructor() {
        super();
        this.id = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div className="details-normalize">
                <div className="d-f ac p-r">
                    <label htmlFor={this.id} className="cp p-a d-f ac" style={{ right: '100%' }}>
                        <img className="icon fs20" src={require('../icons/right.svg')} alt="" />
                    </label>
                    <div>{this.props.summary || ''}</div>
                </div>
                <input className="details-trigger d-n" id={this.id} type="checkbox" defaultChecked={!this.props.open} />
                <div className="details-content pl20">
                    {this.props.children || ''}
                </div>
            </div>
        );
    }
}
