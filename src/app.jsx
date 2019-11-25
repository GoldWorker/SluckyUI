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
import Toast from 'slucky/src';
import StepsDemo from 'slucky/src/stepsDemo';
import TreeDemo from 'slucky/src/treeDemo';
import SecurityDemo from 'slucky/src/securityDemo';
import Tab from 'slucky/src/component/tab';

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
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

                    {/* <div className='plr64'>
                        <p className="pl16 pr128 c-hint-b">简介：SluckyUI是一个组件种子库，已将大部分功能组件解耦成样式和DOM结构，为开发团队提供一个可快速二次开发成更加贴合自身业务组件库的渠道。SluckyUI更加关注跨平台性，即可快速二次开发成React,Vue,Angular组件。现在slucky已集成了React组件。</p>
                    </div> */}

                    <Tab.Group minHeight='1080px' className='plr64' option={[{
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
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">实验区<span className="c-hint-b pl8">Test</span></span>,
                        content: <SecurityDemo />
                    }]} />
                </div>

            </div>
        );
    }
}
