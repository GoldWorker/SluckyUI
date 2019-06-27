import React, { Component } from 'react'

export class Paging extends Component {
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
            }
        } else {
            this.setState({
                viewBox: Object.assign(this.state.viewBox, {
                    currentPage,
                    before: false,
                    after: false
                })
            })
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
