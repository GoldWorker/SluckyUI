import React, { Component } from 'react';

export class Tab extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export class Details extends Component {
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

class Group extends Component {
    constructor() {
        super();
        this.id = Math.random().toString(36).substring(2);
        this.state = {
            currentTab: 0
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

                <div className="tab-container flex1 b-side pl16" style={{ minHeight: this.props.minHeight }}>
                    {
                        this.props.option && this.props.option.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <input type="radio"
                                        id={this.id + index}
                                        name={this.id}
                                        defaultChecked={(this.props.tabIndex || 0) == index}
                                    />
                                    <div className="tab-content">
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
                                    <div className="tab-content">
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


