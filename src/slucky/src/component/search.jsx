import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value || '',
            selectedValue: '',
            selectedLabel: this.props.defaultValue || '',
            data: this.props.option || [],
            dataCache: this.props.option || []
        }
        this.id = Math.random().toString(36).substring(2);
    }

    handleChange(value) {
        const dataCache = []
        for (let i = 0; i < this.state.data.length; i++) {
            const item = this.state.data[i];
            if (item.indexOf(value) != -1) {
                dataCache.push(item)
            }
        }

        this.setState({
            value,
            dataCache
        }, () => {
            this.props.onChange && this.props.onChange(value)
        })
    }

    render() {
        return (
            <div className="select-down-modern">
                {
                    this.props.labelName ? <label htmlFor={this.id} className="pb4 mb0 fs12 d-b">{this.props.labelName}</label> : null
                }
                <div className="p-r">
                    <input

                        id={this.id}
                        type="search"
                        className="input-normal"
                        style={{ width: this.props.width || 384 + 'px', paddingLeft: 32 + 'px', paddingRight: 32 + 'px' }}
                        placeholder={this.props.placeholder || ''}
                        onChange={(e) => this.handleChange(e.target.value)}
                        value={this.state.value} />
                </div>
                <ul className="select-option paper" scrollbar='normal'>
                    {
                        this.state.dataCache.map((item, index) => {
                            return <li onMouseDown={() => this.handleChange(item)} key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
