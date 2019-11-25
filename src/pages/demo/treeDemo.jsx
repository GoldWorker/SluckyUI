import React, { Component } from 'react';
import Transfer from 'slucky/src/component/transfer';

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
export default class TreeDemo extends Component {
    constructor() {
        super();
        this.state = {
            selectedTree: [{ id: 0, ch: [] }, {
                pid: 0,
                id: 2,
                ch: []
            }, {
                pid: 2,
                id: 21
            }, {
                pid: 2,
                id: 22
            }, {
                pid: 0,
                id: 3
            }],
            con: 0
        };
    }
    handleChangeTranfer(selectedTree) {
        console.log(selectedTree);
        this.setState({
            selectedTree
        });
    }
    render() {
        return (
            <div>
                <button className="btn-n" onClick={() => this.setState({
                    selectedTree: [{ id: 0, ch: [] }, {
                        pid: 0,
                        id: 2,
                        ch: []
                    }, {
                        pid: 2,
                        id: 21
                    }, {
                        pid: 2,
                        id: 22
                    }]
                })}>Reset</button>
                <Transfer
                    value={this.state.selectedTree}
                    data={RootTree}
                    onChange={(nodeList) => this.handleChangeTranfer(nodeList)} />
            </div>
        );
    }
}
