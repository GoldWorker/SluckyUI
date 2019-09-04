import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';
import { Checkbox } from './component/checkbox';
import { Search } from './component/search';
import { Steps } from './component/steps';
import { Tree } from './component/tree';
const RootTree = {
    id: 0,
    ch: [{
        pid: 0,
        id: 1,
        ch: [{
            pid: 1,
            id: 11
        }, {
            pid: 1,
            id: 12,
            ch: [{
                pid: 12,
                id: 121,
                ch: [{
                    pid: 121,
                    id: 1211
                }]
            }]
        }, {
            pid: 1,
            id: 13
        }]
    }, {
        pid: 0,
        id: 2,
        ch: [{
            pid: 2,
            id: 21
        }, {
            pid: 2,
            id: 22
        }]
    }, {
        pid: 0,
        id: 3
    }]
};
export default class StepsDemo extends Component {
    constructor() {
        super();

        this.state = {
            sourceTree: RootTree,
            tarTree: { id: 0, ch: [] },
            checked: true
        };
    }

    handleChangeCheckbox = (selected) => {
        console.log(selected);
    }

    handleSelectTree(node, walkerTree) {
        const { tarTree, sourceTree } = this.state;
        //将溯源树添加到目标树中
        const newTree = Tree.mergeTree(tarTree, walkerTree);
        //目标树更新属性
        const attrTree = Tree.addAttr2Tree(newTree, { checked: true });
        this.setState({
            tarTree: attrTree,
            sourceTree: Tree.mergeTree(sourceTree, attrTree)
        });
    }

    handleSelectTarTree(node) {
        const { tarTree, sourceTree } = this.state;
        //剪除目标树节点
        const delTree = Tree.delNode(node, tarTree);
        //以剪除的节点为基准，将源树的节点更新属性
        const attrTree = Tree.addAttr2Tree(Tree.getNodeById(node.id, sourceTree), { checked: false });
        this.setState({
            tarTree: delTree,
            sourceTree: Tree.mergeTree(sourceTree, attrTree)
        });
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
                <div className="d-f">
                    <div className="flex1 s0">
                        <Tree data={this.state.sourceTree} onSelect={(node, route) => this.handleSelectTree(node, route)} />
                    </div>
                    <div className="flex1 s0">
                        <Tree data={this.state.tarTree} onSelect={(node, route) => this.handleSelectTarTree(node, route)} />
                    </div>
                </div>

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
