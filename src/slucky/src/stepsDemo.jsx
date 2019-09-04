import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';
import { Checkbox } from './component/checkbox';
import { Search } from './component/search';
import { Steps } from './component/steps';
import { Transfer } from './component/transfer';

export default class StepsDemo extends Component {
    constructor() {
        super();
    }

    handleChangeCheckbox = (selected) => {
        console.log(selected);
    }

    handleChangeTranfer(list) {
        console.log(list);
    }

    render() {
        const demoString = '```jsx' + `
...
import { Steps } from 'slucky';
...
<Steps isCacheData={true} stepset={[{
    title: '步骤1',
    content: (data) => {
        return <div className="p32">
            <Search onChange={(v) => { console.log(v); }} option={['asdf', '123', 'qwer123', 'zxcvqwe23', '2333hhh']} />
        </div>;
    },
    handleNext: (data) => {
        return true;
    }
}, {
    title: '步骤2',
    content: (data, handelNext, handlePre) => {
        return <div className="p32 ta-c">
            <button className="btn-n plr16 ptb4 mr8" onClick={handlePre}>上一步</button>
            <button className="btn-n plr16 ptb4" onClick={handelNext}>下一步</button>
        </div>;
    },
    isCustomCtrl: true
}, {
    title: '步骤3',
    content: (data) => {
        return <div className="p32">
            <Checkbox.GroupBorder className="pb32" defaultValue="Pear" onChange={(selected) => { this.handleChangeCheckbox(selected); }} option={[
                { label: 'Apple', value: 'Apple' },
                { label: <div className="border-sign">Pear</div>, value: 'Pear' },
                { label: 'Orange', value: 'Orange' }
            ]} />
        </div>;
    },
    handleNext: (data) => { return true; }
}, {
    title: '步骤4',
    content: (data) => {
        return <div className="p32">{data.name}</div>;
    },
    handleNext: (data) => { return true; }
}]} onChange={(currentSept) => { console.log(currentSept); }} />
        `;
        return (
            <div className="pt32">
                <Transfer onChange={(nodeList) => this.handleChangeTranfer(nodeList)} />

                <Steps isCacheData={true} stepset={[{
                    title: '步骤1',
                    content: (data) => {
                        return <div className="p32">
                            <Search onChange={(v) => { console.log(v); }} option={['asdf', '123', 'qwer123', 'zxcvqwe23', '2333hhh']} />
                        </div>;
                    },
                    handleNext: (data) => {
                        return true;
                    }
                }, {
                    title: '步骤2',
                    content: (data, handelNext, handlePre) => {
                        return <div className="p32 ta-c">
                            <button className="btn-n plr16 ptb4 mr8" onClick={handlePre}>上一步</button>
                            <button className="btn-n plr16 ptb4" onClick={handelNext}>下一步</button>
                        </div>;
                    },
                    isCustomCtrl: true
                }, {
                    title: '步骤3',
                    content: (data) => {
                        return <div className="p32">
                            <Checkbox.GroupBorder className="pb32" defaultValue="Pear" onChange={(selected) => { this.handleChangeCheckbox(selected); }} option={[
                                { label: 'Apple', value: 'Apple' },
                                { label: <div className="border-sign">Pear</div>, value: 'Pear' },
                                { label: 'Orange', value: 'Orange' }
                            ]} />
                        </div>;
                    },
                    handleNext: (data) => { return true; }
                }, {
                    title: '步骤4',
                    content: (data) => {
                        return <div className="p32">{data.name}</div>;
                    },
                    handleNext: (data) => { return true; }
                }]} onChange={(currentSept) => { console.log(currentSept); }} />

                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示使用例子</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoString} />)}
                    </Highlight>
                </details>
            </div>
        );
    }
}
