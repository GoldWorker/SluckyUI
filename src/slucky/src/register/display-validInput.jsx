import React, {
	Component,
	PropTypes
} from 'react'

class ValidInput extends Component {

	handleValid(isValid, initial, trigger) {
		if (isValid || isValid === undefined) return initial
		else return trigger
	}
	render() {
		const {
			handleInputChange,
			data,
			name,
			placeholder
		} = this.props
		return (
			<div className="input pt8">
				<label htmlFor={name+"register"} className="fs12 c-grey">{name}</label>
			    <br/>
		        <input id={name+"register"} onChange={handleInputChange} type="text" className="input-normal w288"  placeholder={placeholder} maxLength="32" style={this.handleValid(data.isValid,{'borderColor':'rgba(0, 0, 0, 0.12)'},{'borderColor':'#e74c3c'})} required/>
			    <br/>
			    <span className="input-ps fs12" style={this.handleValid(data.isValid,{'opacity':'0'},{'opacity':'1'})}>{data.message.map((str)=>(str+" "))}</span>
	        </div>
		)
	}
}

ValidInput.defaultProps = {
	data: {
		message: []
	}
}

export default ValidInput