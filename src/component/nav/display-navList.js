import React, { Component } from 'react'
import {
    IndexLink,
    Link
} from 'react-router'

export const NavList = (props) => {
    const { isLogined } = props;
    return (
        <ul className="list-container">
            <li>
                <IndexLink activeStyle={{ color: "rgba(0, 0, 0, 0.87)" }} activeClassName="bg-w" to="/">首页</IndexLink>
            </li>
            <li>
                <Link activeStyle={{ color: "rgba(0, 0, 0, 0.87)" }} activeClassName="bg-w" to="/article">文章</Link>
            </li>
            <li>
                <Link activeStyle={{ color: "rgba(0, 0, 0, 0.87)" }} activeClassName="bg-w" to="/register">同道</Link>
            </li>
            <li>
                <Link activeStyle={{ color: "rgba(0, 0, 0, 0.87)" }} activeClassName="bg-w" to="/about">关于</Link>
            </li>
            <li>
                <Link activeStyle={{ color: "rgba(0, 0, 0, 0.87)" }} activeClassName="bg-w" to="/slucky">Slucky 轻量级样式库文档</Link>
            </li>
            <li>
                {isLogined ? <Link activeStyle={{ color: "rgba(0, 0, 0, 0.87)" }} activeClassName="bg-w" to="/dnd">自定义</Link> : null}
            </li>
            <li>
                {isLogined ? <Link activeStyle={{ color: "rgba(0, 0, 0, 0.87)" }} activeClassName="bg-w" to="/edit">发布文章</Link> : null}
            </li>
        </ul>
    )
}
