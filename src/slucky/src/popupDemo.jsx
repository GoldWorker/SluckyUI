import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'
import { Dialog, Toast } from './index'

export class PopupDemo extends Component {
    constructor() {
        super()
        this.count = 0
        this.state = {
            toggle: false
        }
    }

    handleClickToggle() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        const useString = '``` jsx' + `
// Style1：使用函数式直接调用

import { Dialog, Toast } from 'slucky'
ReactDOM.render(
    <div>
        <button
        className="tag-text ptb6 plr16 m32"
        onClick={() => Toast.add({
            content: '内容'
        })}>弹出消息提示</button>

        <button 
            className="btn-n" 
            onClick={() => Dialog.model({ 
                content: 123, 
                onOk: () => { }, 
                title: 'Tips' 
            })}>Open Dialog</button>
    </div>,
    document.body
)

//------------------------------------
// Style2：使用组件去调用
class demo extends Component {
    constructor() {
        super()
        this.state = {
            toggle: false
        }
    }
    handleClickToggle() {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {
        return (
            <div>
                <Dialog open={this.state.toggle} onClose={() => this.setState({ toggle: false })}>
                    <div>
                        <p>Your Title</p>
                        <div>Breaking news, sport, TV, radio and a whole lot more. The BBC informs,
                            educates and entertains - wherever you are, whatever your age.Visit BBC News for
                            up-to-the-minute news, breaking news, video, audio and feature stories. BBC News
                            provides trusted World and UK news as well as local and ...</div>
                        <div className="ta-r pt8">
                            <button
                                className="tag-text ptb6 plr16"
                                onClick={() => this.setState({ toggle: false })}>cancel</button>
                            <button className="tag-text ptb6 plr16">ok</button>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

`
        const demoString = '``` html' + `
 <div className="fadeIn p-r z10">
    <div className="dialog-mark"></div>
    <div className="dialog-box d-f ac jc">
        <span>
            <div className="dialog paper fade-scale mlr64">
                <div className="ta-r">
                    <div className="mt4 mr4 pt4 plr8 ta-r">
                        <div>X</div>
                    </div>
                </div>
                <div>
                    <div className="dialog-content ta-l">
                        content
                    </div>
                </div>
            </div>
        </span>
    </div>
</div>

<div className="toastlists-normalize-box">
    <div className="toastlist">
        <div className="toast-item paper" >
            <div className="pb8 c-success" style="min-width:256px;">Title</div>
            <div className="">centent</div>
        </div>
    </div>
</div>
            
<div className="pop-box">
    <div className="bor-b b-theme pop-toggle plr4">
        <span className="c-theme">?</span>
        <div className="pop-main-r pl8">
            <div className="pop-content p24 bg-b ta-l shadow fs14">
                <pre className="c-text-w fs18">Title</pre>
                <pre className="c-text-w">TV, radio and a whole lot more. The BBC informs</pre>
                <pre className="c-text-w">TV, radio and a whole lot more. The BBC informs</pre>
                <pre className="c-text-w">TV, radio and a whole lot more. The BBC informs</pre>
            </div>
        </div>
    </div>
</div>
`
        return (
            <div>
                <Dialog open={this.state.toggle} onClose={() => this.setState({ toggle: false })}>
                    <div>
                        <p>Your Title</p>
                        <div>Breaking news, sport, TV, radio and a whole lot more. The BBC informs,
                            educates and entertains - wherever you are, whatever your age.Visit BBC News for
                            up-to-the-minute news, breaking news, video, audio and feature stories. BBC News
                                                provides trusted World and UK news as well as local and ...</div>
                        <div className="ta-r pt8">
                            <button
                                className="tag-text ptb6 plr16"
                                onClick={() => this.setState({ toggle: false })}>cancel</button>
                            <button className="tag-text ptb6 plr16">ok</button>
                        </div>
                    </div>
                </Dialog>
                <button className="btn-n" onClick={() => Dialog.model({ content: 123, onOk: () => { }, title: 'Tips' })}>Open Dialog</button>

                {/* <Toast ref="toast" /> */}

                <button
                    className="tag-text ptb6 plr16 m32"
                    onClick={() => this.setState({ toggle: true })}>弹出对话框</button>
                <button
                    className="tag-text ptb6 plr16 m32"
                    onClick={() => Toast.add({
                        content: `内容${this.count++}`
                    })}>弹出消息提示</button>

                <div className="pop-box">
                    <div className="pop-toggle plr4">
                        <div className="circle bg-icon c-text-w d-f jc ac fs12">?</div>
                        <div className="pop-main-r pl8">
                            <div className="pop-content p24 bg-b ta-l shadow fs14">
                                <pre className="c-text-w fs18">Title</pre>
                                <pre className="c-text-w">TV, radio and a whole lot more. The BBC informs</pre>
                                <pre className="c-text-w">TV, radio and a whole lot more. The BBC informs</pre>
                                <pre className="c-text-w">TV, radio and a whole lot more. The BBC informs</pre>
                            </div>
                        </div>
                    </div>
                </div>

                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示使用例子</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={useString} />)}
                    </Highlight>
                </details>

                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示样式代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoString} />)}
                    </Highlight>
                </details>
            </div>
        )
    }
}



