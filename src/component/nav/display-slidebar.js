/**
 * slidebar
 * @authors Your Name (you@example.org)
 * @date    2017-02-15 13:42:48
 * @version $Id$
 */

import React from 'react'
import {
	IndexLink,
	Link
} from 'react-router'
import LoginInfo from '../login/highorder-loginInfo.js'

const SlideBar = (props) => {
	return (
		<div className="slidebar-box-normalize">
			<input type="checkbox" id="slidebar-switch" className="d-n" />
			<div className="slidebar bg-purple">
				<label htmlFor="slidebar-switch" className="slidebar-tool lh56 plr16">
					<span className="mr16">Back</span>
					<svg className="icon icon16" id="slidebar_in">
						<use xlinkHref="#icon-test"></use>
					</svg>
					<div id="slidebar_out">
						<svg className="icon icon16" id="slidebar_out">
							<use xlinkHref="#icon-test"></use>
						</svg>
					</div>
				</label>
				<ul className="menu slidebar-menu">
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
				</ul>
				<div className="slidebar-login-box">
					<LoginInfo />
				</div>
			</div>
			<div className="mark-b"></div>
		</div>
	)
}

export default SlideBar