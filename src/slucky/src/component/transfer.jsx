import React, { Component } from 'react';
import { Tree } from '..';

const DEMO_TREE = [{
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
}];

const RootTree = {
    id: 0,
    ch: DEMO_TREE
};

export class Transfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sourceTree: this.props.data || RootTree,
            tarTree: { id: 0, ch: [] }
        };
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
        this.props.onChange && this.props.onChange(Tree.getTree2List(attrTree, true));
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
        this.props.onChange && this.props.onChange(Tree.getTree2List(delTree, true));
    }

    render() {
        return (
            <div className="d-f" style={{ width: this.props.width || 'auto' }}>
                <div className="flex1 s0 bor-r b-side">
                    <Tree data={this.state.sourceTree} onSelect={(node, route) => this.handleSelectTree(node, route)} />
                </div>
                <div className="flex1 s0">
                    <Tree data={this.state.tarTree} onSelect={(node, route) => this.handleSelectTarTree(node, route)} />
                </div>
            </div>
        );
    }
}
