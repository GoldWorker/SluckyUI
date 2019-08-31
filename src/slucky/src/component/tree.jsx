import React, { Component } from 'react';
import TreeNode from './treeNode';

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

export class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _Tree: this.props.data || DEMO_TREE || []
        };
    }

    handleClickNode(node) {
        // Tree.getNodeRouter(node);
        // console.log('Node', node);
        // Tree.delNode(node);
        Tree.mergeTree();
        // Tree.cloneTree(node);
        // this.props.onSelect && this.props.onSelect(this.cloneTree(node), this.getNodeRouter());
    }

    render() {
        return (
            <div className="pl16">
                <TreeNode data={DEMO_TREE} onClick={(node) => this.handleClickNode(node)} />
            </div>
        );
    }
}

Tree.mergeTree = (tree = RootTree, node = { pid: 3, id: 31 }) => {
    const nodeList = Tree.getTree2List(node);
    console.log('nodeList', nodeList);
    while (nodeList.length) {
        const item = nodeList.shift();
        const isExist = Tree.getNodeById(item.id, tree);
        // debugger;
        if (!isExist) {
            const pNode = Tree.getNodeById(item.pid, tree);
            if (pNode.ch) {
                pNode.ch.push(item);
            } else {
                pNode.ch = [item];
            }
        }
    }
    console.log(tree);
};

Tree.getTree2List = (node, isDeep = false) => {
    const queue = [];
    const stack = [];
    queue.push(node);
    while (queue.length) {
        const item = queue.shift();
        if (item.ch) {
            isDeep ? stack.push(Object.assign({}, { ...item }, { ch: [] })) : stack.push(item);
            queue.unshift(...item.ch);
        } else {
            isDeep ? stack.push(Object.assign({}, { ...item })) : stack.push(item);
        }
    }
    return stack;
};

Tree.getNodeById = (id, node = RootTree) => {
    const map = Tree.getNodeList2Map(Tree.getTree2List(node));
    return map[id] ? map[id] : undefined;
};

Tree.getNodeList2Map = (nodeList = []) => {
    const map = {};
    nodeList.forEach((item) => {
        map[item.id] = item;
    });
    return map;
};

Tree.delNode = (targetNode, node = RootTree) => {
    // console.log('targetNode', targetNode);
    // node.ch.splice(0, 1);
    const queue = [];
    const nodeList = Tree.getTree2List(RootTree);
    const map = Tree.getNodeList2Map(nodeList);
    queue.push(node);

    while (queue.length) {
        const item = queue.shift();
        if (item.id == targetNode.id && map[item.pid] && map[item.pid].ch) {
            //找到父节点&del node
            for (let i = 0; i < map[item.pid].ch.length; i++) {
                const elem = map[item.pid].ch[i];
                if (elem.id == targetNode.id) {
                    map[item.pid].ch.splice(i, 1);
                }
            }
            // console.log('Del', node, item, map);
            return node;
        }
        if (item.ch) {
            queue.unshift(...item.ch);
        }
    }
    // console.log('not Del', node, map);
    return node;
};

Tree.cloneTree = (node = RootTree) => {
    const nodeList = Tree.getTree2List(node, true);
    return Tree.buildTree(nodeList);
};

Tree.getNodeRouter = (searchNode = {}) => {
    const stack = [];
    console.log('searchNode', searchNode);
    const dfs = (node = RootTree) => {
        if (node.ch) {
            stack.push(Object.assign({}, { ...node }, { ch: [] }));
            //处理父节点
            console.log(node);
            if (node.id == searchNode.id) {
                return false;
            }
            const children = node.ch;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                // console.log(child);
                const flag = dfs(child);
                if (!flag) {
                    return false;
                }
            }
        } else {
            stack.push(Object.assign({}, { ...node }));
            //处理叶子节点
            console.log(node);
            if (node.id == searchNode.id) {
                return false;
            }
        }
        stack.pop();
        return true;
    };
    dfs();
    // console.log('stack', stack, Tree.buildTree(stack));
    return Tree.buildTree(stack);
};

Tree.buildTree = (nodeList = []) => {
    //创建map，方便根据id/pid引用相关对象
    if (nodeList && nodeList.length) {
        const map = Tree.getNodeList2Map(nodeList);
        for (let i = 1; i < nodeList.length; i++) {
            const item = nodeList[i];
            map[item.pid] && map[item.pid].ch && map[item.pid].ch.push(item);
        }
    }
    // console.log(nodeList, map);
    return nodeList && nodeList[0];
};
