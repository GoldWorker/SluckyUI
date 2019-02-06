import React, {Component} from 'react'
import HighorderMessage from "./message/highorder-message";
import Slidebar from "./slidebar";
import HighorderLoginInfo from "./login/highorder-loginInfo";
import HighorderLoginWindow from "./login/highorder-loginWindow";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


export default class Global extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className="nav-normal bor-b b-side pr16">
                    <nav><NavLink exact to="/" className="nav-item" activeClassName="nav-item-active">首页</NavLink></nav>
                    <nav><NavLink to="/edit" className="nav-item" activeClassName="nav-item-active">编辑</NavLink></nav>
                    <nav><NavLink to="/articleList" className="nav-item" activeClassName="nav-item-active">文章</NavLink></nav>
                    <HighorderLoginInfo />
                </div>
                <Slidebar/>
                <HighorderMessage/>
                <HighorderLoginWindow />                
            </div>
        )
    }
}
