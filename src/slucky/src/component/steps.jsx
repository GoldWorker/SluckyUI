import React, { Component } from 'react'
// require("babel-polyfill");
export class Steps extends Component {
    constructor() {
        super()
        this.currentStep = 0
    }
    // 为步骤灵活变化准备
    handleClickEvent(step, index) {
        // this.onAction(step, index, this.currentStep);
    }

    handelPreStep() {
        if (this.currentStep - 1 < 0) {
            return this.onAction(this.props.stepset[0], this.currentStep, false);
        } else {
            this.currentStep--;
            return this.onAction(this.props.stepset[this.currentStep], this.currentStep, false);
        }
    }

    // async handelNextStep() {
    //     const len = this.props.stepset.length;
    //     if (this.props.stepset[this.currentStep].handleNext) {
    //         const AllowNext = await this.props.stepset[this.currentStep].handleNext(this.props.stepset[this.currentStep], this.currentStep);
    //         console.log('AllowNext', AllowNext);
    //         if (AllowNext) {
    //             if (this.currentStep + 1 >= len) {
    //                 return this.onAction(this.props.stepset[this.currentStep], this.currentStep, true);
    //             } else {
    //                 this.currentStep++;
    //                 return this.onAction(this.props.stepset[this.currentStep], this.currentStep, true);
    //             }
    //         } else {
    //             console.log('阻塞', AllowNext);
    //         }
    //     }
    // }

    render() {
        return (
            <div>
                {/* <div class="fs16 step d-f ac">
                    {
                        this.props.stepset.map((step, index) => {
                            return (
                                <div class="d-il step-content">
                                    <span class="btn ptb2 plr4" className={[i <= currentStep ? 'c-theme' : '', i > currentStep ? 'c-hint-b' : ''].join(' ')} onClick={() => this.handleClickEvent(step, i)}>{step.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    this.props.children
                }
                {
                    this.props.stepset.map((step, index) => {
                        return (
                            i == currentStep ? <div class="ta-c pt16">
                                {
                                    i != 0 ? <button class="btn-w bor b-side ptb6 plr16 mr16" onClick={() => handelPreStep}>上一步</button> : null
                                }
                                <button class="btn-n ptb6 plr16" onClick={() => handelNextStep()}>{(i + 1) == stepset.length ? '确认' : '下一步'}</button>
                            </div> : null
                        )
                    })
                } */}
            </div>
        )
    }
}
