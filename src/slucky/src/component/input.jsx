import React, { Component } from 'react'

export class Input extends Component {

    render() {
        return (
            <div>
                <div>
                    <input
                        id={this.props.id || ''}
                        onChange={(e) => this.props.onChange && this.props.onChange(e.target.value)}
                        style={{ width: this.props.width || 384 + 'px' }}
                        placeholder={this.props.placeholder || ''}
                        type="text"
                        className="input-normal"
                        maxLength="100" />
                    <div className="fs12 c-fail p-a pt2">{this.props.error && this.props.error()}</div>
                </div>
            </div>
        )
    }
}
