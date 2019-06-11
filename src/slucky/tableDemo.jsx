import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'
import { Table, Paging } from 'slucky'

export class TableDemo extends Component {
    handleChangePage = (currentPage) => {
        console.log(currentPage);
    }
    render() {
        const demoString = '``` jsx' + `
class TableDemo extends Component {
    handleChangePage = (currentPage) => {
        console.log(currentPage);
    }
    render(){
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
        return(
            <Table dataconf={dataconf} dataset={dataset} />
            <Paging pageInfo={pageInfo} onAction={this.handleChangePage} />
        )
    }
}
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
                    <summary className="btn-n pl8 pr64 ptb8">显示使用例子</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoString} />)}
                    </Highlight>
                </details>
            </div>
        )
    }
}


