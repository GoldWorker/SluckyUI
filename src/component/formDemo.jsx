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
                    <div class="ptb16 plr6 d-il ta-c table-title s0">
                        <div class="checkbox-box-normalize">
                            <input id="checkbox_normalize_title" type="checkbox" name="c_n"/>
                            <span class="checkbox-hook ta-c">
                                <span class="checkbox-hook-in fs12 op0">✓</span>
                            </span>
                            <label for="checkbox_normalize_title" class="p-r z10"></label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
