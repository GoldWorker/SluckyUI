import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';

export default class ButtonDemo extends Component {
    render() {
        return (
            <div>
                <div className="c-hint-b pb16">
                    简介：SluckyUI是一个组件种子库，已将大部分功能组件解耦成样式和DOM结构，为开发团队提供一个可快速二次开发成更加贴合自身业务组件库的渠道。SluckyUI更加关注跨平台性，即可快速二次开发成React,Vue,Angular组件。现在slucky已集成了React组件。
                </div>
                <div className="d-f ac fw">
                    <button className="btn p-r mr32 mt16 mb16 ptb6 svgMutiLine plr16 tp">
                        <svg
                            className="btn-svgMutiLine"
                            viewBox="0 0 180 64"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect className="shape"></rect>
                        </svg>
                        <div>SluckyUI</div>
                    </button>
                    <button className="btn p-r mr32 mt16 mb16 ptb6 regularLineMove plr16 tp">SluckyUI</button>
                    <button className="btn p-r mr32 mt16 mb16 ptb6 regularShadowScale plr16 tp">SluckyUI</button>
                    <button className="btn p-r mr32 mt16 mb16 ptb6 regularShadowMove plr16 tp">SluckyUI</button>
                    <button className="btn-n ptb6 plr16 mr32 mt16 mb16">SluckyUI</button>
                    <button className="btn-n ptb6 plr16 mr32 mt16 mb16" disabled={true}>SluckyUI</button>
                    <div loader-inline='circle' className="mr32 mt16 mb16">
                        <button className="btn-n ptb6 plr16 ">SluckyUI</button>
                    </div>
                    <button className="btn-w bor b-side ptb6 plr16 mr32 mt16 mb16">SluckyUI</button>
                    <button className="btn-hollow ptb6 plr16 mr32 mt16 mb16">SluckyUI</button>
                    {/* <button className="tag-hollow ptb6 plr16 mr32 mt16 mb16">SluckyUI</button> */}
                    <button className="tag-text ptb6 plr16 mr32 mt16 mb16">SluckyUI</button>
                    <button className="btn-action ptb6 plr16 mr32 mt16 mb16">SluckyUI</button>
                </div>
                {/* {console.log(ReactDOMServer.renderToStaticMarkup(<Highlight>{demoString}</Highlight>))} */}
                {/* 先将md文本解析成html字符串，然后交由highlight去解析 */}
                {/* renderToStaticMarkup与renderToString类似，只是它不创建像data-reactid这样的额外DOM属性，而data-reactid是React在内部使用的。如果想使用React作为一个简单的静态页面生成器，这是非常有用的，因为去掉额外的属性可以节省大量字节。 */}
                <details className="pb16 mb16 bor-b b-side-s" open>
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {require('./doc/button.md')}
                        {/* {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={require('./doc/button.md')} />)} */}
                    </Highlight>
                </details>
            </div>
        );
    }
}
