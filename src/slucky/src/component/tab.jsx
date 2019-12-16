import React, { Component } from 'react';

export default class Tab extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

class Group extends Component {
    constructor(props) {
        super(props);
        this.id = Math.random().toString(36).substring(2);
        this.state = {
            currentTab: this.props.tabIndex || 0
        };
    }
    render() {
        return (
            <div className={[`tab-box-${this.props.layout || 'lr'}`, this.props.className].join(' ')}>
                <div className="tab-contrl s0">
                    {
                        this.props.option && this.props.option.map((item, index) => {
                            return (
                                <label htmlFor={this.id + index} key={index} onClick={() => this.setState({ currentTab: index })} className={[this.state.currentTab == index ? 'tab-label-active' : ''].join(' ')}>
                                    {item.label}
                                </label>
                            );
                        })
                    }
                    {
                        this.props.children && React.Children.map(this.props.children, (item, index) => {
                            return (
                                <label htmlFor={this.id + index} key={index} onClick={() => this.setState({ currentTab: index })} className={[this.state.currentTab == index ? 'tab-label-active' : ''].join(' ')}>
                                    {item.props.label}
                                </label>
                            );
                        })
                    }
                </div>

                <div className="tab-container flex1 b-side" style={{ minHeight: this.props.minHeight }}>
                    {
                        this.props.option && this.props.option.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <input type="radio"
                                        id={this.id + index}
                                        name={this.id}
                                        defaultChecked={(this.props.tabIndex || 0) == index}
                                    />
                                    <div className={['tab-content', this.props.cssMode == 'simple' ? 'transfer-simple' : 'transfer-all'].join(' ')}>
                                        {
                                            item.content
                                        }
                                    </div>
                                </React.Fragment>
                            );
                        })
                    }
                    {
                        this.props.children && React.Children.map(this.props.children, (item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <input type="radio"
                                        id={this.id + index}
                                        name={this.id}
                                        defaultChecked={(this.props.tabIndex || 0) == index}
                                    />
                                    <div className={['tab-content', this.props.cssMode == 'simple' ? 'transfer-simple' : 'transfer-all'].join(' ')}>
                                        {
                                            React.cloneElement(item, {})
                                        }
                                    </div>
                                </React.Fragment>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

Tab.Group = Group;


