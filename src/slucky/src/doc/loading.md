<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 20:24:14
 * @LastEditTime: 2019-09-09 20:24:27
 * @LastEditors: Please set LastEditors
 -->
``` jsx
import { Progress } from "slucky";
...
<Progress.circle percent={30} radius={96} />
<Progress.pie percent={40} />
<Progress.wave percent={60} />
<Progress percent={50} />

<div className="wave-box-seed">
    <div className="wave"></div>
</div>

<div className="mtb32">
    <div className="w128 h128" loader-inline='circle'>
        <div className="c-hint-b">该loading适用于有内嵌内容的情况，该loading适用于有内嵌内容的情况，该loading适用于有内嵌内容的情况</div>
    </div>
</div>

<div className="mtb32">
    <div className="w128 h128 p-r">
        <div className="d-f ac jc loading-container" >
            <div data-loader='circle-side'></div>
        </div>
        <div className="c-hint-b">该loading适用无法内嵌的Dom结构，该loading适用无法内嵌的Dom结构，该loading适用无法内嵌的Dom结构</div>
    </div>
</div>
```
