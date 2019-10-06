import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavDemo from 'slucky/src/navDemo';
import LoadingDemo from 'slucky/src/loadingDemo';
import ButtonDemo from 'slucky/src/buttonDemo';
import { PopupDemo } from 'slucky/src/popupDemo';
import Transfrom3DDemo from 'slucky/src/transfrom3DDemo';
import FormDemo from 'slucky/src/formDemo';
import ColorDemo from 'slucky/src/colorDemo';
import ImageDemo from 'slucky/src/imageDemo';
import { TableDemo } from 'slucky/src/tableDemo';
import { Toast } from 'slucky/src';
import StepsDemo from 'slucky/src/stepsDemo';
import TreeDemo from 'slucky/src/treeDemo';
import SecurityDemo from 'slucky/src/securityDemo';
import { TabLR } from 'slucky/src/component/tab';

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        // const portalContainer = document.getElementById('dialog');
        // console.log(Toast);
        return (
            <div className="">
                <div className="p-r w-full">
                    <div className="p-a pt16 plr32 z1" style={{ right: 0 }}>
                        <span className="fs24"></span>
                        The seed of Components 1874©
                        <a href="https://www.npmjs.com/search?q=slucky" target="_brank"><img className="w32 ml16 mr8" src={require('./images/npm.jpeg')} alt="" /></a>
                        <a href="https://github.com/GoldWorker/SluckyUI" target="_brank"><img className="w32" src={require('./images/github.jpeg')} alt="" /></a>
                    </div>
                    <svg className="fullscreen p-r" style={{ top: -58 + 'px' }}>
                        <use xlinkHref="#icon-sluckyUILogo2"></use>
                    </svg>
                    <div className="ta-c p-r topdown">
                        <svg className="icon icon48">
                            <use xlinkHref="#icon-down"></use>
                        </svg>
                    </div>

                    <TabLR minHeight='1080px' className='plr64' option={[{
                        label: <span className="btn p-r pb4 regularLineMove">按钮<span className="c-hint-b pl8">Button</span></span>,
                        content: <ButtonDemo />
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">菜单列表导航栏<span className="c-hint-b pl8">Nav</span></span>,
                        content: <NavDemo />
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">加载状态<span className="c-hint-b pl8">Loading</span></span>,
                        content: <LoadingDemo />
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">弹框<span className="c-hint-b pl8">Popup</span></span>,
                        content: <PopupDemo />
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">3D效果<span className="c-hint-b pl8">Transfrom3D</span></span>,
                        content: <Transfrom3DDemo />
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">表单<span className="c-hint-b pl8">Form</span></span>,
                        content: <FormDemo />
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">颜色标准<span className="c-hint-b pl8">Color</span></span>,
                        content: <ColorDemo />
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">表格&分页<span className="c-hint-b pl8">Table&paging</span></span>,
                        content: <TableDemo />
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">图片相关<span className="c-hint-b pl8">Image</span></span>,
                        content: <ImageDemo />
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">步骤管理<span className="c-hint-b pl8">Steps</span></span>,
                        content: <StepsDemo />
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">操作树&穿梭框<span className="c-hint-b pl8">Steps</span></span>,
                        content: <TreeDemo />
                    }]} />

                    {/* <div className="tab-box-mod d-f">
                        <div className="tab-contrl s0">
                            <label htmlFor="tab_1">
                                <span className="btn p-r pb4 regularLineMove">菜单列表导航栏<span className="c-hint-b pl8">Nav</span></span>
                            </label>
                            <label htmlFor="tab_3">
                                <span className="btn p-r pb4 regularLineMove">按钮<span className="c-hint-b pl8">Button</span></span>
                            </label>
                            <label htmlFor="tab_2">
                                <span className="btn p-r pb4 regularLineMove">加载状态<span className="c-hint-b pl8">Loading</span></span>
                            </label>
                            <label htmlFor="tab_4">
                                <span className="btn p-r pb4 regularLineMove">弹框<span className="c-hint-b pl8">Popup</span></span>
                            </label>
                        </div>

                        <div className="tab-container flex1 bor-l b-side pl16">
                            <input type="radio" id="tab_1" name="tab" defaultChecked />
                            <div className="tab-content">
                                <NavDemo />
                            </div>

                            <input type="radio" id="tab_3" name="tab" />
                            <div className="tab-content">
                                <ButtonDemo />
                            </div>

                            <input type="radio" id="tab_2" name="tab" />
                            <div className="tab-content">
                                <LoadingDemo />
                            </div>

                            <input type="radio" id="tab_4" name="tab" />
                            <div className="tab-content">
                                <PopupDemo />
                            </div>
                        </div>
                    </div> */}


                    {/* <div className="plr32">
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

                                <input type="radio" id="tab_10" name="tab" />
                                <label className="mr8" htmlFor="tab_10">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">步骤管理Steps</span>
                                </label>
                                <div className="tab-content w-full">
                                    <StepsDemo />
                                </div>

                                <input type="radio" id="tab_11" name="tab" />
                                <label className="mr8" htmlFor="tab_11">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">操作树&穿梭框Steps</span>
                                </label>
                                <div className="tab-content w-full">
                                    <TreeDemo />
                                </div>
                                <input type="radio" id="tab_12" name="tab" />
                                <label className="mr8" htmlFor="tab_12">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">web攻防Security</span>
                                </label>
                                <div className="tab-content w-full">
                                    <SecurityDemo />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        );
    }
}
