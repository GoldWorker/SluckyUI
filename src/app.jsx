import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import NavDemo from "slucky/dist/navDemo";
import LoadingDemo from "slucky/dist/loadingDemo";
import ButtonDemo from "slucky/dist/buttonDemo";
import { PopupDemo } from "slucky/dist/popupDemo";
import Transfrom3DDemo from "slucky/dist/transfrom3DDemo";
import FormDemo from "slucky/dist/formDemo";
import ColorDemo from "slucky/dist/colorDemo";
import ImageDemo from "slucky/dist/imageDemo";
import { TableDemo } from "slucky/dist/tableDemo";
import { Toast } from "slucky"
export default class App extends Component {
    constructor() {
        super()
    }

    render() {
        // const portalContainer = document.getElementById('dialog');
        console.log(Toast);
        return (
            <div className="d-f jc ">

                <div className="p-r">
                    <div className="p-a pt16 pl32 z1" style={{ right: 0 }}>
                        <span className="fs24"></span>
                        The seed of Components 1874©
                        <a href="https://www.npmjs.com/search?q=slucky" target="_brank"><img className="w32 ml16 mr8" src={require("./images/npm.jpeg")} alt="" /></a>
                        <a href="https://github.com/GoldWorker/SluckyUI" target="_brank"><img className="w32" src={require("./images/github.jpeg")} alt="" /></a>
                    </div>
                    <svg className="fullscreen p-r" style={{ top: -58 + 'px' }}>
                        <use xlinkHref="#icon-sluckyUILogo2"></use>
                    </svg>
                    <div className="ta-c p-r topdown">
                        <svg className="icon icon48">
                            <use xlinkHref="#icon-down"></use>
                        </svg>
                    </div>


                    <div className="plr32">
                        <div className="tab-box-tb w-full">
                            <div className="tab-contrl">
                                <input type="radio" id="tab_1" name="tab" defaultChecked />
                                <label className="mr8" htmlFor="tab_1">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">菜单列表导航栏Nav</span>
                                </label>


                                <div className="tab-content w-full pt32">
                                    <NavDemo />
                                </div>

                                <input type="radio" id="tab_3" name="tab" />
                                <label className="mr8" htmlFor="tab_3">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">按钮Button</span>
                                </label>
                                <div className="tab-content w-full">
                                    <ButtonDemo />
                                </div>

                                <input type="radio" id="tab_2" name="tab" />
                                <label className="mr8" htmlFor="tab_2">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">加载状态Loading</span>
                                </label>
                                <div className="tab-content w-full">
                                    <LoadingDemo />
                                </div>

                                <input type="radio" id="tab_4" name="tab" />
                                <label className="mr8" htmlFor="tab_4">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">弹框Popup</span>
                                </label>
                                <div className="tab-content w-full">
                                    <PopupDemo />
                                </div>

                                <input type="radio" id="tab_5" name="tab" />
                                <label className="mr8" htmlFor="tab_5">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">3D效果Transfrom3D</span>
                                </label>
                                <div className="tab-content w-full">
                                    <Transfrom3DDemo />
                                </div>

                                <input type="radio" id="tab_6" name="tab" />
                                <label className="mr8" htmlFor="tab_6">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">表单Form</span>
                                </label>
                                <div className="tab-content w-full">
                                    <FormDemo />
                                </div>

                                <input type="radio" id="tab_7" name="tab" />
                                <label className="mr8" htmlFor="tab_7">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">颜色标准Color</span>
                                </label>
                                <div className="tab-content w-full">
                                    <ColorDemo />
                                </div>

                                <input type="radio" id="tab_8" name="tab" />
                                <label className="mr8" htmlFor="tab_8">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">表格&分页Table&paging</span>
                                </label>
                                <div className="tab-content w-full">
                                    <TableDemo />
                                </div>

                                <input type="radio" id="tab_9" name="tab" />
                                <label className="mr8" htmlFor="tab_9">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">图片相关Image</span>
                                </label>
                                <div className="tab-content w-full">
                                    <ImageDemo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
