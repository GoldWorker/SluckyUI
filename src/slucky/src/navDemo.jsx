import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';
import { Tab, Details } from './component/tab';

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
                        <nav className="plr8 pb8">导航栏1</nav>
                        <nav className="plr8 pb8">导航栏2</nav>
                        <nav className="plr8 pb8">导航栏3</nav>
                        <nav className="plr8 pb8">导航栏4</nav>
                        <nav className="plr8 pb8">导航栏5</nav>
                    </div>
                </div>

                <div className="mb32">
                    <nav className="nav bor b-side bg-b c-text-w fw">
                        <li className="nav-flag">
                            <a href="#">导航栏1</a>
                            <svg className="icon icon-test">
                                <use xlinkHref="#icon-test"></use>
                            </svg>
                            <ul className="paper menu bor b-side">
                                <li>
                                    <a href="#">导航栏12</a>
                                </li>
                                <li>
                                    <a href="#">导航栏12</a>
                                </li>
                                <li>
                                    <a href="#">导航栏13</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-flag">
                            <a href="#">导航栏2</a>
                            <svg className="icon icon-test">
                                <use xlinkHref="#icon-test"></use>
                            </svg>
                            <ul className="paper menu bor b-side">
                                <li className="menu-flag">
                                    <a href="#">导航栏21</a>
                                    <ul className="paper menu bor b-side">
                                        <li className="menu-flag">
                                            <a href="#">导航栏211</a>
                                            <ul className="paper menu bor b-side">
                                                <li>
                                                    <a href="#">导航栏2111</a>
                                                </li>
                                                <li>
                                                    <a href="#">导航栏2112</a>
                                                </li>
                                                <li>
                                                    <a href="#">导航栏2113</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">导航栏212</a>
                                        </li>
                                        <li>
                                            <a href="#">导航栏213</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">导航栏22</a>
                                </li>
                                <li>
                                    <a href="#">导航栏23</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">导航栏3</a>
                        </li>
                        <li>
                            <a href="#">导航栏4</a>
                        </li>
                        <li className="nav-flag">
                            <a href="#">导航栏5</a>
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
                            <a href="#">导航栏6</a>
                            <svg className="icon icon-test">
                                <use xlinkHref="#icon-test"></use>
                            </svg>
                            <ul className="paper menu bor b-side">
                                <li className="menu-flag">
                                    <a href="#">导航栏61</a>
                                    <ul className="paper menu bor b-side">
                                        <li className="menu-flag">
                                            <a href="#">导航栏611</a>
                                            <ul className="paper menu bor b-side">
                                                <li>
                                                    <a href="#">导航栏6111</a>
                                                </li>
                                                <li>
                                                    <a href="#">导航栏6112</a>
                                                </li>
                                                <li>
                                                    <a href="#">导航栏6113</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">导航栏612</a>
                                        </li>
                                        <li>
                                            <a href="#">导航栏613</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">导航栏62</a>
                                </li>
                                <li>
                                    <a href="#">导航栏63</a>
                                </li>
                            </ul>
                        </li>
                    </nav>
                </div>

                <div className="mb32">
                    <ul className="paper menu bor b-side m16">
                        <li className="menu-flag">
                            <a href="#">菜单1</a>
                            <ul className="paper menu bor b-side">
                                <li>
                                    <a href="#">菜单11</a>
                                </li>
                                <li>
                                    <a href="#">菜单12</a>
                                </li>
                                <li>
                                    <a href="#">菜单13</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-flag">
                            <a href="#">菜单2</a>
                            <ul className="paper menu bor b-side">
                                <li className="menu-flag">
                                    <a href="#">菜单21</a>
                                    <ul className="paper menu bor b-side">
                                        <li className="menu-flag">
                                            <a href="#">菜单211</a>
                                            <ul className="paper menu bor b-side">
                                                <li>
                                                    <a href="#">菜单2111</a>
                                                </li>
                                                <li>
                                                    <a href="#">菜单2112</a>
                                                </li>
                                                <li>
                                                    <a href="#">菜单2113</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">菜单212</a>
                                        </li>
                                        <li>
                                            <a href="#">菜单213</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">菜单22</a>
                                </li>
                                <li>
                                    <a href="#">菜单23</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">菜单3</a>
                        </li>
                        <li>
                            <a href="#">菜单4</a>
                        </li>
                        <li className="menu-flag">
                            <a href="#">菜单5</a>
                            <ul className="paper menu bor b-side">
                                <li>
                                    <a href="#">菜单51</a>
                                </li>
                                <li>
                                    <a href="#">菜单52</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <Tab.Group layout="tb">
                    <Tab label='hello' defaultChecked={true}>123</Tab>
                    <Tab label='123'>qwer</Tab>
                    <Tab label='qwe'>12asdf3</Tab>
                </Tab.Group>

                <Details summary="test">
                    aafd123
                </Details>

                <details className="pb16 mb16 bor-b b-side-s" open>
                    <summary className="btn-n pl8 pr64 ptb8">显示Demo代码</summary>
                    <Highlight innerHTML={true}>
                        {ReactDOMServer.renderToStaticMarkup(<ReactMarkdown source={demoString} />)}
                    </Highlight>
                </details>

            </div>
        );
    }
}
