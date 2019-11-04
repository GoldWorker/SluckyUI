<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 20:43:35
 * @LastEditTime: 2019-09-09 20:43:45
 * @LastEditors: Please set LastEditors
 -->

## 交流与学习

[Re从零开始的UI库编写生活-步骤管理组件Steps](https://juejin.im/post/5d62bc3651882576ee50cbfe)

``` jsx
...
import { Steps } from 'slucky';
...
<Steps isCacheData={true} stepset={[{
    title: '步骤1',
    content: (data) => {
        return <div className="p32">
            <Search onChange={(v) => { console.log(v); }} option={['asdf', '123', 'qwer123', 'zxcvqwe23', '2333hhh']} />
        </div>;
    },
    handleNext: (data) => {
        return true;
    }
}, {
    title: '步骤2',
    content: (data, handelNext, handlePre) => {
        return <div className="p32 ta-c">
            <button className="btn-n plr16 ptb4 mr8" onClick={handlePre}>上一步</button>
            <button className="btn-n plr16 ptb4" onClick={handelNext}>下一步</button>
        </div>;
    },
    isCustomCtrl: true
}, {
    title: '步骤3',
    content: (data) => {
        return <div className="p32">
            <Checkbox.GroupBorder className="pb32" defaultValue="Pear" onChange={(selected) => { this.handleChangeCheckbox(selected); }} option={[
                { label: 'Apple', value: 'Apple' },
                { label: <div className="border-sign">Pear</div>, value: 'Pear' },
                { label: 'Orange', value: 'Orange' }
            ]} />
        </div>;
    },
    handleNext: (data) => { return true; }
}, {
    title: '步骤4',
    content: (data) => {
        return <div className="p32">{data.name}</div>;
    },
    handleNext: (data) => { return true; }
}]} onChange={(currentSept) => { console.log(currentSept); }} />
```
