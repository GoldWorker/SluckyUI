import React, { Component } from 'react';
import Details from './details';

export default class TreeNode extends Component {
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
            <div className="pl24">
                {
                    children && children.map((item, index) => {
                        if (item.ch) {
                            return <div className="d-f" key={index}>
                                {/* <div>
                                    {
                                        this.props.item && this.props.item(item)
                                    }
                                </div> */}
                                <div className="flex1">
                                    <Details key={index} open={this.props.open || false} summary={this.props.item && this.props.item(item)}>
                                        <TreeNode data={item} onClick={(node) => this.handleClickNode(node)} open={this.props.open || false} item={(item) => {
                                            return this.props.item && this.props.item(item);
                                        }} />
                                    </Details>
                                    {/* <details key={index} className="tree-details" open={this.props.open || false}>
                                        <summary className="mtb8">
                                            {
                                                this.props.item&&this.props.item(item)
                                            }
                                        </summary>
                                        <TreeNode data={item} onClick={(node) => this.handleClickNode(node)} open={this.props.open || false} item={(item) => {
                                            return this.props.item && this.props.item(item);
                                        }} />
                                    </details> */}
                                </div>
                            </div>;
                        }
                        return <div key={index} className="">
                            {
                                this.props.item && this.props.item(item)
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
