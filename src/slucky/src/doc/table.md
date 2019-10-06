<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 10:17:23
 * @LastEditTime: 2019-10-04 13:58:24
 * @LastEditors: Please set LastEditors
 -->
## 交流与学习

[Re从零开始的UI库编写生活-表格组件](https://juejin.im/post/5d2b052251882557e1179140)

## Table Component

| 属性                   | 描述                                     | 类型       | 默认值 |
|  ------------- ------------ | ------------- ---------------------- -------- | ----- ------- - | ---- ------ - |
| dataset             | 源数据                                 | Array     | -           |
| dataconf           | 数据配置列表                     | Array     | -           |
| loading             | 显示加载状态                     | Boolean | false   |
| loadingOption | 自定义加载时的显示组件 | Object   | -           |
| maxWidth           | 最大宽度                             | String   | -           |
| maxHeight         | 最大高度                             | String   | -           |
| fixTitle           | 固定表头                             | Boolean | -           |

## Paging Component

| 属性          | 描述                   | 类型    | 默认值 |
| ------------- | ---------------------- | ------- | ------ |
| dataset       | 源数据                 | Array   | -      |
| dataconf      | 数据配置列表           | Array   | -      |
| loading       | 显示加载状态           | Boolean | false  |
| loadingOption | 自定义加载时的显示组件 | Object  | -      |
| maxWidth      | 最大宽度               | String  | -      |
| maxHeight     | 最大高度               | String  | -      |
| fixTitle      | 固定表头               | Boolean | -      |

> 标有*为测试Bata属性

## 使用例子
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
