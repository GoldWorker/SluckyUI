import React, { Component } from 'react';

export class Tab extends Component {
    constructor() {
        super();
        this.cid = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div className="tab-item">
                <input type="radio" id={this.cid} name={this.props.name} defaultChecked={this.props.defaultChecked || false} />
                <label htmlFor={this.cid}>
                    <div className="tab-container">
                        <div className="tab-toggle">
                            <div className="tab-decoration">
                                <span>{this.props.title || ''}</span>
                            </div>
                        </div>
                    </div>
                </label>
                <div className="tab-content w-full">
                    <div>{this.props.children}</div>
                </div>
            </div>
        );
    }
}

class Group extends Component {
    constructor() {
        super();
        this.name = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div>
                <div className="tab-box-lr w-full">
                    <div className="tab-contrl">
                        {
                            React.Children.map(this.props.children,
                                (child) => React.cloneElement(child, { name: this.name, currentTab: this.props.currentTab || '' }))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export class TabLR extends Component {
    constructor() {
        super();
        this.id = Math.random().toString(36).substring(2);
    }
    render() {
        return (
            <div className={['tab-box-mod d-f', this.props.className].join(' ')}>
                <div className="tab-contrl s0">
                    {
                        this.props.option.map((item, index) => {
                            return (
                                <label htmlFor={this.id + index} key={index}>
                                    {
                                        item.label
                                    }
                                </label>
                            );
                        })
                    }
                </div>

                <div className="tab-container flex1 bor-l b-side pl16" style={{ minHeight: this.props.minHeight }}>
                    {
                        this.props.option.map((item, index) => {
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
                </div>

            </div>
        );
    }
}

class TabLRItem extends Component {
    constructor(props) {
        super(props);
        this.cid = this.id = Math.random().toString(36).substring(2);
        console.log(this.props);
    }
    render() {
        return (
            <div className="tab-box-mod d-f">
                <div className="tab-contrl s0">
                    <label htmlFor={this.cid}>
                        {
                            this.props.label
                        }
                    </label>
                </div>

                <div className="tab-container flex1 bor-l b-side pl16">
                    <input type="radio" id={this.cid} name={this.props.name} defaultChecked />
                    <div className="tab-content">
                        {
                            this.props.content
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Tab.Group = Group;


