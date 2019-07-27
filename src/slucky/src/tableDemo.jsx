import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'
import { Table, Paging } from './index'

export class TableDemo extends Component {
    constructor() {
        super()
        this.state = {
            pageInfo: {
                currentPage: 1,
                total: 120,
                maxToShow: 20
            }
        }
        setTimeout(() => {
            this.setState({
                pageInfo: {
                    currentPage: 1,
                    total: 150,
                    maxToShow: 20
                }
            })
        }, 1000)
    }
    handleChangePage = (currentPage) => {
        console.log(currentPage);
    }

    render() {
        const demoString = '``` jsx' + `
import React, { Component } from 'react'
import { Table, Paging } from 'slucky'

class TableDemo extends Component {
    handleChangePage = (currentPage) => {
        console.log(currentPage);
    }
    render(){
        const dataconf = [
            {
                title: '',
                width: '10%',
                checkbox: true,
                handle: (list) => {
                    console.log(list)
                }
            },
            {
                title: 'progress',
                name: 'progress',
                width: '25%',
                progress: (data) => {
                    return data['progress']
                },
                pipe: (data) => {
                    return {data['progress']}
                }
            },
            {
                title: 'ID',
                name: 'id',
                width: '10%'
            }, {
                title: '姓名',
                name: 'name',
                width: '10%'
            }, {
                title: '身高',
                name: 'height',
                width: '10%'
            },
            {
                width: '10%',
                name: '提示',
                popup: (data) => {
                    return (
                        <div>
                            <pre className="c-text-w fs18">Title</pre>
                            <pre className="c-text-w">SluckyUI的跨平台性质可快速加工成react，vue，angular的组件</pre>
                            <pre className="c-text-w">SluckyUI的跨平台性质可快速加工成react，vue，angular的组件</pre>
                            <pre className="c-text-w">SluckyUI的跨平台性质可快速加工成react，vue，angular的组件</pre>
                        </div>
                    )
                }
            },
            {
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
                    },
                    {
                        name: '删除',
                        btnType: 'text',
                        handle: (data) => {
                            alert('备注')
                            console.log(data);
                        }
                    }]
            }
        ]
        const dataset = [{
            id: 1,
            name: 'Apple',
            height: 178,
            progress: 30
        }, {
            id: 2,
            name: 'Boy',
            height: 177,
            progress: 60
        }, {
            id: 3,
            name: 'Cat',
            height: 176,
            progress: 90
        }]
        
        const pageInfo = {
            total: 119,
            maxToShow: 20
        }
        return(
            <Table dataconf={dataconf} dataset={dataset} />
            <Paging pageInfo={pageInfo} onAction={this.handleChangePage} />
        )
    }
}
`
        const dataconf = [
            {
                title: '',
                width: '10%',
                checkbox: true,
                handle: (list) => {
                    console.log(list)
                }
            },
            {
                title: 'progress',
                name: 'progress',
                width: '25%',
                progress: (data) => {
                    return data['progress']
                },
                pipe: (data) => {
                    return `${data['progress']}%`
                }
            },
            {
                title: 'ID',
                name: 'id',
                width: '10%'
            }, {
                title: '姓名',
                name: 'name',
                width: '10%'
            }, {
                title: '身高',
                name: 'height',
                width: '10%'
            },
            {
                width: '10%',
                name: '提示',
                popup: (data) => {
                    return (
                        <div>
                            <pre className="c-text-w fs18">Title</pre>
                            <pre className="c-text-w">SluckyUI的跨平台性质可快速加工成react，vue，angular的组件</pre>
                            <pre className="c-text-w">SluckyUI的跨平台性质可快速加工成react，vue，angular的组件</pre>
                            <pre className="c-text-w">SluckyUI的跨平台性质可快速加工成react，vue，angular的组件</pre>
                        </div>
                    )
                }
            },
            {
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
                    },
                    {
                        name: '删除',
                        btnType: 'text',
                        handle: (data) => {
                            alert('备注')
                            console.log(data);
                        }
                    }]
            }
        ]
        const dataset = [{
            id: 1,
            name: 'Apple',
            height: 178,
            progress: 30
        }, {
            id: 2,
            name: 'Boy',
            height: 177,
            progress: 60
        }, {
            id: 3,
            name: 'Cat',
            height: 176,
            progress: 90
        }]

        return (
            <div>
                <div className="ptb32">
                    <Table dataconf={dataconf} dataset={dataset} loading={false} loadingOption={
                        <div data-loader='bounce'>
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                            <div class="bounce4"></div>
                        </div>} />
                    <div className="p16">
                        <Paging pageInfo={this.state.pageInfo} onAction={this.handleChangePage}></Paging>
                        {console.log(this.state.pageInfo)}
                    </div>
                </div>

                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示使用例子</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoString} />)}
                    </Highlight>
                </details>
            </div>
        )
    }
}


