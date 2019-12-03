export default class Validator {
    constructor() {
        this.config = {};
        this.result = {};
        this.data = {};
    }

    validate(data) {
        console.log(data);
        console.log(this.config);
        this.data = data;
        this.result = {};
        for (const item in data) {
            if (data.hasOwnProperty(item)) {
                const val = data[item];
                const res = this.validateItem(item, val);
                if (res) {
                    this.result[item] = res;
                }
            }
        }
        console.log(this.result);
        return this.result;
    }
    validateItem(item, val) {
        const checkerList = this.config[item];
        if (!checkerList) {
            return false;
        }
        const result = {
            key: item,
            isValid: true,
            message: []
        };

        // 遍历检查器
        for (let index = 0; index < checkerList.length; index++) {
            const checkerName = checkerList[index];
            const isValid = Validator.types[checkerName].validate;
            // 只处理非法的情况
            if (!isValid.call(this, val)) {
                const instruction = Validator.types[checkerName].instruction;
                result.isValid = false;
                result
                    .message
                    .push(instruction);
            }
        }
        return result;
    }
    // 最终验证
    isSubmit(data = undefined) {
        console.log('Debug', this.result, data);
        data && this.validate(data);
        for (const item in this.data) {
            if (this.result[item] !== undefined && !this.result[item].isValid) {
                return false;
            }
        }
        return true;
    }

    // 结果格式化
    formatRes(type, sign = ',') {
        return this.result[type] && this
            .result[type]
            .message
            .join(sign);
    }

    clear() {
        this.result = {};
    }
}

// 检查处理器
Validator.types = {};

Validator.types.isEmpty = {
    validate(value) {
        return value !== '';
    },
    instruction: '不能为空'
};

Validator.types.isArrayEmpty = {
    validate(value) {
        return value.length !== 0;
    },
    instruction: '请作出合适的选择'
};

Validator.types.isSDK = {
    validate(value) {
        return /^\w*.jar*$/.test(value);
    },
    instruction: '文件不合法，仅传jar'
};

Validator.types.isInt = {
    validate(value) {
        return /^[1-9]\d*$/.test(value);
    },
    instruction: '必须为整数'
};

Validator.types.isName = {
    validate(value) {
        return /^[\u4E00-\u9FA5A-Za-z0-9_]{1,10}$/.test(value);
    },
    instruction: '十个字以内，不能包含特殊字符'
};

Validator.types.isEmail = {
    validate(value) {
        return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
    },
    instruction: '邮箱格式不正确'
};

Validator.types.isPw = {
    validate(value) {
        return /^[!@#$%^&*_A-Za-z0-9]{8,15}$/.test(value);
    },
    instruction: '由数组，字母，_@#$等组成，不少于8位'
};

Validator.types.isPwAgain = {
    validate(value) {
        console.log(this);
        if (this.data.password) {
            return this.data.password === value;
        }
        return false;

    },
    instruction: '重复输入的密码不相同'
};

Validator.types.isValidString = {
    validate(value) {
        return !isNaN(value);
    },
    instruction: 'invail Number value'
};
