import React, {Component} from 'react'
import NavDemo from "./component/navDemo";
import LoadingDemo from "./component/loadingDemo";
import ButtonDemo from "./component/buttonDemo";
import PopupDemo from "./component/popupDemo";
import Transfrom3DDemo from "./component/transfrom3DDemo";
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="m32 pt32">
                    <span className="fs24">SluckyUI</span>
                    doc For React 1874©
                </div>
                <div className="m32">
                    <div className="tab-box-tb w-full">
                        <div className="tab-contrl">
                            <input type="radio" id="tab_1" name="tab" defaultChecked/>
                            <label className="mr8" htmlFor="tab_1">
                                <div className="radio-out"></div>
                                <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Nav</span>
                            </label>

                            <div className="tab-content w-full">
                                <NavDemo/>
                            </div>

                            <input type="radio" id="tab_3" name="tab"/>
                            <label className="mr8" htmlFor="tab_3">
                                <div className="radio-out"></div>
                                <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Button</span>
                            </label>
                            <div className="tab-content w-full">
                                <ButtonDemo/>
                            </div>

                            <input type="radio" id="tab_2" name="tab"/>
                            <label className="mr8" htmlFor="tab_2">
                                <div className="radio-out"></div>
                                <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">NewBanlance</span>
                            </label>
                            <div className="tab-content w-full">
                                <LoadingDemo/>
                            </div>

                            <input type="radio" id="tab_4" name="tab"/>
                            <label className="mr8" htmlFor="tab_4">
                                <div className="radio-out"></div>
                                <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Popup</span>
                            </label>
                            <div className="tab-content w-full">
                                <PopupDemo/>
                            </div>

                            <input type="radio" id="tab_5" name="tab"/>
                            <label className="mr8" htmlFor="tab_5">
                                <div className="radio-out"></div>
                                <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Transfrom3D</span>
                            </label>
                            <div className="tab-content w-full">
                                <Transfrom3DDemo/>
                            </div>

                            <input type="radio" id="tab_6" name="tab"/>
                            <label className="mr8" htmlFor="tab_6">
                                <div className="radio-out"></div>
                                <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Form</span>
                            </label>
                            <div className="tab-content w-full">
                                <Transfrom3DDemo/>
                            </div>

                            <input type="radio" id="tab_7" name="tab"/>
                            <label className="mr8" htmlFor="tab_7">
                                <div className="radio-out"></div>
                                <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Color</span>
                            </label>
                            <div className="tab-content w-full">
                                <Transfrom3DDemo/>
                            </div>

                            <input type="radio" id="tab_8" name="tab"/>
                            <label className="mr8" htmlFor="tab_8">
                                <div className="radio-out"></div>
                                <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Table</span>
                            </label>
                            <div className="tab-content w-full">
                                <Transfrom3DDemo/>
                            </div>

                            <input type="radio" id="tab_9" name="tab"/>
                            <label className="mr8" htmlFor="tab_9">
                                <div className="radio-out"></div>
                                <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Image</span>
                            </label>
                            <div className="tab-content w-full">
                                <Transfrom3DDemo/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
