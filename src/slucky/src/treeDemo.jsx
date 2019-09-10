import React, { Component } from 'react';
import { Transfer } from './component/transfer';

export default class TreeDemo extends Component {
    handleChangeTranfer(list) {
        console.log(list);
    }
    render() {
        return (
            <div>
                <Transfer onChange={(nodeList) => this.handleChangeTranfer(nodeList)} />
            </div>
        );
    }
}
