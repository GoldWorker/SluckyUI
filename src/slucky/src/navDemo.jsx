import React, { Component } from 'react'
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

                <div className="mb32">
                    <div className="nav-normal">
                        <nav className="plr8 pb8">阿尔法</nav>
                        <nav className="plr8 pb8">贝塔</nav>
                        <nav className="plr8 pb8">伽玛</nav>
                        <nav className="plr8 pb8">欧米伽</nav>
                        <nav className="plr8 pb8">西格玛</nav>
                    </div>
                </div>

                <div className="mb32">
                    <nav className="nav bor b-side bg-b c-text-w fw">
                        <li className="nav-flag">
                            <a href="#">阿尔法</a>
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
                            <a href="#">贝塔</a>
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
                            <a href="#">欧米伽</a>
                        </li>
                        <li>
                            <a href="#">西格玛</a>
                        </li>
                        <li className="nav-flag">
                            <a href="#">BR&F</a>
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

                <div className="mb32">
                    <ul className="paper menu bor b-side m16">
                        <li className="menu-flag">
                            <a href="#">阿尔法</a>
                            <ul className="paper menu bor b-side">
                                <li>
                                    <a href="#">连海平</a>
                                </li>
                                <li>
                                    <a href="#">共潮生</a>
                                </li>
                                <li>
                                    <a href="#">千万里</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-flag">
                            <a href="#">贝塔</a>
                            <ul className="paper menu bor b-side">
                                <li className="menu-flag">
                                    <a href="#">无月明</a>
                                    <ul className="paper menu bor b-side">
                                        <li className="menu-flag">
                                            <a href="#">绕芳甸</a>
                                            <ul className="paper menu bor b-side">
                                                <li>
                                                    <a href="#">皆似霰</a>
                                                </li>
                                                <li>
                                                    <a href="#">不觉飞</a>
                                                </li>
                                                <li>
                                                    <a href="#">看不见</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">无纤尘</a>
                                        </li>
                                        <li>
                                            <a href="#">孤月轮</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">初见月</a>
                                </li>
                                <li>
                                    <a href="#">初照人</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">伽马</a>
                        </li>
                        <li>
                            <a href="#">欧米伽</a>
                        </li>
                        <li className="menu-flag">
                            <a href="#">西格玛</a>
                            <ul className="paper menu bor b-side">
                                <li>
                                    <a href="#">无穷已</a>
                                </li>
                                <li>
                                    <a href="#">望相似</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <details className="pb16 mb16 bor-b b-side-s">
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoString} />)}
                    </Highlight>
                </details>

            </div>
        )
    }
}
