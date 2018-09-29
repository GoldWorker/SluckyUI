import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import NavDemo from "./component/navDemo";
import LoadingDemo from "./component/loadingDemo";
import ButtonDemo from "./component/buttonDemo";
import {PopupDemo, Dialog, Toast, ToastTest} from "./component/popupDemo";
import Transfrom3DDemo from "./component/transfrom3DDemo";
import FormDemo from "./component/formDemo";
import ColorDemo from "./component/colorDemo";
import ImageDemo from "./component/imageDemo";
import TableDemo from "./component/tableDemo";
export default class App extends Component {
    constructor() {
        super()
        this.count = 0
        this.state = {
            toggle: false
        }
    }

    hendleClickToast() {
        this
            .refs
            .toast
            .add(this.count++)
    }

    handleClickToggle() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        // const portalContainer = document.getElementById('dialog');

        return (
            <div className="d-f">
                <div className="slidebar-box-normalize slidebar-hover-b">
                    <input type="checkbox" id="slidebar-switch" className="d-n"/>
                    <div className="slidebar bg-b">
                        <label htmlFor="slidebar-switch" className="slidebar-tool p16 d-f ac jc-r">
                            <span className="mr16">返回</span>
                            <svg className="icon icon16" id="slidebar_in">
                                <use xlinkHref="#icon-test"></use>
                            </svg>
                            <div id="slidebar_out">
                                {/* <svg className="icon icon24" id="slidebar_out">
                                    <use xlinkHref="#icon-test"></use>
                                </svg> */}
                                <div className="d-il p8 plr16 m8 shadow bg-b c-text-w">
                                    菜单
                                </div>
                            </div>
                        </label>
                        <details className="slide-down">
                            <summary className="pl16 c-text-w ptb16">农场管理员</summary>
                            <ul className="menu">
                                <li>
                                    <a>发布土地</a>
                                </li>
                                <li>
                                    <a>发布种子方案</a>
                                </li>
                                <li>
                                    <a>发布服务包</a>
                                </li>
                            </ul>
                        </details>
                        <ul className="menu">
                            <li>
                                <a>发布土地</a>
                            </li>
                            <li>
                                <a>发布种子方案</a>
                            </li>
                            <li>
                                <a>发布服务包</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mark-b"></div>
                </div>

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
                                    <NavDemo/> {/* {ReactDOM.createPortal(
                                        <NavDemo/>, portalContainer)} */}
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
                                    {/* <PopupDemo/> */}
                                    <Dialog open={this.state.toggle}>
                                        asdf123
                                    </Dialog>
                                    <Toast ref="toast"/> {/* <Toast data={this.state.toastList} toggle={this.state.toastToggle}/> */}
                                    <button onClick={() => this.handleClickToggle()}>Toggle</button>
                                    <button onClick={() => this.hendleClickToast()}>Add</button>
                                    <button>asdf</button>
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
                                    <FormDemo/>
                                </div>

                                <input type="radio" id="tab_7" name="tab"/>
                                <label className="mr8" htmlFor="tab_7">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Color</span>
                                </label>
                                <div className="tab-content w-full">
                                    <ColorDemo/>
                                </div>

                                <input type="radio" id="tab_8" name="tab"/>
                                <label className="mr8" htmlFor="tab_8">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Table</span>
                                </label>
                                <div className="tab-content w-full">
                                    <TableDemo/>
                                </div>

                                <input type="radio" id="tab_9" name="tab"/>
                                <label className="mr8" htmlFor="tab_9">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Image</span>
                                </label>
                                <div className="tab-content w-full">
                                    <ImageDemo/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
