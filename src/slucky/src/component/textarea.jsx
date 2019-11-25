import React, { Component } from 'react';

export default class Textarea extends Component {
    constructor() {
        super();
        this.id = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <textarea id={this.props.id || this.id} cols={this.props.cols || 50} rows={this.props.rows || 6} className="textarea" onChange={(e) => this.props.onChange && this.props.onChange(e)}></textarea>
        );
    }
}
