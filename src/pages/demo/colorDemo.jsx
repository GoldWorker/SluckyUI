import React, { Component } from 'react';

export default class ColorDemo extends Component {
    render() {
        return (
            <div>
                <div className="d-il ta-c">
                    <div className="circle-l bg-success d-f ac jc m16"><span>#26a597</span></div>
                    success
                </div>
                <div className="d-il ta-c">
                    <div className="circle-l bg-warn d-f ac jc m16"><span>#fc7e36</span></div>
                    warn/hint
                </div>
                <div className="d-il ta-c">
                    <div className="circle-l bg-fail d-f ac jc m16"><span>#ff4444</span></div>
                    fail
                </div>
                <br/>
                <div className="d-il ta-c">
                    <div className="circle-l bg-side d-f ac jc m16"><span>#fafafa</span></div>
                    title
                </div>
                <div className="d-il ta-c">
                    <div className="circle-l bg-side d-f ac jc m16"><span>#f4f4f4</span></div>
                    side
                </div>
                <div className="d-il ta-c">
                    <div className="circle-l bg-side-s d-f ac jc m16"><span>#cacaca</span></div>
                    side-s
                </div>
                <div className="d-il ta-c">
                    <div className="circle-l bg-placeholder d-f ac jc m16"><span>#cccccc</span></div>
                    placeholder
                </div>
                <div className="d-il ta-c">
                    <div className="circle-l bg-divider d-f ac jc m16"><span>#E5E5E5</span></div>
                    divider
                </div>
                <div className="d-il ta-c">
                    <div className="circle-l bg-hint d-f ac jc m16"><span>#888888</span></div>
                    hint
                </div>
                <div className="d-il ta-c">
                    <div className="circle-l bg-icon d-f ac jc m16"><span>#666666</span></div>
                    icon
                </div>
                <div className="d-il ta-c">
                    <div className="circle-l bg-text d-f ac jc m16"><span>#222222</span></div>
                    text
                </div>
                <div className="d-il ta-c">
                    <div className="circle-l bg-disable d-f ac jc m16"><span>#898183</span></div>
                    disable
                </div>
            </div>
        );
    }
}
