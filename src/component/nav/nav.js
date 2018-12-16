/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-15 17:46:11
 * @version $Id$
 */

import React from 'react'

let renderNav = (arr) => {
	return (
		<ul className="paper menu">
	        {
	        	arr.map(function(node,index){
	        		if (Array.isArray(node)) {
	        			var str = node.shift();
		     			return (
		     					<li key={index} className="menu-flag">
				                    <a href="#">{str}</a>
				                    {
				                    	renderNav(node)
				                    }
				                </li>
		     				)
	        		}else{
	        			return (
								<li key={index}><a href="#">{node}</a></li>
							)
		        	}
		        })
	        }
	     </ul>
	)
}

const Nav = (props) => {

	return (
		<nav className="nav shadow bg-blue c-text-w">
		{
			props.navTree.map(function(node,index){
				if(Array.isArray(node)){
					var str = node.shift();
					return (
							<li key={index} className="nav-flag">
					            <a href="#">{str}</a>
					            <svg className="icon icon-test">
					                <use xlinkHref="#icon-test"></use>
					            </svg>
					            {
					            	renderNav(node)
					            }
					        </li>
						)
				}else{
					return (
							<li key={index} className="nav-flag">
					            <a href="#">{node}</a>
					        </li>
						)
				}
			})
		}
    	</nav>
	)
}

// 传入导航数组
Nav.defaultProps = {
	navTree: ['首页', '文章', '编辑', ['脚手架', ['slucky', 'some']],
		['关于', '联系方式', ['zxc', 'ads', 'num']]
	]
}

export default Nav