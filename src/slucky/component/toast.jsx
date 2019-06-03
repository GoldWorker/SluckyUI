import React, { Component } from 'react'

export class Toast extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            list: [],
            toggle: false
        }
        this.createPortalContainer()
        this.timer = undefined
    }

    add = ({ title, content, status }) => {
        if (this.state.list.length > 5) {
            let data = this.state.list
            data.shift()
            this.setState({ list: data })
        }
        if (!this.timer) {
            // console.log(this.timer,'timer');
            this.timer = setInterval(() => {
                let data = this.state.list
                data.shift()
                this.setState({ list: data })

                if (!data.length) {
                    this.timer = clearInterval(this.timer)
                }
            }, 3000)
        }
        this.setState({
            list: [
                ...this.state.list, {
                    title,
                    content,
                    status
                }
            ]
        })
        console.log(content, 'add succ');
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
                return false
        }
    }

    render() {
        console.log(this.props.toggle, this.state.list, this.node);

        return createPortal(
            <div className="toastlists-normalize-box">
                {this
                    .state
                    .list
                    .map((item, index) => {
                        return (
                            <div className="toastlist" key={index}>
                                <div className="toast-item paper" >
                                    <div className={['pb8', this.handleMapStatus(item.status)].join(' ')} style={{ minWidth: 256 + 'px' }}>{this.handleMapTitle(item.status) || item.title}</div>
                                    <div className="">{item.content}</div>
                                </div>
                            </div>
                        )
                    })}
            </div>
            , this.node)
    }

    componentWillUnmount() {
        this.clearPortalContainer()
    }
}
