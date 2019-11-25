import React, { Component } from 'react';

export default class Paging extends Component {
    constructor(props) {
        super(props);
        this.start = 1;
        this.maxWidth = 5;
        this.minWidth = '';
        this.end = '';
        // 分页对象

        this.state = {
            pageInfo: {
                total: this.props.pageInfo.total || 0,
                maxToShow: this.props.pageInfo.maxToShow || 0,
                currentPage: this.props.pageInfo.currentPage || 1
            },
            viewBox: {
                width: '', // 可视容器的宽度
                list: [], // 可视容器列表
                before: false, // 前后省略号
                after: false,
                currentPage: '' // 当前页
            }
        };
    }

    componentDidMount() {
        this.init();
    }

    componentWillReceiveProps(nextProps) {
        // 在重新render之前更新state不会重新触发生命周期
        // console.log('componentWillReceiveProps', nextProps, this.props);
        this.setState({
            pageInfo: {
                total: nextProps.pageInfo.total || 0,
                maxToShow: nextProps.pageInfo.maxToShow || 0,
                currentPage: nextProps.pageInfo.currentPage || 1
            },
            viewBox: {
                width: '', // 可视容器的宽度
                list: [], // 可视容器列表
                before: false, // 前后省略号
                after: false,
                currentPage: '' // 当前页
            }
        }, () => {
            if (nextProps.pageInfo.currentPage && this.state.viewBox) {
                this.init(() => this.handleResizeViewBox(nextProps.pageInfo.currentPage));
            } else {
                this.init();
            }
        });
    }

    init(cb) {
        const { pageInfo } = this.state;
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
        }, () => {
            // console.log('init', this.state.viewBox);
            cb && cb();
        });
    }
    handleChangePage(currentPage, isOnAction = true) {
        // 保证临界条件
        let currentPageSelf = parseInt(currentPage);
        if (currentPageSelf < this.start) { currentPageSelf = this.start; }
        if (currentPageSelf > this.end) { currentPageSelf = this.end; }
        this.props.isSingleDataFlow && this.handleResizeViewBox(currentPageSelf);
        this.props.onAction && this.props.onAction(currentPageSelf);
    }

    handleResizeViewBox(currentPage) {
        // 保证临界条件
        let currentPageSelf = parseInt(currentPage);
        if (currentPageSelf < this.start) { currentPageSelf = this.start; }
        if (currentPageSelf > this.end) { currentPageSelf = this.end; }
        this.handleViewBox(currentPageSelf);
    }

    handleChangePageLeft() {
        this.handleChangePage(--this.state.viewBox.currentPage);
    }

    handleChangePageRight() {
        this.handleChangePage(++this.state.viewBox.currentPage);
    }

    // 维护viewBox
    handleViewBox(currentPage) {
        // console.log('handleViewBox', this.state);
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
                    viewBox: Object.assign(this.state.viewBox, {
                        list,
                        currentPage,
                        before: false,
                        after: true
                    })
                }, () => {
                    // console.log('handleViewBox l', this.state.viewBox)
                });
            }
            // 右临界
            if (currentPage > this.end - Math.ceil(width / 2)) {
                let list = [];
                for (let i = this.end - width; i < this.end; i++) {
                    list.push(i);
                }
                // console.log('r', list);
                this.setState({
                    viewBox: Object.assign(this.state.viewBox, {
                        list,
                        currentPage,
                        before: true,
                        after: false
                    })
                }, () => {
                    // console.log('handleViewBox r', this.state.viewBox)
                });
            }
            // 通常情况
            if (currentPage >= this.start + Math.floor(width / 2) && currentPage <= this.end - Math.ceil(width / 2)) {
                let list = [];
                let i = currentPage - Math.floor(width / 2);
                // 重新判断临界条件
                if (i < 2) { i = 2; }
                if (i > this.end - width) { i = this.end - width; }
                while (width--) {
                    list.push(i++);
                }
                // console.log('n', list);
                this.setState({
                    viewBox: Object.assign(this.state.viewBox, {
                        list,
                        currentPage,
                        before: true,
                        after: true
                    })
                }, () => {
                    // console.log('handleViewBox n', this.state.viewBox)
                });
            }
        } else {
            this.setState({
                viewBox: Object.assign(this.state.viewBox, {
                    currentPage,
                    before: false,
                    after: false
                })
            }, () => {
                // console.log('handleViewBox', this.state.viewBox)
            });
        }
    }
    render() {
        // console.log(this.start, this.end, this.state.viewBox.currentPage, this.state.viewBox.list);
        const { pageInfo } = this.state;
        return (
            <div>
                <div className={['d-f ac jc-b', this.props.style || 'paging-normal'].join(' ')}>
                    <div className="fs12">共<strong className="plr4">{pageInfo.total}</strong>条，每页<strong className="plr4">{pageInfo.maxToShow}</strong>条</div>
                    <div className="paging-viewbox">
                        <span className="btn-paging arrow-left" onClick={() => this.handleChangePageLeft()}></span>
                        <span onClick={() => this.handleChangePage(this.start)} className={['btn-paging', this.start === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ')}>{this.start}</span>
                        {
                            this.state.viewBox.before ? <span className="mr8">...</span> : null
                        }
                        {
                            this.state.viewBox.list.map((item, i) => {
                                // console.log(item, this.state.viewBox.currentPage);
                                return (
                                    <span key={i} onClick={() => this.handleChangePage(item)} className={['btn-paging', item === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ')} >{item}</span>
                                );
                            })
                        }
                        {
                            this.state.viewBox.after ? <span className="mr8">...</span> : null
                        }
                        {
                            this.state.viewBox.width >= 0 ? <span onClick={() => this.handleChangePage(this.end)} className={['btn-paging', this.end === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ')} >{this.end}</span> : null
                        }
                        <span className="btn-paging arrow-right" onClick={() => this.handleChangePageRight()}></span>
                    </div>
                </div>
            </div>
        );
    }
}
