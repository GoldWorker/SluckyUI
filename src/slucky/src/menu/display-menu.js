/**
 * menu
 * @authors Your Name (you@example.org)
 * @date    2017-02-15 11:06:09
 * @version $Id$
 */
import React from 'react'

const Menu = (props) => {
	if (props.lists.length > 0) {
		return (
			<ul className="menu">
				{
					props.lists.map(function(list,index){
						return <li key={index}><a>{list}</a></li>
					})
				}
			</ul>
		)
	} else return null;
}

// Menu.propTypes = {
// 	lists: React.PropTypes.array
// }

export default Menu;