import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import ReactDOM from 'react-dom';

let toastRef = '';
export default class Toast extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            list: [],
            toggle: false
        };
        this.createPortalContainer();
        this.timer = undefined;
        this.isStop = false;
    }

    stop() {
        this.isStop = true;
    }

    goon() {
        this.isStop = false;
    }

    add = ({ title, content, status }) => {
        //超过5个就弹出一个
        if (this.state.list.length > 5) {
            let data = this.state.list;
            data.shift();
            this.setState({ list: data });
        }
        if (!this.timer) {
            // console.log(this.timer,'timer');
            this.timer = setInterval(() => {
                let data = this.state.list;
                data.shift();
                this.setState({ list: data });

                if (!data.length) {
                    this.timer = clearInterval(this.timer);
                }
            }, 3000);
        }
        if (!this.isStop) {
            this.setState({
                list: [
                    ...this.state.list, {
                        title,
                        content,
                        status
                    }
                ]
            });
        }
    }

    handleClose(index) {
        let data = this.state.list;
        data.splice(index, 1);
        this.setState({ list: data });
    }

    createPortalContainer() {
        const doc = window.document;
        this.node = doc.createElement('div');
        doc
            .body
            .appendChild(this.node);
    }

    clearPortalContainer() {
        window
            .document
            .body
            .removeChild(this.node);
    }

    handleMapStatus(status = 'success') {
        switch (status) {
            case 'success':
                return 'c-success';
            case 'warn':
                return 'c-warn';
            case 'fail':
                return 'c-fail';
            default:
                return 'c-success';
        }
    }

    handleMapTitle(status = 'success') {
        switch (status) {
            case 'success':
                return '成功';
            case 'warn':
                return '警告';
            case 'fail':
                return '重试';
            default:
                return false;
        }
    }

    render() {
        // console.log(this.props.toggle, this.state.list, this.node);

        return createPortal(
            <div className="toastlists-normalize-box">
                {this
                    .state
                    .list
                    .map((item, index) => {
                        return (
                            <div className="toastlist" key={index}>
                                <div className="toast-item paper p-r">
                                    <span onClick={() => this.handleClose(index)} className="p-a" style={{ top: 4, right: 8 + 'px', cursor: 'pointer' }}>x</span>
                                    <div className={['pb8', this.handleMapStatus(item.status)].join(' ')} style={{ minWidth: 256 + 'px' }}>{item.title || this.handleMapTitle(item.status)}</div>
                                    <div className="">{item.content}</div>
                                </div>
                            </div>
                        );
                    })}
            </div>
            , this.node);
    }

    componentWillUnmount() {
        this.clearPortalContainer();
    }
}

Toast.add = ({ title, content, status }) => {
    //保持一个实例
    if (!document.getElementById('slucky_toast')) {
        toastRef = React.createRef();
        const component = <Toast ref={toastRef} />;
        const div = document.createElement('div');
        div.id = 'slucky_toast';
        document.body.append(div);
        ReactDOM.render(component, div);
    }
    toastRef.current.add({ title, content, status });
};

Toast.success = (content) => {
    Toast.add({ title: '成功', content, status: 'success' });
};

Toast.error = (content) => {
    Toast.add({ title: '错误', content, status: 'fail' });
};

Toast.warn = (content) => {
    Toast.add({ title: '提示', content, status: 'warn' });
};

Toast.stop = () => {
    toastRef.current.stop();
};

Toast.goon = () => {
    toastRef.current.goon();
};

