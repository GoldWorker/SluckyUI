import React, { Component } from 'react';

export default class Table extends Component {
    constructor() {
        super();
        this.checkboxList = [];
        this.isAllSelect = false;
    }

    handleCheckboxChange(data, i, checked, callback) {
        console.log(checked);
        if (checked) {
            this
                .checkboxList
                .push(data);
        } else {
            this
                .checkboxList
                .forEach((elem, index) => {
                    if (JSON.stringify(data) === JSON.stringify(elem)) {
                        this
                            .checkboxList
                            .splice(index, 1);
                    }
                });
        }
        callback(this.checkboxList);
    }

    handleCheckboxTieleChange(e, callback) {
        this.isAllSelect = e.target.checked;
        if (this.isAllSelect) {
            this.checkboxList = [...this.props.dataset];
            this.props.dataset.map((item) => {
                return {
                    ...item,
                    checked: true
                };
            });
            console.log(this.props.dataset);
            this.forceUpdate();
        } else {
            this.checkboxList = [];
        }
        console.log(this.checkboxList, e.target.checked);
        this.forceUpdate();
        callback(this.checkboxList);
    }

    handleDisplay(callback, data, i) {
        if (callback === undefined) {
            return true;
        }
        return callback(data, i);

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
                        this.props.loading ? <div className="d-f ac jc table-loading" >
                            {
                                this.props.loadingOption ? this.props.loadingOption : <div data-loader='circle'></div>
                            }
                        </div> : null
                    }

                    <div className="slucky-table" style={{ 'width': this.props.maxWidth, 'maxHeight': this.props.maxHeight }}>
                        {/* table header */}
                        <div className={['table-header d-f ac', this.props.fixTitle ? 'table-fix' : ''].join(' ')}>
                            {
                                this.props.dataconf.map((conf, i) => {
                                    // 全选选项
                                    if (conf.checkbox) {
                                        return <div key={i} className={['ptb24 d-il ta-l table-title s0', i == 0 ? 'pl20' : ''].join(' ')} style={{ 'width': conf.width }}></div>;
                                        // return (
                                        //     <div key={i} className="ptb16 plr6 d-il ta-c table-title s0" style={{ 'width': conf.width }}>
                                        //         <div className="checkbox-box-normalize">
                                        //             <input id="checkbox_normalize_title" type="checkbox" name="c_n"
                                        //                 checked={this.isAllSelect} onChange={(e) => this.handleCheckboxTieleChange(e, conf.handle, this.props.dataset)} />
                                        //             <span className="checkbox-hook ta-c">
                                        //                 <span className="checkbox-hook-in fs12 op0">✓</span>
                                        //             </span>
                                        //             <label htmlFor="checkbox_normalize_title" className="p-r z10"></label>
                                        //         </div>
                                        //     </div>
                                        // );
                                    }
                                    return (
                                        !conf.checkbox && conf.title ? <div className={['ptb24 d-il table-title s0', i == 0 ? 'pl20' : '', this.props.textAlign ? this.props.textAlign : 'ta-l'].join(' ')} style={{ 'width': conf.width }} key={i}>{conf.title}</div> : null
                                    );
                                })
                            }
                        </div>

