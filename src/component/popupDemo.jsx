import React, {Component} from 'react'
import {createPortal} from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'

export class PopupDemo extends Component {
    render() {
        return (
            <div>
                <div className="toastlists-normalize-box">
                    <div className="toastlist">
                        <div>
                            <div className="shadow bg-success">SluckyUI</div>
                            <div className="shadow bg-warn">SluckyUI For React</div>
                            <div className="shadow bg-fail">SluckyUI For Angular</div>
                        </div>
                    </div>
                </div>

                <div className="fadeOut layout-out">
                    <div className="dialog-mark"></div>
                    <div className="dialog-box d-f ac jc">
                        <span>
                            <div className="dialog paper fade-scale">
                                <div className="ta-r">
                                    <div className=" mt4 mr4 ptb4 plr8">X</div>
                                </div>
                                <div>
                                    <div className="dialog-content ta-l">
                                        asdfjklasjdlfj
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

// https://zhuanlan.zhihu.com/p/29880992
export class Dialog extends React.Component {
    constructor() {
        super(...arguments);
        this.create()
    }

    render() {
        if (!this.props.open) {
            this.clear()
        } else {
            this.create()
        }
        return this.props.open
            ? createPortal(
                <div className="dialog">
                {this.props.children}
            </div>, //塞进传送门的JSX
                    this.node //传送门的另一端DOM node
            )
            : null
    }

    create() {
        const doc = window.document;
        this.node = doc.createElement('div');
        doc
            .body
            .appendChild(this.node);
    }

    clear() {
        window
            .document
            .body
            .removeChild(this.node);
    }

    componentWillUnmount() {
        this.clear()
    }
}

export class Toast extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            list: [],
            toggle: false
        }
        this.create()
        this.timer = undefined
    }

    add = (content, status = 'success') => {
        if (this.state.list.length > 5) {
            let data = this.state.list
            data.shift()
            this.setState({list: data})
        }
        if (!this.timer) {
            // console.log(this.timer,'timer');
            this.timer = setInterval(() => {
                let data = this.state.list
                data.shift()
                this.setState({list: data})

                if (!data.length) {
                    this.timer = clearInterval(this.timer)
                }
            }, 3000)
        }
        this.setState({
            list: [
                ...this.state.list, {
                    content,
                    status
                }
            ]
        })
        console.log(content, 'add succ');
    }

    create() {
        const doc = window.document;
        this.node = doc.createElement('div');
        doc
            .body
            .appendChild(this.node);
    }

    clear() {
        window
            .document
            .body
            .removeChild(this.node);
    }

    render() {
        console.log(this.props.toggle, this.state.list, this.node);

        return createPortal(
            <div className="toastlists-normalize-box">
            <div className="toastlist">
                <div>
                    {this
                        .state
                        .list
                        .map((item, index) => {
                            return (
                                <div className="shadow bg-success" key={index}>{item.content}</div>
                            )
                        })}
                </div>
            </div>
        </div>, this.node)
    }

    componentWillUnmount() {
        this.clear()
    }
}