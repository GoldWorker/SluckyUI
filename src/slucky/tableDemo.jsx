import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'

export class TableDemo extends Component {
    handleChangePage = (currentPage) => {
        console.log(currentPage);
    }
    render() {
        const demoString = '``` jsx' + `
const dataconf = [{
    title: 'ID',
    name: 'id',
    width: '25%'
}, {
    title: '姓名',
    name: 'name',
    width: '25%'
}, {
    title: '身高',
    name: 'height',
    width: '25%'
}, {
    title: '',
    width: '25%',
    name: 'action2',
    type: 'action',
    handles: [
        {
            name: '配置',
            btnType: 'text',
            handle: (data) => {
                alert('配置')
                console.log(data);
            }
        }, {
            name: '备注',
            btnType: 'text',
            handle: (data) => {
                alert('备注')
                console.log(data);
            }
        }]
}]

const dataset = [{
    id: 1,
    name: 'Apple',
    height: 178
}, {
    id: 2,
    name: 'Boy',
    height: 177
}, {
    id: 3,
    name: 'Cat',
    height: 176
}]

const pageInfo = {
    total: 119,
    maxToShow: 20
}

handleChangePage = (currentPage) => {
    console.log(currentPage);
}

<Table dataconf={dataconf} dataset={dataset} />
<Paging pageInfo={pageInfo} onAction={this.handleChangePage} />
        `
        const dataconf = [{
            title: 'ID',
            name: 'id',
            width: '25%'
        }, {
            title: '姓名',
            name: 'name',
            width: '25%'
        }, {
            title: '身高',
            name: 'height',
            width: '25%'
        }, {
            title: '',
            width: '25%',
            name: 'action2',
            type: 'action',
            handles: [
                {
                    name: '配置',
                    btnType: 'text',
                    handle: (data) => {
                        alert('配置')
                        console.log(data);
                    }
                }, {
                    name: '备注',
                    btnType: 'text',
                    handle: (data) => {
                        alert('备注')
                        console.log(data);
                    }
                }]
        }]
        const dataset = [{
            id: 1,
            name: 'Apple',
            height: 178
        }, {
            id: 2,
            name: 'Boy',
            height: 177
        }, {
            id: 3,
            name: 'Cat',
            height: 176
        }]
        const pageInfo = {
            total: 119,
            maxToShow: 20
        }
        return (
            <div>
                <div className="ptb32">
                    <Table dataconf={dataconf} dataset={dataset} />
                    <div className="p16">
                        <Paging pageInfo={pageInfo} onAction={this.handleChangePage}></Paging>
                    </div>
                </div>

                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoString} />)}
                    </Highlight>
                </details>
            </div>
        )
    }
}

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

export default class Paging extends Component {
    constructor(props) {
        super(props)
        this.start = 1;
        this.maxWidth = 5;
        this.minWidth = '';
        this.end = '';
        // 分页对象

        this.state = {
            pageInfo: {
                total: this.props.pageInfo.total || 1,
                maxToShow: this.props.pageInfo.maxToShow || 1,
                currentPage: this.props.pageInfo.currentPage || 1
            },
            viewBox: {
                width: '', // 可视容器的宽度
                list: [], // 可视容器列表
                before: false, // 前后省略号
                after: false,
                currentPage: '' // 当前页
            }
        }
    }

    componentDidMount() {
        this.init();
    }

    init() {
        const { pageInfo } = this.state
        this.end = Math.ceil(pageInfo.total / pageInfo.maxToShow);
        this.end > 0
            ? this.end
            : this.end = 1;
        // console.log(this.end);
        this.minWidth = this.end - 2;
        let currentWidth = this.maxWidth > this.minWidth
            ? this.minWidth
            : this.maxWidth;

        this.setState({
            viewBox: {
                width: currentWidth,
                list: ((width) => {
                    let list = [];
                    for (let i = 1; i <= width; i++) {
                        let k = i;
                        list.push(++k);
                    }
                    // console.log(list);
                    return list;
                })(currentWidth),
                before: false,
                after: this.maxWidth < this.minWidth,
                currentPage: pageInfo.currentPage || 1
            }
        })
    }
    handleChangePage(currentPage) {
        // console.log(currentPage);
        currentPage = parseInt(currentPage);
        // 保证临界条件
        if (currentPage < this.start)
            currentPage = this.start;
        if (currentPage > this.end)
            currentPage = this.end;

        // console.log('currentPage', currentPage, this.end);
        this.handleViewBox(currentPage);
        this.props.onAction && this.props.onAction(currentPage);
    }

