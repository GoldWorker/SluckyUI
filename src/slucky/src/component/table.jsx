import React, { Component } from 'react'

export class Table extends Component {
    constructor() {
        super()
    }

    handleDisplay(callback, data, i) {
        if (callback === undefined) {
            return true;
        } else {
            return callback(data, i);
        }
    }
    handleClass(btnType) {
        switch (btnType) {
            case 'hollow':
                return 'tag-hollow plr16';
            case 'text':
                return 'tag-text plr8';
            default:
                return 'tag-hollow plr16';
        }
    }

    render() {
        return (
            <div>
                <div className="p-r">
                    {
                        this.props.loading ? (<div className="d-f ac jc table-loading" >
                            <div data-loader='circle'></div>
                        </div>) : null
                    }

                    <div className="slucky-table" style={{ 'width': this.props.maxWidth, 'overflow': 'auto', 'maxHeight': this.props.maxHeight }}>
                        {/* table header */}
                        <div className={['bg-title d-f ac', this.props.fixTitle ? 'table-fix' : ''].join(' ')}>
                            {
                                this.props.dataconf.map((conf, i) => {
                                    return (
                                        !conf.checkbox && conf.title ? <div className="ptb16 d-il ta-c table-title s0" style={{ 'width': conf.width }} key={i}>{conf.title}</div> : null
                                    )
                                })
                            }
                        </div>

                        <div className="table-content">
                            {
                                this.props.dataset && this.props.dataset.length == 0 ? (<div className="ta-c pt32 pb16 c-hint-b" >
                                    <p>暂无数据</p>
                                </div>) : null
                            }
                            {/* main content */}
                            {/* 列循环 */}
                            {
                                this.props.dataset.map((data, i) => {
                                    return (
                                        <div className="bor-b b-side" key={i}>
                                            <div className="table-list d-f ac ">
                                                {/* 行循环 */}
                                                {
                                                    this.props.dataconf.map((conf, k) => {
                                                        return (
                                                            <div className="d-il ptb12 plr6 ta-c p-r s0 fw-w" style="cursor:pointer" style={{ 'width': conf.width }} key={k}>
                                                                {/* Base */}
                                                                {
                                                                    !conf.handle && !conf.pipe && !conf.textarea && !conf.progress && !conf.tagList && !conf.input ? <span>{data[conf.name]}</span> : null
                                                                }
                                                                {/* 复杂情况，有多种handle */}
                                                                {
                                                                    conf.handles ? (
                                                                        conf.handles.map((handleItem, j) => {
                                                                            return (
                                                                                this.handleDisplay(handleItem.display, data, i) ? (
                                                                                    <div className="pop-box" key={j}>
                                                                                        <div className={['pop-toggle ptb4 mlr4', this.handleClass(handleItem.btnType)].join(' ')} onClick={() => handleItem.handle && handleItem.handle(data, i)}>
                                                                                            <span>{handleItem.name}</span>
                                                                                            {
                                                                                                handleItem.pipe ? (
                                                                                                    <div className="pop-main pr8" style={{ 'minWidth': handleItem.width }}>
                                                                                                        <div className="pop-content paper bor b-side ptb16 plr12 shadow c-text-b">
                                                                                                            {handleItem.pipe(data, i)}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                ) : null
                                                                                            }
                                                                                        </div>
                                                                                    </div>
                                                                                ) : null
                                                                            )
                                                                        })
                                                                    ) : null
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
