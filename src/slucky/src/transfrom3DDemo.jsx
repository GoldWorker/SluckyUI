import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'

export default class transfrom3DDemo extends Component {
    render() {
        return (
            <div>

                <section className="t3d-container">
                    <input type="radio" id="card_front" name="card-ctrl" defaultChecked/>
                    <div className="card-select-box">
                        <label className="card-select" htmlFor="card_front">front</label>
                        <label className="card-select" htmlFor="card_back">back</label>
                    </div>
                    <input type="radio" id="card_back" name="card-ctrl" className="card-ischecked"/>
                    <div id="card">
                        <figure className="front" id="front"><img style={{width:'100px'}} src={require('../images/bg_test.jpg')} alt=""/></figure>
                        <figure className="back" id="back"><img style={{width:'100px'}} src={require('../images/bg_test.jpg')} alt=""/></figure>
                    </div>
                </section>
            </div>
        )
    }
}
