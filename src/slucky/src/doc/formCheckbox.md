<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 17:19:14
 * @LastEditTime: 2019-09-09 17:19:14
 * @LastEditors: your name
 -->
``` html
<div className="checkbox-box-normalize mr16">
    <input id="checkbox_normalize_title" type="checkbox" name="c_n" defaultChecked />
    <span className="checkbox-hook ta-c">
        <span className="checkbox-hook-in fs12 op0">✓</span>
    </span>
    <label htmlFor="checkbox_normalize_title" className="p-r z10"></label>
</div>

<div className="checkbox-box-soild mr16">
    <input id="checkbox_box_1" type="checkbox" name="c_n" />
    <span className="checkbox-hook ta-c">
        <span className="checkbox-hook-in fs12 op0"></span>
    </span>
    <label htmlFor="checkbox_box_1" className="p-r z10"></label>
</div>

<div className="checkbox-box-papertoggle shadow mb32">
    <input id="isSelectPackage" type="checkbox" className="d-n" />
    <label htmlFor="isSelectPackage" className="checkbox-papertoggle d-f">
        <div className="checkbox-imgbox s0">
            <img src={require("../images/bg_test.jpg")} alt="" />
        </div>
        <div className="pt12 pl16">
            描述Title
            <div className="pt4 c-hint-b fs14">
                Breaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever
            </div>
        </div>
        <div className="checkbox-mark d-f ac jc fd-c">
            <span>✓</span>
            <p>已选择</p>
        </div>
    </label>
</div>

<div className="checkbox-box-fontstyle d-il mr4">
    <input
        id="push_callback"
        value=""
        type="checkbox"
        name="pushSuccessfulCallbackData"
        className="d-n"
        defaultChecked
    />
    <label
        htmlFor="push_callback"
        className="checkbox-fontstyle mb0"
    >
        <span className="fontstyle-sign">✓</span>
        <span className="m0">SluckyUI是组件库种子</span>
    </label>
</div>
<div className="checkbox-box-fontstyle d-il mr4">
    <input
        id="push_callback2"
        value=""
        type="checkbox"
        name="pushSuccessfulCallbackData"
        className="d-n"
    />
    <label
        htmlFor="push_callback2"
        className="checkbox-fontstyle mb0"
    >
        <span className="fontstyle-sign">✓</span>
        <span className="m0">SluckyUI的跨平台性质可快速加工成react，vue，angular的组件</span>
    </label>
</div>

<div className="mb32 d-f ac">
    <span className='pr8'>SluckyUI是组件库种子</span>
    <div className="switch-box-normalize">
        <label htmlFor="switch-input" className="switch-mark-click"></label>
        <input type="checkbox" defaultValue="1" id="switch-input" />
        <div>
            <i className="switch-move"></i>
            <span className="switch-horizon"></span>
        </div>
    </div>
    <span className='pl8'>SluckyUI的跨平台性质可快速加工成react，vue，angular的组件</span>
</div>

<div className="checkbox-box-imgstyle mb32">
    <input id="c_i" type="checkbox" name="c_i" className="d-n" />
    <label htmlFor="c_i" className="checkbox-imgstyle">
        <img src={require('../images/bg_test.jpg')} alt="" />
        <p className="m0">Title</p>
        <div className="checkbox-mark d-f ac jc fd-c"><span>✓</span></div>
    </label>
</div>

<div className="checkbox-box-papertoggle shadow mb32">
    <input id="isSelectPackage" type="checkbox" className="d-n" />
    <label htmlFor="isSelectPackage" className="checkbox-papertoggle d-f">
        <div className="checkbox-imgbox s0">
            <img src={require("../images/bg_test.jpg")} alt="" />
        </div>
        <div className="pt12 pl16">
            描述Title
            <div className="pt4 c-hint-b fs14">
Breaking news, sport, TV, radio and a whole lot more. The BBC informs, educates and entertains - wherever
            </div>
        </div>
        <div className="checkbox-mark d-f ac jc fd-c">
            <span>✓</span>
            <p>已选择</p>
        </div>
    </label>
</div>
```
