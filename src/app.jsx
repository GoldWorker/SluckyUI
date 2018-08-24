import React, { Component } from 'react'


export default class App extends Component {
    render() {
        return (
            <div className="bg-mei-yel">
                <ul className="nav-normal">
                    <li>不可思议的CSS</li>
                    <li>导航栏</li>
                    <li>光标小下划线跟随</li>
                    <li>PURE CSS</li>
                    <li>Nav Underline</li>
                </ul>

                <div className="m-btn s-svgMutiLine">
                    <svg viewBox="0 0 180 64" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <rect className="shape" height="64" width="180"></rect>
                    </svg>
                    <div className="g-text">HOVER ME</div>
                </div>
                <div className="m-btn s-irregularLineMove">Hover Me</div>
                <div className="m-btn s-irregularShadowScale">Hover Me</div>
                <div className="m-btn s-irregularShadowMove">Hover Me</div>
                <div className="container">
                    <div className="wave"></div>
                </div>
            </div>
        )
    }
}
