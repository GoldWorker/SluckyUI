import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';
import { Progress } from 'slucky/src/component/progress';
export default class LoadingDemo extends Component {

    render() {

        const demoString = '``` html' + `
import { Progress } from "slucky";
...
<Progress.circle percent={30} radius={96} />
<Progress.pie percent={40} />
<Progress.wave percent={60} />
<Progress percent={50} />

<div className="wave-box-seed">
    <div className="wave"></div>
</div>

<div className="mtb32">
    <div className="w128 h128" loader-inline='circle'>
        <div className="c-hint-b">该loading适用于有内嵌内容的情况，该loading适用于有内嵌内容的情况，该loading适用于有内嵌内容的情况</div>
    </div>
</div>

<div className="mtb32">
    <div className="w128 h128 p-r">
        <div className="d-f ac jc loading-container" >
            <div data-loader='circle-side'></div>
        </div>
        <div className="c-hint-b">该loading适用无法内嵌的Dom结构，该loading适用无法内嵌的Dom结构，该loading适用无法内嵌的Dom结构</div>
    </div>
</div>
`;
        return (
            <div>
                <div className="d-il m16">
                    <Progress.circle percent={30} radius={96} />
                </div>
                <div className="d-il m16">
                    <Progress.pie percent={40} />
                </div>
                <div className="d-il m16">
                    <Progress.wave percent={60} content={'custom'}/>
                </div>
                <div className="d-il m16">
                    <Progress status="" percent={50} />
                </div>

                <div className="wave-box-seed">
                    <div className="wave"></div>
                </div>

                <div>
                    <div className="d-il m16">
                        <div className="w128 h128" loader-inline='circle'>
                            <div className="c-hint-b">该loading适用于有内嵌内容的情况，该loading适用于有内嵌内容的情况，该loading适用于有内嵌内容的情况</div>
                        </div>
                    </div>

                    <div className="d-il m16">
                        <div className="w128 h128 p-r">
                            <div className="d-f ac jc loading-container" >
                                <div data-loader='circle-side'></div>
                            </div>
                            <div className="c-hint-b">该loading适用无法内嵌的Dom结构，该loading适用无法内嵌的Dom结构，该loading适用无法内嵌的Dom结构</div>
                        </div>
                    </div>
                </div>
                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoString} />)}
                    </Highlight>
                </details>
            </div >
        );
    }
}
