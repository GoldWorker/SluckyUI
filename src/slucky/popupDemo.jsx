import React, { Component } from 'react'
import { createPortal } from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'

export class PopupDemo extends Component {
    constructor() {
        super()
        this.count = 0
        this.state = {
            toggle: false
        }
    }

    hendleClickToast() {
        this
            .refs
            .toast
            .add({
                content: `内容${this.count++}`
            })
    }

    handleClickToggle() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
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

                <Toast ref="toast" />
                <button
                    className="tag-text ptb6 plr16 m32"
                    onClick={() => this.setState({ toggle: true })}>弹出对话框</button>
                <button
                    className="tag-text ptb6 plr16 m32"
                    onClick={() => this.hendleClickToast()}>弹出消息提示</button>

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
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoString} />)}
                    </Highlight>
                </details>
            </div>
        )
    }
}

// https://zhuanlan.zhihu.com/p/29880992
export class Dialog extends React.Component {
    constructor() {
        super(...arguments);
        const doc = window.document;
        this.node = doc.createElement('div')
    }

    createPortalContainer() {
        console.log(this.node, 'createPortalContainer');
        const doc = window.document;

        doc
            .body
            .appendChild(this.node);

        console.log(this.node, 'createPortalContainer');
    }

    clearPortalContainer() {
        const doc = window.document;
        if (doc.body.contains(this.node)) {
            doc
                .body
                .removeChild(this.node);
            // this.node = null
        }
    }

    render() {
        if (!this.props.open) {
            // this.clearPortalContainer()
        } else {
            this.createPortalContainer()
        }
        return this.props.open
            ? createPortal(
                <div className="fadeIn p-r z10">
                    <div className="dialog-mark"></div>
                    <div className="dialog-box d-f ac jc">
                        <span>
                            <div className="dialog paper fade-scale mlr64">
                                <div className="ta-r">
                                    <div className="mt4 mr4 pt4 plr8 ta-r">
                                        <div
                                            className="d-il"
                                            onClick={() => this.props.onClose()}
                                            style={{
                                                cursor: 'pointer'
                                            }}>X</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="dialog-content ta-l">
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>, //塞进传送门的JSX
                this.node //传送门的另一端DOM node
            )
            : null
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        this.clearPortalContainer()
    }
}

export class Toast extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            list: [],
            toggle: false
        }
        this.createPortalContainer()
        this.timer = undefined
    }

    add = ({ title, content, status }) => {
        if (this.state.list.length > 5) {
            let data = this.state.list
            data.shift()
            this.setState({ list: data })
        }
        if (!this.timer) {
            // console.log(this.timer,'timer');
            this.timer = setInterval(() => {
                let data = this.state.list
                data.shift()
                this.setState({ list: data })

                if (!data.length) {
                    this.timer = clearInterval(this.timer)
                }
            }, 3000)
        }
        this.setState({
            list: [
                ...this.state.list, {
                    title,
                    content,
                    status
                }
            ]
        })
        console.log(content, 'add succ');
    }

    createPortalContainer() {
        const doc = window.document;
        this.node = doc.createElement('div');
        doc
            .body
            .appendChild(this.node);
    }

    clearPortalContainer() {
        window
            .document
            .body
            .removeChild(this.node);
    }

    handleMapStatus(status = 'success') {
        switch (status) {
            case 'success':
                return 'c-success';
            case 'warn':
                return 'c-warn';
            case 'fail':
                return 'c-fail';
            default:
                return 'c-success';
        }
    }

    handleMapTitle(status = 'success') {
        switch (status) {
            case 'success':
                return '成功';
            case 'warn':
                return '警告';
            case 'fail':
                return '重试';
            default:
                return false
        }
    }

    render() {
        console.log(this.props.toggle, this.state.list, this.node);

        return createPortal(
            <div className="toastlists-normalize-box">
                {this
                    .state
                    .list
                    .map((item, index) => {
                        return (
                            <div className="toastlist" key={index}>
                                <div className="toast-item paper" >
                                    <div className={['pb8', this.handleMapStatus(item.status)].join(' ')} style={{ minWidth: 256 + 'px' }}>{this.handleMapTitle(item.status) || item.title}</div>
                                    <div className="">{item.content}</div>
                                </div>
                            </div>
                        )
                    })}
            </div>
            , this.node)
    }

    componentWillUnmount() {
        this.clearPortalContainer()
    }
}

