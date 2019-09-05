import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';
import { ValidatorDemo } from './validatorDemo';

export default class FormDemo extends Component {
    constructor() {
        super();
    }

    render() {
        const demoStringValidator = '``` jsx' + `
class ValidatorDemo extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.Validator = new Validator()
        Validator.types.isEmptyTest = {
            validate(value) {
                return value !== '';
            },
            instruction: '不为空自定义校验'
        };
        this.Validator.config = {
            name: ['isEmpty', 'isEmptyTest'],
            email: ['isEmpty', 'isEmptyTest'],
            password: ['isEmpty', 'isInt', 'isEmptyTest']
        };
    }
        
    handelClickSubmit = () => {
        //isSubmit只检测
        if (this.Validator.isSubmit(this.state)) {
            Toast.add('ok')
        } else {
            Toast.add({
                content: 'vali fail',
                status: 'fail'
            })
        }
        //更新校验信息
        this.forceUpdate();
    }
        
    render() {
        return (
            <div className="bor b-side p32 mtb32">
                <div className="d-f ac mb24">
                    <div className="w96 s0">
                    <label htmlFor="name">Name:</label>
                    </div>
                    <Inputs id="name" onChange={(name) => { this.setState({ name }) }} error={() => this.Validator.formatRes('name')} />
                </div>
                <div className="d-f ac mb24">
                    <div className="w96 s0">
                    <label htmlFor="email">Email:</label>
                    </div>
                    <Inputs id="email" onChange={(email) => { this.setState({ email }) }} error={() => this.Validator.formatRes('email')} />
                </div>
                <div className="d-f ac mb24">
                    <div className="w96 s0">
                    <label htmlFor="password">Password:</label>
                    </div>
                    <Inputs id="password" onChange={(password) => { this.setState({ password }) }} error={() => this.Validator.formatRes('password')} />
                </div>
                <div className="w384 ta-c">
                    <button className="btn-n ml8 plr16 ptb8" onClick={this.handelClickSubmit}>校验表单</button>
                </div>
            </div>
        )
    }
}
        `;
        const demoStringInput = '``` html' + `

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
`;

        const demoStringUpload = '``` html' + `
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
`;

        const demoStringSelect = '``` html' + `
<div className="mb32">
    <div className="select-box-normal">
        <div>
            <span className="fs10 pb2 c-hint-b">Age</span>
        </div>
        <select name="" id="select" className="c-icon-b">
            <option defaultValue="Hour">Hour</option>
            <option value="Day">Day</option>
            <option value="Month">Month</option>
        </select>
    </div>
</div>

<div className="mb32">
    <div className="select-box-down">
        <div>
            <span className="fs10 pb2 c-hint-b">Age</span>
        </div>
        <select name="" id="select" className="c-icon-b">
            <option defaultValue="Hour">Hour</option>
            <option value="Day">Day</option>
            <option value="Month">Month</option>
        </select>
    </div>
</div>
`;

        const demoStringCheckbox = '``` html' + `
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
`;

        const demoStringRadio = '``` html' + `
<div className="radio-box-normalize d-il pr16">
    <input
        id="isCallbackReport1"
        type="radio"
        name="managerCallbackReport"
        defaultChecked
        className="d-n" />
    <label className="m0" htmlFor="isCallbackReport1">
        <div className="radio-out">
            <i className="radio-in"></i>
        </div>
        <span className="pl8">SluckyUI是组件库种子</span>
    </label>
</div>

<div className="radio-box-normalize d-il pr16">
    <input
        id="isCallbackReport2"
        type="radio"
        name="managerCallbackReport"
        className="d-n" />
    <label className="m0" htmlFor="isCallbackReport2">
        <div className="radio-out">
            <i className="radio-in"></i>
        </div>
        <span className="pl8">SluckyUI的跨平台性质可快速加工成react，vue，angular的组件</span>
    </label>
</div>
`;

        const demoStringTextarea = '``` html' + `
<textarea name="" id="" cols="50" rows="6" className="textarea"></textarea>
`;
        return (
            <div>
                <p className="bor-l b-theme pl8 fs18 mt32">表单校验 Validator</p>
                <ValidatorDemo />
                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoStringValidator} />)}
                    </Highlight>
                </details>

                <p className="bor-l b-theme pl8 fs18">输入框 Input</p>

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
                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoStringInput} />)}
                    </Highlight>
                </details>


                <p className="bor-l b-theme pl8 fs18">上传 Upload</p>
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
                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoStringUpload} />)}
                    </Highlight>
                </details>

                <p className="bor-l b-theme pl8 fs18">选择框 Select</p>
                <div className="mb32">
                    <div className="select-box-normal">
                        <div>
                            <span className="fs10 pb2 c-hint-b">Age</span>
                        </div>
                        <select name="" id="select" className="c-icon-b">
                            <option defaultValue="Hour">Hour</option>
                            <option value="Day">Day</option>
                            <option value="Month">Month</option>
                        </select>
                    </div>
                </div>

                <div className="mb32">
                    <div className="select-box-down">
                        <div>
                            <span className="fs10 pb2 c-hint-b">Age</span>
                        </div>
                        <select name="" id="select" className="c-icon-b">
                            <option defaultValue="Hour">Hour</option>
                            <option value="Day">Day</option>
                            <option value="Month">Month</option>
                        </select>
                    </div>
                </div>
                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoStringSelect} />)}
                    </Highlight>
                </details>


                <p className="bor-l b-theme pl8 fs18">多选框 Checkbox</p>
                <div className="mb32">
                    <div className="checkbox-box-normalize mr16">
                        <input id="checkbox_normalize_title" type="checkbox" name="c_n" defaultChecked />
                        <span className="checkbox-hook ta-c">
                            <span className="checkbox-hook-in fs12 op0">✓</span>
                        </span>
                        <label htmlFor="checkbox_normalize_title" className="p-r z10 pl8">SluckyUI是组件库种子</label>
                    </div>

                    <div className="checkbox-box-normalize mr16">
                        <input id="checkbox_normalize_title_1" type="checkbox" name="c_n" />
                        <span className="checkbox-hook ta-c">
                            <span className="checkbox-hook-in fs12 op0">✓</span>
                        </span>
                        <label htmlFor="checkbox_normalize_title_1" className="p-r z10 pl8">SluckyUI的跨平台性质可快速加工成react，vue，angular的组件</label>
                    </div>
                </div>
                <div className="mb32 d-f ac">
                    <div className="checkbox-box-soild mr16">
                        <input id="checkbox_box_1" type="checkbox" name="c_n" />
                        <span className="checkbox-hook ta-c">
                            <span className="checkbox-hook-in fs12 op0"></span>
                        </span>
                        <label htmlFor="checkbox_box_1" className="p-r z10 pl8">SluckyUI是组件库种子</label>
                    </div>
                    <div className="checkbox-box-soild mr16">
                        <input id="checkbox_box_2" type="checkbox" name="c_n" defaultChecked />
                        <span className="checkbox-hook ta-c">
                            <span className="checkbox-hook-in fs12 op0"></span>
                        </span>
                        <label htmlFor="checkbox_box_2" className="p-r z10 pl8">SluckyUI的跨平台性质可快速加工成react，vue，angular的组件</label>
                    </div>
                </div>
                <div className="mb32 d-f ac">
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
                            <img src={require('../images/bg_test.jpg')} alt="" />
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
                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoStringCheckbox} />)}
                    </Highlight>
                </details>


                <p className="bor-l b-theme pl8 fs18">单选框 Radio</p>
                <div className="mb32">
                    <div className="radio-box-normalize d-il pr16">
                        <input
                            id="isCallbackReport1"
                            type="radio"
                            name="managerCallbackReport"
                            defaultChecked
                            className="d-n" />
                        <label className="m0" htmlFor="isCallbackReport1">
                            <div className="radio-out">
                                <i className="radio-in"></i>
                            </div>
                            <span className="pl8">SluckyUI是组件库种子</span>
                        </label>
                    </div>
                    <div className="radio-box-normalize d-il pr16">
                        <input
                            id="isCallbackReport2"
                            type="radio"
                            name="managerCallbackReport"
                            className="d-n" />
                        <label className="m0" htmlFor="isCallbackReport2">
                            <div className="radio-out">
                                <i className="radio-in"></i>
                            </div>
                            <span className="pl8">SluckyUI的跨平台性质可快速加工成react，vue，angular的组件</span>
                        </label>
                    </div>
                </div>
                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoStringRadio} />)}
                    </Highlight>
                </details>

                <p className="bor-l b-theme pl8 fs18">富文本框 Textarea</p>
                <div className="mb32">
                    <textarea name="" id="" cols="50" rows="6" className="textarea"></textarea>
                </div>
                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoStringTextarea} />)}
                    </Highlight>
                </details>

            </div>
            // <div>
            //     <div className="d-f ac mb32">
            //         <div>
            //             <label htmlFor="" className="pb4 mb0 fs12 d-b">表单Key：</label>
            //             <input
            //                 onChange={(e) => { this.setState({ name: e.target.value }) }}
            //                 type="text"
            //                 className="input-down w384"
            //                 maxLength="100"
            //                 placeholder="placeholder" />
            //             <div className="fs12 c-fail p-a pt2">显示错误提示</div>
            //             {console.log(this.state)}
            //         </div>
            //     </div>
            // </div>
        );
    }
}
