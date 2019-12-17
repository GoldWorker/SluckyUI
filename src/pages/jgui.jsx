import React, { Component } from 'react';
import Highlight from 'react-highlight';
import Dnd from './dnd/dnd';

export default class Jgui extends Component {
    render() {
        return (
            <div className="p32">
                <Dnd />
                <Highlight innerHTML={true}>
                    {require('../../doc/jgui.md')}
                </Highlight>
            </div>
        );
    }
}
