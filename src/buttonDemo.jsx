import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'
import "../node_modules/highlight.js/styles/tomorrow.css";
import ReactDOM from 'react-dom';

export default class ButtonDemo extends Component {
    render() {
        const demoString = '``` html' + `
<div className="btn p-r m32 ptb6 svgMutiLine plr16">
    <svg
        className="btn-svgMutiLine"
        viewBox="0 0 180 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <rect className="shape"></rect>
    </svg>
    <div>SluckyUI</div>
</div>

<div className="btn p-r m32 ptb6 regularLineMove plr16">SluckyUI</div>

<div className="btn p-r m32 ptb6 regularShadowScale plr16">SluckyUI</div>

<div className="btn p-r m32 ptb6 regularShadowMove plr16">SluckyUI</div>

<button className="btn-n ptb6 plr16 m32">SluckyUI</button>

<button className="btn-w bor b-side ptb6 plr16 m32">SluckyUI</button>

<button className="btn-hollow ptb6 plr16 m32">SluckyUI</button>

<button className="tag-hollow ptb6 plr16 m32">SluckyUI</button>

<button className="tag-text ptb6 plr16 m32">SluckyUI</button>
` + '```';
        return (
            <div className="d-f ac fw">
                <div className="btn p-r m32 ptb6 svgMutiLine plr16">
                    <svg
                        className="btn-svgMutiLine"
                        viewBox="0 0 180 64"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect className="shape"></rect>
                    </svg>
                    <div>SluckyUI</div>
                </div>
                <div className="btn p-r m32 ptb6 regularLineMove plr16">SluckyUI</div>
                <div className="btn p-r m32 ptb6 regularShadowScale plr16">SluckyUI</div>
                <div className="btn p-r m32 ptb6 regularShadowMove plr16">SluckyUI</div>
                <button className="btn-n ptb6 plr16 m32">SluckyUI</button>
                <button className="btn-w bor b-side ptb6 plr16 m32">SluckyUI</button>
                <button className="btn-hollow ptb6 plr16 m32">SluckyUI</button>
                <button className="tag-hollow ptb6 plr16 m32">SluckyUI</button>
                <button className="tag-text ptb6 plr16 m32">SluckyUI</button>
                {/* {console.log(ReactDOMServer.renderToStaticMarkup(<Highlight>{demoString}</Highlight>))} */}
                {/* 先将md文本解析成html字符串，然后交由highlight去解析 */}
                <div className="m32">
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoString}/>)}
                    </Highlight>
                </div>
            </div>
        )
    }
}