    handleChangePageSelf(currentPage) {
        currentPage = parseInt(currentPage);
        // 保证临界条件
        if (currentPage < this.start)
            currentPage = this.start;
        if (currentPage > this.end)
            currentPage = this.end;
        this.handleViewBox(currentPage);
    }

    handleChangePageLeft() {
        this.handleChangePage(--this.state.viewBox.currentPage);
    }

    handleChangePageRight() {
        this.handleChangePage(++this.state.viewBox.currentPage);
    }

    // 维护viewBox
    handleViewBox(currentPage) {
        let width = this.state.viewBox.width;

        // console.log('Index', currentPage);
        // 多条件判断
        if (this.end - 2 >= this.maxWidth) {
            // 左临界
            if (currentPage < this.start + Math.floor(width / 2)) {
                let list = [];
                for (let i = this.start + 1; i < this.start + 1 + width; i++) {
                    list.push(i);
                }
                // console.log('l', list);
                this.setState({
                    viewBox: {
                        list,
                        currentPage,
                        before: false,
                        after: true
                    }
                })
                // Object.assign(this.state.viewBox, {
                //     list,
                //     currentPage,
                //     before: false,
                //     after: true
                // });
            }
            // 右临界
            if (currentPage > this.end - Math.ceil(width / 2)) {
                let list = [];
                for (let i = this.end - width; i < this.end; i++) {
                    list.push(i);
                }
                // console.log('r', list);
                this.setState({
                    viewBox: {
                        list,
                        currentPage,
                        before: true,
                        after: false
                    }
                })
                // Object.assign(this.state.viewBox, {
                //     list,
                //     currentPage,
                //     before: true,
                //     after: false
                // });
            }
            // 通常情况
            if (currentPage >= this.start + Math.floor(width / 2) && currentPage <= this.end - Math.ceil(width / 2)) {
                let list = [];
                let i = currentPage - Math.floor(width / 2);
                // 重新判断临界条件
                if (i < 2)
                    i = 2;
                if (i > this.end - width)
                    i = this.end - width;
                while (width--) {
                    list.push(i++);
                }
                // console.log('n', list);
                this.setState({
                    viewBox: {
                        list,
                        currentPage,
                        before: true,
                        after: true
                    }
                })
                // Object.assign(this.state.viewBox, {
                //     list,
                //     currentPage,
                //     before: true,
                //     after: true
                // });
            }
        } else {
            this.setState({
                viewBox: Object.assign(this.state.viewBox, {
                    currentPage,
                    before: false,
                    after: false
                })
            })
            // Object.assign(this.state.viewBox, {
            //     currentPage,
            //     before: false,
            //     after: false
            // });
        }
    }
    render() {
        // console.log(this.start, this.end, this.state.viewBox.currentPage, this.state.viewBox.list);
        const { pageInfo } = this.state
        return (
            <div>
                <div className="d-f ac jc-b">
                    <div>共{pageInfo.total}条，每页{pageInfo.maxToShow}条</div>
                    <div>
                        <button className="btn-paging arrow-left" onClick={() => this.handleChangePageLeft()}></button>
                        <span onClick={() => this.handleChangePage(this.start)} className={['btn-paging', this.start === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ')}>{this.start}</span>
                        {
                            this.state.viewBox.before ? <span>...</span> : null
                        }
                        {
                            this.state.viewBox.list.map((item, i) => {
                                // console.log(item, this.state.viewBox.currentPage);
                                return (
                                    <span key={i} onClick={() => this.handleChangePage(item)} className={['btn-paging', item === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ')} >{item}</span>
                                )
                            })
                        }
                        {
                            this.state.viewBox.after ? <span>...</span> : null
                        }
                        {
                            <span onClick={() => this.handleChangePage(this.end)} className={['btn-paging', this.end === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ')} >{this.end}</span>
                        }
                        <button className="btn-paging arrow-right" onClick={() => this.handleChangePageRight()}></button>
                    </div>
                </div>
            </div>
        )
    }
}

