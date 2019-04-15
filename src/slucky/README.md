## SluckyUI for React

[Blog & Doc](http://www.brandf.cn)

## How to work
Step 1
```
npm i -d slucky
```
Step 2
```
//webpack config
{
    test: /.jsx$/,
    use: {
        loader: 'babel-loader',
        query: {
            presets: ["env", "stage-0"]
        }
    },
    include: [
        path.resolve(__dirname, 'node_modules/slucky/')
    ]
},{
    test: /\.(jpg|png|gif|svg)$/,
    use: [{
        loader: 'url-loader'
    }],
    include: [
        path.join(__dirname, 'node_modules/slucky/')
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
