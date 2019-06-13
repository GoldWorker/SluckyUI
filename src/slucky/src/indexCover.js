import React from 'react'
import WeiboHotLists from './spider/highorder-weiboHotList.js'

const IndexCover = (props) => {
	return (
		<div>
			<div className="cover">
			        <div className="content">
			            <div id="large-header" className="large-header">
							<div className="filler"></div>
			            </div>
			        </div>
			</div>
			<div className="cover-container">
			    <div className="login-wrap">
			        <p className="ta-c fs20"><strong>微博热搜榜</strong></p>
			        <div className="login-html">
			            <WeiboHotLists/>
			    	</div>
			    </div>
		    </div>
		</div>
	)
}

export default IndexCover