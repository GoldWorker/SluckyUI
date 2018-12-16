const registerReducer = (state = {}, action) => {
	switch (action.type) {
		case "VERIFY_EMAIL_SUCCESS":
			return Object.assign({}, state, {
				info: action.info
			})
		case "REGISTER_SUCCESS":
			return Object.assign({}, state, {
				info: action.info
			})
		default:
			return state
	}
}

export default registerReducer