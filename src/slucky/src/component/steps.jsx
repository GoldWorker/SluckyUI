import React, { Component } from 'react'
// require("babel-polyfill");
export class Steps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: this.props.currentStep || 0
        }
    }
    // 为步骤灵活变化准备
    handleClickEvent(step, index) {
        // this.onAction(step, index, this.state.currentStep);
    }

    handelPreStep() {
        if (this.state.currentStep - 1 < 0) {
            console.log('start');
            // return this.onAction(this.props.stepset[0], this.state.currentStep, false);
        } else {
            console.log('pre');
            this.setState({
                currentStep: this.state.currentStep - 1
            })
            // return this.onAction(this.props.stepset[this.state.currentStep], this.state.currentStep, false);
        }
    }

    async handelNextStep() {
        const len = this.props.stepset.length;
        if (this.props.stepset[this.state.currentStep].handleNext) {
            const AllowNext = await this.props.stepset[this.state.currentStep].handleNext(this.props.stepset[this.state.currentStep], this.state.currentStep);
            console.log('AllowNext', AllowNext);
            if (AllowNext) {
                if (this.state.currentStep + 1 >= len) {
                    console.log('end');
                    // return this.onAction(this.props.stepset[this.state.currentStep], this.state.currentStep, true);
                } else {
                    this.setState({
                        currentStep: this.state.currentStep + 1
                    })
                    console.log('next');
                    // return this.onAction(this.props.stepset[this.state.currentStep], this.state.currentStep, true);
                }
            } else {
                console.log('阻塞', AllowNext);
            }
        }
    }

    handleTitleStyle(index, currentStep) {
        if (index > currentStep) {
            return 'c-hint-b'
        }
        if (index < currentStep) {
            return 'c-theme step-sign-active step-sign-ed'
        }
        return 'step-sign-active'
    }

    render() {
        return (
            <div>
                <div className="">
                    <div className="d-f">
                        {
                            this.props.stepset.map((step, index) => {
                                return (
                                    <div key={index} className={['flex1 s0 step-item', this.handleTitleStyle(index, this.state.currentStep)].join(' ')}>
                                        <div className="sign-box">
                                            <div className={['step-sign'].join(' ')}><span className="step-sign-in">✓</span></div>
                                        </div>
                                        <div className="ptb8 fs12" onClick={() => this.handleClickEvent(step, index)}>{step.title}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        this.props.stepset.map((step, index) => {
                            return (
                                <div key={index} className="p-r">
                                    <div className="step-content" style={index == this.state.currentStep ? { position: "relative", visibility: "visible", zIndex: 1, left: 0 } : {}}>
                                        {
                                            this.props.isCacheData ?
                                                step.content && step.content(step.store || {})
                                                : (index == this.state.currentStep ? step.content && step.content(step.store || {}) : null)
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="ta-c pt16">
                    {
                        this.state.currentStep != 0 ? <button className="btn-w bor b-side ptb6 plr16 mr16" onClick={() => this.handelPreStep()}>上一步</button> : null
                    }
                    <button className="btn-n ptb6 plr16" onClick={() => this.handelNextStep()}>{(this.state.currentStep + 1) == this.props.stepset.length ? '确认' : '下一步'}</button>
                </div>
                {/* {
                    this.props.children
                } */}
                {/* {
                    this.props.stepset.map((step, index) => {
                        return (
                            index == this.state.currentStep ? <div className="ta-c pt16" key={index}>
                                {
                                    index != 0 ? <button className="btn-w bor b-side ptb6 plr16 mr16" onClick={() => this.handelPreStep()}>上一步</button> : null
                                }
                                <button className="btn-n ptb6 plr16" onClick={() => this.handelNextStep()}>{(index + 1) == this.props.stepset.length ? '确认' : '下一步'}</button>
                            </div> : null
                        )
                    })
                } */}
            </div>
        )
    }
}
