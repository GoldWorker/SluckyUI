import React, { Component } from 'react'
import ReactDOM from 'react-dom';
export class Dialog extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const tar = this.props.open ? (<div className="fadeIn p-r z10">
            <div className="dialog-mark"></div>
            <div className="dialog-box d-f ac jc">
                <span>
                    <div className="dialog paper fade-scale mlr64">
                        <div className="ta-r">
                            <div className="mt4 mr4 pt4 plr8 ta-r">
                                <div
                                    className="d-il"
                                    onClick={() => this.props.onClose()}
                                    style={{
                                        cursor: 'pointer'
                                    }}>X</div>
                            </div>
                        </div>
                        <div>
                            <div className="dialog-content ta-l">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>) : null
        return ReactDOM.createPortal(tar, document.body)//传送门的另一端DOM node
    }
}

Dialog.model = () => {
    const component = <Dialog open={true} onClose={}/>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
}
