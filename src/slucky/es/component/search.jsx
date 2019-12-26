import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || '',
            selectedValue: '',
            selectedLabel: this.props.defaultValue || '',
            data: this.props.option || [],
            dataCache: this.props.option || []
        };
        this.id = Math.random().toString(36).substring(2);
    }

    handleChange(value) {
        const dataCache = [];
        for (let i = 0; i < this.state.data.length; i++) {
            const item = this.state.data[i];
            if (item.indexOf(value) != -1) {
                dataCache.push(item);
            }
        }

        this.setState({
            value,
            dataCache
        }, () => {
            this.props.onChange && this.props.onChange(value);
        });
    }

    handleEnterKey(e) {
        if (e.nativeEvent.keyCode === 13) {
            this.props.onSearch && this.props.onSearch(e.target.value);
        }
    }

    render() {
        return (
            <div className="select-down-modern">
                {
                    this.props.labelName ? <label htmlFor={this.id} className="pb4 mb0 fs12 d-b">{this.props.labelName}</label> : null
                }
                <div className="input-normal p-r d-f ac" style={{ width: this.props.width || 196 + 'px' }}>
                    <img className="icon logo-search mr8 s0" src={require('../icons/search.svg')} alt="" onClick={() => this.props.onSearch && this.props.onSearch()} />
                    <input
                        id={this.id}
                        type="search"
                        className="input-ghost w-full"
                        placeholder={this.props.placeholder || ''}
                        maxLength={this.props.maxLength || 100}
                        onChange={(e) => this.handleChange(e.target.value)}
                        onKeyPress={(e) => this.handleEnterKey(e)}
                        value={this.state.value} />
                </div>
                {
                    this.props.option ? <ul className="select-option paper" scrollbar='normal'>
                        {
                            this.state.dataCache.map((item, index) => {
                                return <li onMouseDown={() => this.handleChange(item)} key={index}>{item}</li>;
                            })
                        }
                    </ul> : null
                }
            </div>
        );
    }
}
