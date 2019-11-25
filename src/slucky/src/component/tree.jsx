import React, { Component } from 'react';
import TreeNode from './treeNode';

export default class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _Tree: this.props.data || {}
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            _Tree: nextProps.data
        });
    }

    handleChangeCheckbox() { }

    handleClickNode(node) {
        // Tree.delNode(node);
        // Tree.mergeTree();
        // Tree.cloneTree(node);
        // Tree.getNodeRouter(node);
        this.props.onSelect && this.props.onSelect(Tree.cloneTree(node), Tree.getNodeRouter(node, this.state._Tree));
    }

    render() {
        return (
            <div>
                <TreeNode data={this.props.data} onClick={(node) => this.handleClickNode(node)} open={this.props.open || false} item={(item) => this.props.item && this.props.item(item)} />
            </div>
        );
    }
}

/**
 * @description: 合并树的属性
 * @param {tree} 
 * @return: tree
 */
Tree.mergeTree = (tree = { id: 0 }, node = { pid: 0, id: '' }) => {
    //遍历更新树
    const nodeList = Tree.getTree2List(node, true);
    while (nodeList.length) {
        const item = nodeList.shift();
        const isExist = Tree.getNodeById(item.id, tree);
        // 节点相同时更新属性，不同时，添加节点
        if (isExist) {
            let treeItem = Tree.getNodeById(item.id, tree);
            const { ch } = treeItem;
            treeItem = Object.assign(treeItem, Object.assign(item, ch ? { ch } : {}));
        } else {
            const pNode = Tree.getNodeById(item.pid, tree);
            if (pNode) {
                if (pNode.ch) {
                    pNode.ch.push(item);
                } else {
                    pNode.ch = [item];
                }
            }
        }
    }
    return tree;
};

/**
 * @description: 树形数据结构扁平化
 * @param {tree} 
 * @param {isDeep} 是否深度复制/不保留子节点信息
 * @return: list
 */
Tree.getTree2List = (node, isDeep = false, attr = {}) => {
    //遍历目标树
    const queue = [];
    const stack = [];
    queue.push(node);
    while (queue.length) {
        const item = queue.shift();
        if (item.ch) {
            isDeep ? stack.push(Object.assign({}, { ...item }, { ch: [], ...attr })) : stack.push(Object.assign(item, { ...attr }));
            queue.unshift(...item.ch);
        } else {
            isDeep ? stack.push(Object.assign({}, { ...item }, { ...attr })) : stack.push(Object.assign(item, { ...attr }));
        }
    }
    return stack;
};

/**
 * @description: 根据节点id获取节点
 * @param {type} 
 * @return: 
 */
Tree.getNodeById = (id, node = { id: 0 }) => {
    let map = undefined;
    if (Array.isArray(node)) {
        map = Tree.getNodeList2Map(node);
    } else {
        map = Tree.getNodeList2Map(Tree.getTree2List(node));
    }
    return map[id] ? map[id] : undefined;
};

/**
 * @description: 获取list的map结构
 * @param {type} 
 * @return: 
 */
Tree.getNodeList2Map = (nodeList = []) => {
    const map = {};
    nodeList.forEach((item) => {
        map[item.id] = item;
    });
    return map;
};

/**
 * @description: 删除节点
 * @param {type} 
 * @return: 
 */
Tree.delNode = (targetNode, tree = { id: 0 }) => {
    const nodeList = Tree.getTree2List(tree);
    const map = Tree.getNodeList2Map(nodeList);
    const pNode = map[targetNode.pid];

    if (pNode && pNode.ch) {
        for (let i = 0; i < pNode.ch.length; i++) {
            const elem = pNode.ch[i];
            if (elem.id == targetNode.id) {
                pNode.ch.splice(i, 1);
            }
        }
    }
    return tree;

    // const queue = [];
    // queue.push(tree);
    // while (queue.length) {
    //     const item = queue.shift();
    //     if (item.id == targetNode.id && map[item.pid] && map[item.pid].ch) {
    //         //找到父节点&del node
    //         for (let i = 0; i < map[item.pid].ch.length; i++) {
    //             const elem = map[item.pid].ch[i];
    //             if (elem.id == targetNode.id) {
    //                 map[item.pid].ch.splice(i, 1);
    //             }
    //         }
    //         return tree;
    //     }
    //     if (item.ch) {
    //         queue.unshift(...item.ch);
    //     }
    // }
    // return tree;
};

/**
 * @description: 克隆树
 * @param {type} 
 * @return: 
 */
Tree.cloneTree = (node = { id: 0 }, isDeep = true) => {
    const nodeList = Tree.getTree2List(node, isDeep);
    return Tree.buildTree(nodeList);
};

Tree.cloneList = (nodeList) => {
    const res = [];
    for (let i = 0; i < nodeList.length; i++) {
        const item = nodeList[i];
        const cloneItem = Object.assign({}, { ...item });
        if (cloneItem.ch) {
            delete cloneItem.ch;
        }
        res.push(cloneItem);
    }
    return res;
};

/**
 * @description: 为节点添加属性，包括子节点
 * @param {type} 
 * @return: 
 */
Tree.addAttr2Tree = (node = { id: 0 }, attr = { checked: true }) => {
    const nodeList = Tree.getTree2List(node, false, attr) || [];
    return nodeList[0];
};

/**
 * @description: 获取溯源树
 * @param {type} 
 * @return: 
 */
Tree.getNodeRouter = (searchNode = {}, node = { id: 0 }) => {
    const stack = [];
    const dfs = (tree) => {
        if (tree.ch) {
            stack.push(Object.assign({}, { ...tree }, { ch: [] }));
            //处理父节点
            if (tree.id == searchNode.id) {
                return false;
            }
            const children = tree.ch;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const flag = dfs(child);
                if (!flag) {
                    return false;
                }
            }
        } else {
            stack.push(Object.assign({}, { ...tree }));
            //处理叶子节点
            if (tree.id == searchNode.id) {
                return false;
            }
        }
        stack.pop();
        return true;
    };
    dfs(node);
    return Tree.buildTree(stack);
};

/**
 * @description: 构建树
 * @param {type} 
 * @return: 
 */
Tree.buildTree = (nodeList = []) => {
    //创建map，方便根据id/pid引用相关对象
    if (nodeList && nodeList.length) {
        const map = Tree.getNodeList2Map(nodeList);
        for (let i = 0; i < nodeList.length; i++) {
            const item = nodeList[i];
            if (map[item.pid]) {
                map[item.pid].ch ? map[item.pid].ch.push(item) : map[item.pid].ch = [item];
            }
            // map[item.pid] && map[item.pid].ch && map[item.pid].ch.push(item);
        }
    }
    for (let i = 0; i < nodeList.length; i++) {
        const item = nodeList[i];
        if (!item.id) {
            return nodeList[i];
        }
    }
    return nodeList && nodeList[0];
};
