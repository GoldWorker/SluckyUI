import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
export default class Slidebar extends Component {
    render() {
        return (
            <div>
                <div className="slidebar-box-normalize slidebar-hover-b">
                    <input type="checkbox" id="slidebar-switch" className="d-n" />
                    <div className="slidebar bg-b w256">
                        <label htmlFor="slidebar-switch" className="slidebar-tool p16 d-f ac jc-r">
                            <span className="mr16">返回</span>
                            <svg className="icon icon16" id="slidebar_in">
                                <use xlinkHref="#icon-menu"></use>
                            </svg>
                            <div id="slidebar_out">
                                <svg className="icon icon24 c-theme" id="slidebar_out">
                                    <use xlinkHref="#icon-menu"></use>
                                </svg>
                            </div>
                        </label>
                        <ul className="menu w-full">
                            <li>
                                <NavLink exact to="/" className="nav-item" activeClassName="nav-item-active">首页</NavLink>
                            </li>
                            <li>
                                <NavLink to="/articleList" className="nav-item" activeClassName="nav-item-active">文章</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className="nav-item" activeClassName="nav-item-active">成为Sluckyer</NavLink>
                            </li>
                        </ul>

                        {/* <details className="slide-down">
                            <summary className="pl16 c-text-w ptb16">菜单列表导航栏</summary>
                            <ul className="menu w-full">

                            </ul>
                        </details>
                        <details className="slide-down">
                            <summary className="pl16 c-text-w ptb16">表格</summary>
                            <ul className="menu w-full">
                                <li>
                                    <a className="c-placeholder" href="" >123</a>
                                </li>
                                <li>
                                    <a className="c-placeholder" href="" >123</a>
                                </li>
                                <li>
                                    <a className="c-placeholder" href="" >123</a>
                                </li>
                                <li>
                                    <a className="c-placeholder" href="" >123</a>
                                </li>
                            </ul>
                        </details> */}
                    </div>
                    <div className="mark-b"></div>
                </div>
            </div>
        )
    }
}
