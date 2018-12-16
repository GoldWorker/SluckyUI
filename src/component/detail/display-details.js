/**
 * details
 * @authors Your Name (you@example.org)
 * @date    2017-02-15 13:32:58
 * @version $Id$
 */
import React from 'react'
import Menu from '../menu/display-menu.js'

const Details = (props) => {
	return (
		<details className="slide-down">
		    <summary className="pl16 c-text-w">{props.title}</summary>
		    <Menu lists={props.lists}/>
		</details>
	)
}

Details.propTypes = {
	title: React.PropTypes.string.isRequired
}

export default Details