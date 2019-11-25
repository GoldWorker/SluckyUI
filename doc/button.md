<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 20:22:22
 * @LastEditTime: 2019-10-06 16:40:39
 * @LastEditors: Please set LastEditors
 -->
## Button Component

| 属性          | 描述             | 类型    | 默认值 |
| ------------- | ---------------- | ------- | ------ |
| disabled      | 是否禁用         | Boolean | -      |
| loader-inline | 是否显示加载状态 | String  | circle |
> 标有*为测试Bata属性

## 交流与学习

[Re从零开始的UI库编写生活-按钮](https://juejin.im/post/5cd4dd15f265da03914d7d07)

``` html
<div className="btn p-r m32 ptb6 svgMutiLine plr16">
    <svg
        className="btn-svgMutiLine"
        viewBox="0 0 180 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <rect className="shape"></rect>
    </svg>
    <div>SluckyUI</div>
</div>

<div className="btn p-r m32 ptb6 regularLineMove plr16">SluckyUI</div>

<div className="btn p-r m32 ptb6 regularShadowScale plr16">SluckyUI</div>

<div className="btn p-r m32 ptb6 regularShadowMove plr16">SluckyUI</div>

<button className="btn-n ptb6 plr16 m32">SluckyUI</button>

<button className="btn-n ptb6 plr16 m32" disabled={true}>SluckyUI</button>

<div loader-inline='circle'>
    <button className="btn-n ptb6 plr16 m32">SluckyUI</button>
</div>

<button className="btn-w bor b-side ptb6 plr16 m32">SluckyUI</button>

<button className="btn-hollow ptb6 plr16 m32">SluckyUI</button>

<button className="tag-hollow ptb6 plr16 m32">SluckyUI</button>

<button className="tag-text ptb6 plr16 m32">SluckyUI</button>
```
