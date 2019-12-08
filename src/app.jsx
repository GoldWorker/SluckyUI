import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavDemo from './pages/demo/navDemo';
import LoadingDemo from './pages/demo/loadingDemo';
import ButtonDemo from './pages/demo/buttonDemo';
import { PopupDemo } from './pages/demo/popupDemo';
import Transfrom3DDemo from './pages/demo/transfrom3DDemo';
import FormDemo from './pages/demo/formDemo';
import ColorDemo from './pages/demo/colorDemo';
import ImageDemo from './pages/demo/imageDemo';
import { TableDemo } from './pages/demo/tableDemo';
import StepsDemo from './pages/demo/stepsDemo';
import TreeDemo from './pages/demo/treeDemo';
import SecurityDemo from './pages/demo/securityDemo';
import { Tab } from 'slucky/src';
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
                        content: <div className="pl16"><ButtonDemo /></div>
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">菜单列表导航栏<span className="c-hint-b pl8">Nav</span></span>,
                        content: <div className="pl16"><NavDemo /></div>
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">加载状态<span className="c-hint-b pl8">Loading</span></span>,
                        content: <div className="pl16"><LoadingDemo /></div>
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">弹框<span className="c-hint-b pl8">Popup</span></span>,
                        content: <div className="pl16"><PopupDemo /></div>
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">3D效果<span className="c-hint-b pl8">Transfrom3D</span></span>,
                        content: <div className="pl16"><Transfrom3DDemo /></div>
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">表单<span className="c-hint-b pl8">Form</span></span>,
                        content: <div className="pl16"><FormDemo /></div>
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">颜色标准<span className="c-hint-b pl8">Color</span></span>,
                        content: <div className="pl16"><ColorDemo /></div>
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">表格&分页<span className="c-hint-b pl8">Table&paging</span></span>,
                        content: <div className="pl16"><TableDemo /></div>
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">图片相关<span className="c-hint-b pl8">Image</span></span>,
                        content: <div className="pl16"><ImageDemo /></div>
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">步骤管理<span className="c-hint-b pl8">Steps</span></span>,
                        content: <div className="pl16"><StepsDemo /></div>
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">操作树&穿梭框<span className="c-hint-b pl8">Tree</span></span>,
                        content: <div className="pl16"><TreeDemo /></div>
                    }, {
                        label: <span className="btn p-r pb4 regularLineMove">实验区<span className="c-hint-b pl8">Test</span></span>,
                        content: <div className="pl16"><SecurityDemo /></div>
                    }]} />
                </div>

            </div>
        );
    }
}
