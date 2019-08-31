import React, { Component } from 'react';

export default class TreeNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _Tree: this.props.data || []
        };
    }

    handleClickNode(node) {
        this.props.onClick && this.props.onClick(node);
    }

    render() {
        return (
            <div className="pl16">
                {
                    this.state._Tree.length && this.state._Tree.map((item, index) => {
                        if (item.ch) {
                            return <details key={index}><summary><span onClick={() => this.handleClickNode(item)}>{item.id}</span></summary><TreeNode data={item.ch} /></details>;
                        }
                        return <div key={index} className="pl14"><span onClick={() => this.handleClickNode(item)}>{item.id}</span></div>;
                    })
                }
            </div>
        );
    }
}


//Base，复杂度O(n)，分解式
// cloneTree(node = { id: 0, ch: DEMO_TREE }) {
//     if (node.ch) {
//         const source = [Object.assign({}, { ...node }, { ch: [] })];
//         const map = {};
//         const queue = [...node.ch];
//         //遍历记录
//         while (queue.length) {
//             const item = queue.shift();
//             let itemNode;
//             if (item.ch) {
//                 itemNode = Object.assign({}, { ...item }, { ch: [] });
//                 // console.log(item);
//                 queue.unshift(...item.ch);
//             } else {
//                 itemNode = Object.assign({}, { ...item });
//                 // console.log(item);
//             }
//             source.push(itemNode);
//         }
//         //记录map
//         source.forEach((item) => {
//             map[item.id] = item;
//         });
//         //构建tree
//         for (let i = 0; i < source.length; i++) {
//             const item = source[i];
//             if (item.id && map[item.pid]) {
//                 map[item.pid].ch.push(item);
//             }
//         }
//         console.log(source[0]);
//         return source[0];
//     }
//     console.log({ ...node });
//     return { ...node };
// }