                        <div className="table-content">
                            {
                                this.props.dataset && this.props.dataset.length == 0 ? <div className="ta-c pt32 pb16 c-hint-b" >
                                    <p>暂无数据</p>
                                </div> : null
                            }
                            {/* main content */}
                            {/* 列循环 */}
                            {
                                this.props.dataset.map((data, i) => {
                                    return (
                                        <div className="table-list d-f ac jc-b p-r" key={i}>
                                            {/* 行循环 */}
                                            {
                                                this.props.dataconf.map((conf, i) => {
                                                    if (conf.progress) {
                                                        return <progress key={i} className="p-a w-full" style={{ height: conf.progressWidth || 2 + 'px', top: 'unset', bottom: 0 }} max="100" value={conf.progress && conf.progress(data)}
                                                            className="progress-loading-table"></progress>;
                                                    }
                                                    return null;

                                                })
                                            }
                                            {
                                                this.props.dataconf.map((conf, k) => {
                                                    return (
                                                        <div className={['d-il ptb12 p-r s0 fw-w', k == 0 ? 'pl20' : '', this.props.textAlign ? this.props.textAlign : 'ta-l'].join(' ')} style="cursor:pointer" style={{ 'width': conf.width }} key={k}>
                                                            {/* Base */}

                                                            {
                                                                !conf.handle && !conf.pipe && !conf.textarea && !conf.progress && !conf.tagList && !conf.input ? <span>{data[conf.name]}</span> : null
                                                            }
                                                            {/* 复杂情况，有多种handle */}
                                                            {
                                                                conf.handles ?
                                                                    Table.handleActions(this, conf.handles, data, i)
                                                                    : null
                                                            }
                                                            {/* Pipe */}
                                                            {
                                                                conf.pipe ?
                                                                    <span className="p-r z10">{conf.pipe(data, i)}</span>
                                                                    : null
                                                            }
                                                            {/* Textarea */}
                                                            {
                                                                conf.textarea ?
                                                                    <textarea rows="4" className="textarea w-full" value={data[conf.name]} readonly></textarea>
                                                                    : null
                                                            }
                                                            {/* Progress */}
                                                            {
                                                                conf.progress && conf.progress(data) ?
                                                                    Table.handleProgress(data, conf)
                                                                    : null
                                                            }
                                                            {/* checkbox */}
                                                            {
                                                                conf.checkbox ?
                                                                    Table.handleCheckbox(this, data, i, conf)
                                                                    : null
                                                            }
                                                            {/* popup */}
                                                            {
                                                                conf.popup ?
                                                                    <div className="pop-box">
                                                                        <div className="b-theme pop-toggle plr4">
                                                                            <span className="c-theme">{conf.name || ''}</span>
                                                                            <div className="pop-main pl8">
                                                                                <div className="pop-content p24 bg-b ta-l shadow fs14">
                                                                                    {
                                                                                        conf.popup(data, i)
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    : null
                                                            }
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

Table.handleActions = (self_this, handles, data, i) => {
    return handles.map((handleItem, j) => {
        return (
            self_this.handleDisplay(handleItem.display, data, i) ?
                <div className="pop-box" key={j}>
                    <div className={['pop-toggle ptb4 mlr4', self_this.handleClass(handleItem.btnType)].join(' ')} onClick={() => handleItem.handle && handleItem.handle(data, i)}>
                        <span>{handleItem.name}</span>
                        {
                            handleItem.pipe ?
                                <div className="pop-main pr8" style={{ 'minWidth': handleItem.width }}>
                                    <div className="pop-content paper bor b-side ptb16 plr12 shadow c-text-b">
                                        {handleItem.pipe(data, i)}
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                </div>
                : null
        );
    });
};

Table.handleProgress = (data, conf) => {
    return (
        <div className="d-il">
            {
                !conf.pipe ?
                    <span className="p-r z10">{data[conf.name]}</span>
                    : null
            }
            {/* <progress max="100" value={conf.progress && conf.progress(data)}
                className="progress-loading"></progress> */}
        </div>
    );
};

Table.handleCheckbox = (self_this, data, i, conf) => {
    return (
        <div className="checkbox-box-normalize">
            <input id={'checkbox_normalize_table' + i}
                type="checkbox"
                name="c_n"
                trigger='core'
                // checked={data.checked}
                onChange={(e) => self_this.handleCheckboxChange(data, i, e.target.checked, conf.handle)} />
            <span className="checkbox-hook ta-c">
                <span className="checkbox-hook-in fs12 op0">✓</span>
            </span>
            <label htmlFor={'checkbox_normalize_table' + i} className="p-r z10"></label>
        </div>
    );
};

Table.handelPopup = (handleItem) => {
    return (
        <div class="pop-box">
            {/* <div className="pop-toggle ptb4 mlr4">
                <div className="pop-main pr8">
                    <div className="pop-content">
                        {handleItem.pipe(data, i)}
                    </div>
                </div>
            </div> */}
        </div>
    );
};
