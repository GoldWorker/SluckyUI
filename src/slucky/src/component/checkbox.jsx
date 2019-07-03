import React, { Component } from 'react'

export default class Checkbox extends Component {
    render() {
        return (
            <div className="checkbox-box-soild mr16">
                <input id="checkbox_box_1" type="checkbox" name="c_n" />
                <span className="checkbox-hook ta-c">
                    <span className="checkbox-hook-in fs12 op0"></span>
                </span>
                <label htmlFor="checkbox_box_1" className="p-r z10"></label>
            </div>
        )
    }
}
