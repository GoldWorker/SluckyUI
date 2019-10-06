import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';
import { Dialog, Toast } from './index';

export class PopupDemo extends Component {
    constructor() {
        super();
        this.count = 0;
        this.state = {
            toggle: false
        };
    }

    handleClickToggle() {
        this.setState({
            toggle: !this.state.toggle
        });
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
                <button className="btn-n" onClick={() => Dialog.model({ content: 123, onOk: () => { }, title: 'Tips' })}>快捷弹出对话框</button>


                <button
                    className="tag-text ptb6 plr16 m32"
                    onClick={() => this.setState({ toggle: true })}>弹出自定义对话框</button>
                <button
                    className="tag-text ptb6 plr16 m32"
                    onClick={() => Toast.add({
                        title: '自定义',
                        content: '内容...',
                        status: 'success'
                    })}>弹出自定义消息提示</button>
                <button
                    className="tag-text ptb6 plr16 m32"
                    onClick={() => Toast.error(`内容${this.count++}`)}>弹出错误消息提示</button>
                <button
                    className="tag-text ptb6 plr16 m32"
                    onClick={() => Toast.warn(`内容${this.count++}`)}>弹出警告消息提示</button>
                <button
                    className="tag-text ptb6 plr16 m32"
                    onClick={() => Toast.success(`内容${this.count++}`)}>弹出成功消息提示</button>

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

                <details className="pb16 mb16 bor-b b-side-s" open>
                    <summary className="btn-n pl8 pr64 ptb8">显示使用例子</summary>
                    <Highlight innerHTML={true}>
                        {require('./doc/popup.md')}
                        {/* {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={useString} />)} */}
                    </Highlight>
                </details>

                <details className="pb16 mb16 bor-b b-side-s" open>
                    <summary className="btn-n pl8 pr64 ptb8">显示样式代码</summary>
                    <Highlight innerHTML={true}>
                        {require('./doc/popupStyle.md')}
                        {/* {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoString} />)} */}
                    </Highlight>
                </details>
            </div>
        );
    }
}



