import React, {
	Component,
	PropTypes
} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export const createList = (array, Item) => {
	return array.map((elem, index) => {
		return (
			<ReactCSSTransitionGroup
				transitionName="example"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={false}
				transitionLeave={false}>
				<Item data={elem} key={elem.toString+index}/>
			</ReactCSSTransitionGroup>
		)
	})
}