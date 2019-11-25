import React, { Component } from 'react';
import Tree from '../component/tree';
import Checkbox from '../component/checkbox';

export default class Transfer extends Component {
    constructor(props) {
        super(props);
        const { data, value } = this.props;
        const valueCopy = Tree.cloneList(value);
        const value2Tree = Tree.buildTree(valueCopy);
        const attrTree = Tree.addAttr2Tree(value2Tree, { checked: true });
        const initAttrTree = Tree.addAttr2Tree(data, { checked: false });
        this.state = {
            sourceTree: Tree.mergeTree(initAttrTree, attrTree),
            tarTree: attrTree || { id: 0, ch: [] }
        };
    }

    componentWillReceiveProps(nextProps) {
        const { data, value } = nextProps;
        //不能影响源
        const valueCopy = Tree.cloneList(value);
        if (value) {
            const value2Tree = Tree.buildTree(valueCopy);
            //更新目标树
            const attrTree = Tree.addAttr2Tree(value2Tree, { checked: true });
            //刷新源树
            const initAttrTree = Tree.addAttr2Tree(data, { checked: false });
            this.setState({
                sourceTree: Tree.mergeTree(initAttrTree, attrTree),
                tarTree: attrTree
            });
        }
    }

    handleSelectTree(node) {
        const { tarTree, sourceTree } = this.state;
        const childTree = node;
        const walkerTree = Tree.getNodeRouter(node, sourceTree);

        //将溯源树添加到目标树中
        const newTree = Tree.mergeTree(Tree.mergeTree(tarTree, walkerTree), childTree);
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

    handleChangeCheckbox() { }

    render() {
        return (
            <div className="d-f" style={{ width: this.props.width || 'auto' }}>
                <div className="flex1 s0 bor-r b-side">
                    <Tree
                        data={this.state.sourceTree}
                        onSelect={(node, route) => this.handleSelectTree(node, route)}
                        item={(item) => {
                            return <Checkbox
                                onChange={(e) => { this.handleSelectTree(item, e); }}
                                label={<div className="ptb8 d-il">{item.content || item.id}</div>}
                                value={item.id}
                                checked={!!item.checked}
                                disabled={!!item.checked}
                            />;
                        }} />
                </div>
                <div className="flex1 s0">
                    <Tree
                        data={this.state.tarTree}
                        onSelect={(node, route) => this.handleSelectTarTree(node, route)}
                        open={true}
                        item={(item) => {
                            return <div className="d-il mtb8">{item.content || item.id}<span onClick={() => this.handleSelectTarTree(item)} className="plr8" style={{ cursor: 'pointer' }}>x</span></div>;
                        }} />
                </div>
            </div>
        );
    }
}
