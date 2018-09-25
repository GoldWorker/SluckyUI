import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'

export default class PopupDemo extends Component {
    render() {
        return (
            <div>
                <div className="toastlists-normalize-box">
                    <div className="toastlist">
                        <div>
                            <div className="shadow bg-success">SluckyUI</div>
                            <div className="shadow bg-warn">SluckyUI For React</div>
                            <div className="shadow bg-fail">SluckyUI For Angular</div>
                        </div>
                    </div>
                </div>

                <div className="fadeOut layout-out">
                    <div className="dialog-mark"></div>
                    <div className="dialog-box d-f ac jc">
                        <span>
                            <div className="dialog paper fade-scale">
                                <div className="ta-r">
                                    <div className=" mt4 mr4 ptb4 plr8">X</div>
                                </div>
                                <div>
                                    <div className="dialog-content ta-l">
                                        asdfjklasjdlfj
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
