import React, { Component } from 'react'
import HighorderLoginInfo from "../login/highorder-loginInfo";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


class NavNormalize extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { isLogined } = this.props;
        return (
            <div className="nav-normal bor-b b-side pr16 bg-w">
                <nav><NavLink exact to="/" className="nav-item" activeClassName="nav-item-active">首页</NavLink></nav>
                {isLogined ? <nav><NavLink to="/edit" className="nav-item" activeClassName="nav-item-active">编辑</NavLink></nav> : null}
                <nav><NavLink to="/articleList" className="nav-item" activeClassName="nav-item-active">文章</NavLink></nav>
                <nav><NavLink to="/register" className="nav-item" activeClassName="nav-item-active">成为Sluckyer</NavLink></nav>
                <HighorderLoginInfo />
            </div>
        )
    }
}

export default NavNormalize
