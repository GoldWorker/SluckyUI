## SluckyUI

[Blog & Doc](http://www.brandf.cn)

## Description

SluckyUI的理念是打造一个组件种子库，所有组件使用纯css去实现，所有直接去用这个库去构建UI是没问题的，目的是能够以最小代价进行二次开发成适用于各个框架的组件库，如React，Angular，Vue

SluckyUI's idea is to create a component library where all components are implemented using pure CSS, so it's no problem to directly use this library to build uis. The goal is to be able to redevelop the libraries suitable for various frameworks, such as React, Angular and Vue, at the minimum cost

> SluckyUI 已经将一些必须要用框架才能更好地实现的功能封装成React组件，如表格，弹窗等

## Install

```
npm i slucky
```

## How to use SluckyUI

```
import "slucky/sass/normal.scss";
```

## How to change theme

```
//common.scss

//base
$side_b:#f4f4f4; //描边 & 模块分割底色
$side_strong:#cacaca; //按钮描边
$placeholder_b:#cccccc; //input 级别的提示
$divider_b: #E5E5E5; //divider分割线
$hint_b: #888888; //hint & disable
$icon_b: #666666; //icon & secondary
$text_b: #222222; //text
$divider_w: rgba(white, .12); //divider
$hint_w: rgba(white, .3); //hint disable
$icon_w: rgba(white, .7); //icon secondary
$text_w: rgb(255, 255, 255); //text

//status
$success_green:#03b266;
$fail_red:#ff4444;
$warn_yellow:#fc7e36;
$disable:#898183;

//shadow
$shadow_color: 0 2px 2px 0 rgba(0, 0, 0, 0.05),
0 1px 4px 0 rgba(0, 0, 0, 0.08),
0 3px 1px -2px rgba(0, 0, 0, 0.2);

//main color
$theme_color:#000

import "slucky/sass/normal.scss";
```

> 这时就可以使用除二次开发外的SluckyUI组件了，直接前往 http://www.brandf.cn 复制相应组件的代码即可

## How to use SluckyUI for React

```
// ex: 
// a table and paging demo
import { Dialog, Toast, Table, Paging } from 'slucky';

...
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

```

> 如果要直接用SluckyUI的其他组件，直接前往 http://www.brandf.cn 复制相应组件的代码即可

> If you want to use other components of SluckyUI directly, go directly to http://www.brandf.cn and copy the code of the corresponding component


## How to config
Step 1
```
npm i -d slucky
```
Step 2
```
// webpack config
// 处理图片，一些高阶组件包含示例图片，如果你没有引用， 则忽略这条配置
// Handle images, Some higher-order components contain sample images. If you do not have a reference, ignore this configuration
{
    test: /\.(jpg|png|gif|svg)$/,
    use: [{
        loader: 'url-loader'
    }],
    include: [
        path.join(__dirname, 'node_modules/slucky/')
    ]
},
// 处理样式，sluckyUI的基础样式库，必须配置
// Handle styles, sluckyUI's base style library, must be configured
{
    test: /\.scss$/,
    use: ['sass-loader'],
    include: [
        path.join(__dirname, 'src/'),
        path.join(__dirname, 'node_modules/slucky/sass/')
    ]
}
```

## Target
将前端视图与业务逻辑有效解耦，打造出可复用的业务逻辑组件，让开发人员更专注于业务的开发

## Note
- if want to use Highorder Component,you must install redux

#### Display Component（视图层组件）聚合度低，复用性高
建议将视图层组件写成纯组件以更好地与业务逻辑解耦

#### Data Component （数据层组件）聚合度一般，复用性一般

#### Highorder Component （高阶组件）聚合度高，复用性低
