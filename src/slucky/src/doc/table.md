<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 10:17:23
 * @LastEditTime: 2019-09-09 10:26:59
 * @LastEditors: Please set LastEditors
 -->
``` jsx
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
```

header 1 | header 2
---|---
row 1 col 1 | row 1 col 2
row 2 col 1 | row 2 col 2
