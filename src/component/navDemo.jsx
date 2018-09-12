import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'
export default class NavDemo extends Component {
    render() {
        const demoString = '``` html' + `
<ul className="nav-normal">
    <li>A</li>
    <li>B</li>
    <li>123</li>
    <li>adf</li>
    <li>Aadfs1233</li>
</ul>

<nav className="nav bor b-side bg-b c-text-w fw">
    <li className="nav-flag">
        <a href="#">asd</a>
        <svg className="icon icon-test">
            <use xlinkHref="#icon-test"></use>
        </svg>
        <ul className="paper menu bor b-side">
            <li>
                <a href="#">1</a>
            </li>
            <li>
                <a href="#">2</a>
            </li>
            <li>
                <a href="#">3</a>
            </li>
        </ul>
    </li>
    <li className="nav-flag">
        <a href="#">dddddd</a>
        <svg className="icon icon-test">
            <use xlinkHref="#icon-test"></use>
        </svg>
        <ul className="paper menu bor b-side">
            <li className="menu-flag">
                <a href="#">zxcxzc</a>
                <ul className="paper menu bor b-side">
                    <li className="menu-flag">
                        <a href="#">zxcxzc</a>
                        <ul className="paper menu bor b-side">
                            <li>
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">qwf</a>
                    </li>
                    <li>
                        <a href="#">cvvf</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">qwf</a>
            </li>
            <li>
                <a href="#">cvvf</a>
            </li>
        </ul>
    </li>
    <li>
        <a href="#">zxcxzc</a>
    </li>
    <li>
        <a href="#">qwf</a>
    </li>
    <li className="nav-flag">
        <a href="#">cvvf</a>
        <svg className="icon icon-test">
            <use xlinkHref="#icon-test"></use>
        </svg>
        <ul className="paper menu bor b-side">
            <li>
                <a href="#">1</a>
            </li>
            <li>
                <a href="#">2</a>
            </li>
            <li>
                <a href="#">3</a>
            </li>
        </ul>
    </li>
    <li className="nav-flag">
        <a href="#">关于</a>
        <svg className="icon icon-test">
            <use xlinkHref="#icon-test"></use>
        </svg>
        <ul className="paper menu bor b-side">
            <li className="menu-flag">
                <a href="#">联系方式</a>
                <ul className="paper menu bor b-side">
                    <li className="menu-flag">
                        <a href="#">啊发顺丰cxzc</a>
                        <ul className="paper menu bor b-side">
                            <li>
                                <a href="#">发挥</a>
                            </li>
                            <li>
                                <a href="#">其味无穷</a>
                            </li>
                            <li>
                                <a href="#">阿斯顿法国</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">自行车</a>
                    </li>
                    <li>
                        <a href="#">初步</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">qwf</a>
            </li>
            <li>
                <a href="#">cvvf</a>
            </li>
        </ul>
    </li>
</nav>
` + '```';
        return (
            <div>
                <div className="d-n">
                    <svg>
                        <symbol id="icon-test" viewBox="0 0 16 16">
                            <title>test</title>
                            <path
                                className="path1"
                                d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path>
                        </symbol>
                    </svg>
                </div>

                <div className="m32">
                    <ul className="nav-normal">
                        <li>A</li>
                        <li>B</li>
                        <li>123</li>
                        <li>adf</li>
                        <li>Aadfs1233</li>
                    </ul>
                </div>

                <div className="m32">
                    <nav className="nav bor b-side bg-b c-text-w fw">
                        <li className="nav-flag">
                            <a href="#">asd</a>
                            <svg className="icon icon-test">
                                <use xlinkHref="#icon-test"></use>
                            </svg>
                            <ul className="paper menu bor b-side">
                                <li>
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-flag">
                            <a href="#">dddddd</a>
                            <svg className="icon icon-test">
                                <use xlinkHref="#icon-test"></use>
                            </svg>
                            <ul className="paper menu bor b-side">
                                <li className="menu-flag">
                                    <a href="#">zxcxzc</a>
                                    <ul className="paper menu bor b-side">
                                        <li className="menu-flag">
                                            <a href="#">zxcxzc</a>
                                            <ul className="paper menu bor b-side">
                                                <li>
                                                    <a href="#">1</a>
                                                </li>
                                                <li>
                                                    <a href="#">2</a>
                                                </li>
                                                <li>
                                                    <a href="#">3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">qwf</a>
                                        </li>
                                        <li>
                                            <a href="#">cvvf</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">qwf</a>
                                </li>
                                <li>
                                    <a href="#">cvvf</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">zxcxzc</a>
                        </li>
                        <li>
                            <a href="#">qwf</a>
                        </li>
                        <li className="nav-flag">
                            <a href="#">cvvf</a>
                            <svg className="icon icon-test">
                                <use xlinkHref="#icon-test"></use>
                            </svg>
                            <ul className="paper menu bor b-side">
                                <li>
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-flag">
                            <a href="#">关于</a>
                            <svg className="icon icon-test">
                                <use xlinkHref="#icon-test"></use>
                            </svg>
                            <ul className="paper menu bor b-side">
                                <li className="menu-flag">
                                    <a href="#">联系方式</a>
                                    <ul className="paper menu bor b-side">
                                        <li className="menu-flag">
                                            <a href="#">啊发顺丰cxzc</a>
                                            <ul className="paper menu bor b-side">
                                                <li>
                                                    <a href="#">发挥</a>
                                                </li>
                                                <li>
                                                    <a href="#">其味无穷</a>
                                                </li>
                                                <li>
                                                    <a href="#">阿斯顿法国</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">自行车</a>
                                        </li>
                                        <li>
                                            <a href="#">初步</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">qwf</a>
                                </li>
                                <li>
                                    <a href="#">cvvf</a>
                                </li>
                            </ul>
                        </li>
                    </nav>
                </div>

                <div className="m32">
                    <ul className="paper menu bor b-side m16">
                        <li className="menu-flag">
                            <a href="#">安徽</a>
                            <ul className="paper menu bor b-side">
                                <li>
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-flag">
                            <a href="#">秦莞尔</a>
                            <ul className="paper menu bor b-side">
                                <li className="menu-flag">
                                    <a href="#">春风十里</a>
                                    <ul className="paper menu bor b-side">
                                        <li className="menu-flag">
                                            <a href="#">十里桃花</a>
                                            <ul className="paper menu bor b-side">
                                                <li>
                                                    <a href="#">1</a>
                                                </li>
                                                <li>
                                                    <a href="#">2</a>
                                                </li>
                                                <li>
                                                    <a href="#">3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">暗色</a>
                                        </li>
                                        <li>
                                            <a href="#">朝歌</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">长安城</a>
                                </li>
                                <li>
                                    <a href="#">南海郡</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">让他有意义</a>
                        </li>
                        <li>
                            <a href="#">培养台湾</a>
                        </li>
                        <li className="menu-flag">
                            <a href="#">大富大贵</a>
                            <ul className="paper menu bor b-side">
                                <li>
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="slidebar-box-normalize slidebar-hover-b">
                    <input type="checkbox" id="slidebar-switch" className="d-n"/>
                    <div className="slidebar bg-b">
                        <label
                            htmlFor="slidebar-switch"
                            className="slidebar-tool p16 d-f ac jc-r">
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

                <div className="m32 fs12">
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoString}/>)}
                    </Highlight>
                </div>
            </div>
        )
    }
}
