// var data = {
// 	name: test,
// 	pw: 123,
// 	email: "asd@qq.com"
// }

// vaildator.config = {
// 	name: ['isNum'],
// 	pw: ['isPw'],
// 	email: ['isEmail']
// }

// validator.validate(data)

var validator = {
		config: {},
		types: {},
		result: {},
		data: {},
		getConfig: function() {
			return this.config
		},
		validate: function(data) {
			console.log(data)
			console.log(this.config)
			this.data = data
			this.result = {};
			for (var x in data) {
				if (data.hasOwnProperty(x)) {
					var val = data[x]
					var res = this.validateOne(x, val)
					if (res) {
						this.result[x] = res
					}
				}
			}
			console.log(this.result)
			return this.result
		},
		validateOne: function(x, val) {
			var checkerList = this.config[x]
			if (!checkerList) {
				return false
			}
			var result = {
				key: x,
				isValid: true,
				message: []
			}

			// 遍历检查器
			checkerList.map(function(name, index) {
				var checker = this.types[name].validate

				// 只处理非法的情况
				if (!checker.call(this, val)) {
					var instruction = this.types[name].instruction
					result.isValid = false
					result.message.push(instruction)
				}
			}.bind(this))
			return result
		},
		// 最终验证
		isSubmit: function() {
			for (var x in this.config) {
				if (this.result[x] == undefined || !this.result[x].isValid) return false
			}
			return true
		}
	}
	// 检查处理器
validator.types.isEmpty = {
	validate: function(value) {
		return value !== ""
	},
	instruction: "不能为空"
}

validator.types.isName = {
	validate: function(value) {
		return /^[\u4E00-\u9FA5A-Za-z0-9_]{1,10}$/.test(value)
	},
	instruction: "十个字以内，不能包含特殊字符"
}

validator.types.isEmail = {
	validate: function(value) {
		return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
	},
	instruction: "邮箱格式不正确"
}

validator.types.isPw = {
	validate: function(value) {
		return /^[!@#$%^&*_A-Za-z0-9]{8,15}$/.test(value)
	},
	instruction: "由数组，字母，_@#$等组成，不少于8位"
}

validator.types.isPwAgain = {
	validate: function(value) {
		console.log(this)
		if (this.data.password)
			return this.data.password == value
		else return false
	},
	instruction: "重复输入的密码不相同"
}

validator.types.isValidString = {
	validate: function(value) {
		return !isNaN(value)
	},
	instruction: "invail Number value"
}

export default validator

// {
// 	name: {
// 		key: name,
// 		isValid: true,
// 		message: []
// 	}
// }