import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class Dialog extends Component {
    constructor() {
        super(...arguments);
        this.id = Math.random().toString(36).substring(2);
    }

    render() {
        const tar = this.props.open ? <div className="fadeIn p-r z10">
            <div className="dialog-mark d-f ac jc" id={this.id} onClick={(e) => e.target.id == this.id && (this.props.maskClosable || false) && this.props.onClose()}>
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
            </div>

        </div> : null;
        return ReactDOM.createPortal(tar, document.body);//传送门的另一端DOM node
    }
}

Dialog.model = ({ content, onOk, title, footer }) => {

    const div = document.createElement('div');
    const closeDialog = (onOk, component) => {
        onOk && onOk();
        ReactDOM.render(React.cloneElement(component, { open: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    const component = <Dialog open={true} onClose={() => closeDialog('', component)}>
        {
            title && <p>{title}</p>
        }
        <div>{content}</div>
        {
            !footer &&
            <div className="ta-r pt8">
                <button className="tag-text ptb6 plr16" onClick={() => closeDialog('', component)}>取消</button>
                {
                    onOk && <button className="tag-text ptb6 plr16" onClick={() => closeDialog(onOk, component)}>确认</button>
                }
            </div>

        }
    </Dialog>;
    document.body.append(div);
    ReactDOM.render(component, div);
};
