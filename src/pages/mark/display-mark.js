import React, {
	Component,
	PropTypes
} from 'react'

const Mark = (props) => {
	return (
		<div className="dialog-mark-w" style={props.isToggle?{display:'block'}:{display:'none'}}>
					<div className="icon-box">
			            <div className="yu-icon">
			                <div className="spinner">
			                    <div className="double-bounce1"></div>
			                    <div className="double-bounce2"></div>
			                </div>
			            </div>
			     	</div>
		</div>
	)
}

export default Mark