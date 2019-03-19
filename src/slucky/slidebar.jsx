import React, {Component} from 'react'

export default class Slidebar extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
