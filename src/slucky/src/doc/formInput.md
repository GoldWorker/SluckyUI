<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 17:16:50
 * @LastEditTime: 2019-09-09 17:18:03
 * @LastEditors: Please set LastEditors
 -->
``` html
<div className="d-f ac mb32">
    <div className="w96 s0">表单Key：</div>
    <div>
        <input
            type="text"
            className="input-normal w384"
            maxLength="100"
            placeholder="placeholder" />
        <div className="fs12 c-fail p-a pt2">显示错误提示</div>
    </div>
</div>

<div className="d-f ac mb32">
    <div>
        <label htmlFor="" className="pb4 mb0 fs12 d-b">表单Key：</label>
            <input
                type="text"
                className="input-down w384"
                maxLength="100"
                placeholder="placeholder" />
        <div className="fs12 c-fail p-a pt2">显示错误提示</div>
    </div>
</div>

<div className="d-f ac mb32">
    <div className="input-search-down">
        <label htmlFor="" className="pb4 mb0 fs12 d-b">表单Key：</label>
            <input
                type="text"
                className="input-down w384"
                placeholder="placeholder"
                maxLength="50" />
            <div className="fs12 c-fail p-a pt2">显示错误提示</div>
            <ul className="input-option paper bor b-side fs12 p0" scrollbar='normal'>
                <li className="p4 bor-b b-side d-f jc-b">Apple</li>
                <li className="p4 bor-b b-side d-f jc-b">Boy</li>
                <li className="p4 bor-b b-side d-f jc-b">Cat</li>
            </ul>
    </div>
</div>

<div className="d-f ac mb32">
    <div className="input-search-normal d-f ac">
        <input
            type="text"
            className="input-normal w384"
            placeholder="placeholder" />
        <button className="fs12 btn-n ptb8 mr2 plr16">搜索</button>
    </div>
</div>
```
