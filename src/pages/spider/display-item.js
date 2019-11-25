import React, {
	Component,
	PropTypes
} from 'react'

const Item = (props) => {
	const {
		title,
		href,
		hits
	} = props.data

	return (
		// style={{backgroundColor:"rgba(40, 57, 101, .5)"}}
		<a href={href} className="hint-box-nor d-b b-blue m16">
		    <div className="p8"><span target="blank">{title}</span></div>
		</a>
	)
}

Item.defaultProps = {
	data: {
		title: "",
		href: "",
		hits: ""
	}
}

export default Item