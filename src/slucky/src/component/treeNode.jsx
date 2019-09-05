import React, { Component } from 'react';
import { Checkbox } from '../component/checkbox';

export default class TreeNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _Tree: this.props.data || {}
        };
    }

    handleClickNode(node) {
        this.props.onClick && this.props.onClick(node);
    }

    handleChangeCheckbox(selected, item) {
        console.log(item);
        this.handleClickNode(item);
    }

    render() {
        const children = this.state._Tree.ch;
        return (
            <div className="pl16">
                {
                    children && children.map((item, index) => {
                        if (item.ch) {
                            return <details key={index} className="tree-details" open={this.props.open || false}>
                                <summary className="bor-b b-side mb8">
                                    {/* <Checkbox.Group className="d-il" onChange={(selected) => { this.handleChangeCheckbox(selected, item); }} option={[
                                        { label: <div className="ptb8 d-il">{item.content || item.id}</div>, value: item.id, checked: !!item.checked, disabled: !!item.disabled }
                                    ]} /> */}
                                    {
                                        this.props.item&&this.props.item(item)
                                    }
                                </summary>
                                <TreeNode data={item} onClick={(node) => this.handleClickNode(node)} open={this.props.open || false} item={(item)=>{
                                    return this.props.item&&this.props.item(item);
                                }} />
                            </details>;
                        }
                        return <div key={index} className="pl14">
                            {/* <Checkbox.Group className="d-il" onChange={(selected) => { this.handleChangeCheckbox(selected, item); }} option={[
                                { label: <div className="ptb8 d-il">{item.content || item.id}</div>, value: item.id, checked: !!item.checked, disabled: !!item.disabled }
                            ]} /> */}
                            {
                                this.props.item&&this.props.item(item)
                            }
                        </div>;
                    })
                }
            </div>
        );
    }
}


//Base，复杂度O(n)，分解式
// cloneTree(node = { id: 0, ch: [] }) {
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
