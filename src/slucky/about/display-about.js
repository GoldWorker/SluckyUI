import React from 'react'
import Markdown from 'react-markdown'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const About = (props) => {
	const content = `
### 本站以学习交流为主要目的

- 前端由react技术栈搭建
- 值得一提的是样式库用的是由平时经验积累总结而成的“Slucky”库，该样式库极力避免js的耦合，目前为止的样式全由CSS完成，CSS所调度的硬件加速实在是excellent
- 后台则系ngnix+nodejs环境
- 文章主要内容为平时学习的心得体会
`
	return (
		<ReactCSSTransitionGroup
								transitionName="example"
								transitionAppear={true}
								transitionAppearTimeout={500}
								transitionEnter={false}
								transitionLeave={false}>
		<div className="about-box">
			<section className="t3d-container">
		        <input type="radio" id="card_front" name="card-ctrl" defaultChecked/>
		        <div className="card-select-box">
		            <label className="card-select" htmlFor="card_front">Email</label>
		            <label className="card-select" htmlFor="card_back">Phone</label>
		        </div>
		        <input type="radio" id="card_back" name="card-ctrl" className="card-ischecked"/>
		        <div id="card">
		            <figure className="front" id="front">
		            	<div className="checkbox-box-papertoggle w288 shadow">
				            <input id="isSelectPackage" type="checkbox" className="d-n"/>
				            <label htmlFor="isSelectPackage" className="checkbox-papertoggle flex-box">
				                <div className="checkbox-imgbox">
				                    <img src={require("../../images/bg_test.jpg")} alt=""/>
				                </div>
				                <div className="flex1 lh16 pl16">
				                    <p className="bor-b b-divider-b pb8 mb8">
				                        <span>学习交流</span>
				                        <svg className="icon f-r">
				                            <use xlinkHref="#icon-arrow-right"></use>
				                        </svg>
				                    </p>
				                    <span className="c-hint-b fs12">695508580@qq.com</span>
				                </div>
				                <div className="checkbox-mark">
				                    <span>✓</span>
				                    <p>nice</p>
				                </div>
				            </label>
				        </div>
		            </figure>
		            <figure className="back" id="back">
		            	<div className="checkbox-box-papertoggle w288 shadow">
				            <input id="isSelectPackage2" type="checkbox" className="d-n"/>
				            <label htmlFor="isSelectPackage2" className="checkbox-papertoggle flex-box">
				                <div className="checkbox-imgbox">
				                    <img src={require("../../images/bg_test.jpg")} alt=""/>
				                </div>
				                <div className="flex1 lh16 pl16">
				                    <p className="bor-b b-divider-b pb8 mb8">
				                        <span>非诚勿扰</span>
				                        <svg className="icon f-r">
				                            <use xlinkHref="#icon-arrow-right"></use>
				                        </svg>
				                    </p>
				                    <span className="c-hint-b fs12">13160677675</span>
				                </div>
				                <div className="checkbox-mark">
				                    <span>✓</span>
				                    <p>nice</p>
				                </div>
				            </label>
				        </div>
		            </figure>
		        </div>
		    </section>
		    <div className="paper d-b p16 m16">
			    <Markdown source={content}/>
		    </div>
		</div>
		</ReactCSSTransitionGroup>
	)
}

export default About