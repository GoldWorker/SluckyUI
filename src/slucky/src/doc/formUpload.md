<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 17:18:31
 * @LastEditTime: 2019-09-09 17:20:11
 * @LastEditors: Please set LastEditors
 -->
``` html
<div className="mb32">
    <div className="fileup-container">
        <div className="fileup">
            <label htmlFor="input-file" className="fileup-in btn ptb4 plr16 c-text-w bg-theme">点击选择</label>
            <input type="file" id="input-file" />
        </div>
        <img src="" alt="" />
    </div>
</div>

<div className="mb32">
    <div className="upload-hollow">
        <label htmlFor="input-file"></label>
        <div className="upload-mark d-f ac jc fs24 fd-c">
            <span>+</span>
            <span className="fs14">显示建议文案</span>
        </div>
        <p className="fs12 c-fail p-a pt2">显示错误提示</p>
        <div className="fileup-container">
            <div className="fileup">
                <input type="file" id="input-file" name="sdkFile" />
                {/* <span className="file-upload-tooltip tooltip-style">显示文件名</span> */}
            </div>
        </div>
        <img alt="" />
    </div>
</div>
```
