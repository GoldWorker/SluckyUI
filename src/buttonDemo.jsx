import React, {Component} from 'react'

export default class ButtonDemo extends Component {
    render() {
        return (
            <div>
                <div className="btn p-r m32 svgMutiLine plr16">
                    <svg
                        className="btn-svgMutiLine"
                        viewBox="0 0 180 64"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect className="shape"></rect>
                    </svg>
                    <div>SluckyUI</div>
                </div>
                <div className="btn p-r m32 regularLineMove">SluckyUI</div>
                <div className="btn p-r m32 regularShadowScale plr16">SluckyUI</div>
                <div className="btn p-r m32 regularShadowMove plr16">SluckyUI</div>
            </div>
        )
    }
}
