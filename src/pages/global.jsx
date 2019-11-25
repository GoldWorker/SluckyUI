import React, { Component } from 'react';
import HighorderMessage from './message/highorder-message';
import Slidebar from './demo/slidebar.demo';
import HighorderLoginWindow from './login/highorder-loginWindow';
import HighorderNavNormalize from './nav/highorder-navNormalize';
export default class Global extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HighorderNavNormalize />
                <Slidebar />
                <HighorderMessage />
                <HighorderLoginWindow />
            </div>
        );
    }
}
