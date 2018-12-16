import React, {
	Component
} from 'react'

class validSearchInput extends Component {
	handleValid(isValid, initial, trigger) {
		if (isValid || isValid === undefined) return initial
		else return trigger
	}
	render() {
		const {
			handleInputChange,
			data,
			name,
			placeholder,
			btnText,
			handleBtnClick
		} = this.props
		return (
			<div className="input">
		        <label htmlFor={name+"register"} className="fs12 c-grey">{name}</label>
			    <br/>
				<div className="search-box-normalize p-r" style={this.handleValid(data.isValid,{'borderColor':'rgba(0, 0, 0, 0.12)'},{'borderColor':'#e74c3c'})}>
				    <input id={name+"register"} onChange={handleInputChange} type="email" className="input input-normal w288" placeholder={placeholder} maxLength="24" required/>
				    <button type="button" className="btn btn-m bg-blue c-text-w search-btn" onClick={handleBtnClick}>{btnText}</button>
				</div>		            
				<br/>
			    <span className="input-ps fs12" style={this.handleValid(data.isValid,{'opacity':'0'},{'opacity':'1'})}>{data.message.map((str)=>(str+" "))}</span>
		    </div>
		)
	}
}

validSearchInput.defaultProps = {
	data: {
		message: []
	}
}

export default validSearchInput