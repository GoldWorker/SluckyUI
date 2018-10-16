import React, {Component} from 'react'

export default class FormDemo extends Component {
    render() {
        return (
            <div>
                <div className="m32">
                    <div className="input ml24 input-search">
                        <label htmlFor="" className="fs12 c-hint-b mb0">Name | Email</label>
                        <br/>
                        <input
                            type="text"
                            className="input-down"
                            placeholder="What's you name?"
                            maxLength="50"/>
                    </div>
                </div>

                <div className="m32">
                    <div className="input ml24 input-search">
                        <label htmlFor="" className="fs12 c-hint-b mb0">Name | Email</label>
                        <br/>
                        <input
                            type="text"
                            className="input-down"
                            placeholder="What's you name?"
                            maxLength="50"/>
                        <ul className="input-option paper bor b-side fs12 p0" scrollbar='normal'>
                            <li className="p4 bor-b b-side d-f jc-b">
                                123asdf
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="m32">
                    <div className="select-box-down ml24">
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
                <div className="m32">
                    <div className="ptb16 plr6 d-il ta-c table-title s0">
                        <div className="checkbox-box-normalize">
                            <input id="checkbox_normalize_title" type="checkbox" name="c_n" defaultChecked/>
                            <span className="checkbox-hook ta-c">
                                <span className="checkbox-hook-in fs12 op0">✓</span>
                            </span>
                            <label htmlFor="checkbox_normalize_title" className="p-r z10"></label>
                        </div>
                    </div>
                    <div className="ptb16 plr6 d-il ta-c table-title s0">
                        <div className="checkbox-box-normalize">
                            <input id="checkbox_normalize_title_1" type="checkbox" name="c_n"/>
                            <span className="checkbox-hook ta-c">
                                <span className="checkbox-hook-in fs12 op0">✓</span>
                            </span>
                            <label htmlFor="checkbox_normalize_title_1" className="p-r z10"></label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="radio-box-normalize d-il pr16">
                        <input
                            id="isCallbackReport1"
                            type="radio"
                            name="managerCallbackReport"
                            defaultChecked
                            className="d-n"/>
                        <label className="m0" htmlFor="isCallbackReport1">
                            <div className="radio-out">
                                <i className="radio-in"></i>
                            </div>
                            <span>Yes</span>
                        </label>
                    </div>
                    <div className="radio-box-normalize d-il pr16">
                        <input
                            id="isCallbackReport2"
                            type="radio"
                            name="managerCallbackReport"
                            className="d-n"/>
                        <label className="m0" htmlFor="isCallbackReport2">
                            <div className="radio-out">
                                <i className="radio-in"></i>
                            </div>
                            <span>No</span>
                        </label>
                    </div>
                    <div className="m32">
                        <div className="switch-box-normalize">
                            <label htmlFor="switch-input" className="switch-mark-click"></label>
                            <input type="checkbox" defaultValue="1" id="switch-input"/>
                            <div>
                                <i className="switch-move"></i>
                                <span className="switch-horizon"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
