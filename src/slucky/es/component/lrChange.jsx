import React, { Component } from 'react';

export default class Lrchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectList: this.props.option || [],
            currentIndex: 0
        };
    }

    handleClickLeft() {
        const { currentIndex, selectList } = this.state;
        if (currentIndex > 0) {
            this.setState({
                currentIndex: currentIndex - 1
            }, () => {
                this.props.onChange(selectList[this.state.currentIndex], this.state.currentIndex);
            });
        }
    }

    handleClickRight() {
        const { currentIndex, selectList } = this.state;
        if (currentIndex + 1 < selectList.length) {
            this.setState({
                currentIndex: currentIndex + 1
            }, () => {
                this.props.onChange(selectList[this.state.currentIndex], this.state.currentIndex);
            });
        }
    }

    render() {
        return (
            <div className="d-f">
                <button className="s0 btn tp plr16" onClick={() => this.handleClickLeft()}>
                    <img src={require('../icons/arrowLeft.svg')} alt=""/>
                </button>
                <div className="flex1 d-f jc">
                    {
                        this.props.children || null
                    }
                </div>
                <button className="s0 btn tp plr16" onClick={() => this.handleClickRight()}>
                    <img src={require('../icons/arrowRight.svg')} alt="" />
                </button>
            </div>
        );
    }
}
