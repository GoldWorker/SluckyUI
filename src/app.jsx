import React, {Component} from 'react'
import NavDemo from "./navDemo";
import LoadingDemo from "./loadingDemo";
import ButtonDemo from "./buttonDemo";
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="m32">
                    <span className="fs24">SluckyUI</span> doc For React
                </div>
                <div className="m32">
                    <div className="tab-box-tb w-full">
                        <div className="tab-contrl">
                            <input type="radio" id="tab_1" name="tab" defaultChecked/>
                            <label className="mr8" htmlFor="tab_1">
                                <div className="radio-out"></div>
                                <span className="pl4">Nav</span>
                            </label>

                            <div className="tab-content w-full">
                                <NavDemo/>
                            </div>

                            <input type="radio" id="tab_3" name="tab"/>
                            <label className="mr8" htmlFor="tab_3">
                                <div className="radio-out"></div>
                                <span className="pl4">Button</span>
                            </label>
                            <div className="tab-content w-full">
                                <ButtonDemo/>
                            </div>

                            <input type="radio" id="tab_2" name="tab"/>
                            <label className="mr8" htmlFor="tab_2">
                                <div className="radio-out"></div>
                                <span className="pl4">NewBanlance</span>
                            </label>
                            <div className="tab-content w-full">
                                <LoadingDemo/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
