'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = exports.Validator = function () {
  function Validator() {
    _classCallCheck(this, Validator);

    this.config = {};
    this.result = {};
    this.data = {};
  }

  _createClass(Validator, [{
    key: 'validate',
    value: function validate(data) {
      console.log(data);
      console.log(this.config);
      this.data = data;
      this.result = {};
      for (var item in data) {
        if (data.hasOwnProperty(item)) {
          var val = data[item];
          var res = this.validateItem(item, val);
          if (res) {
            this.result[item] = res;
          }
        }
      }
      console.log(this.result);
      return this.result;
    }
  }, {
    key: 'validateItem',
    value: function validateItem(item, val) {
      var checkerList = this.config[item];
      if (!checkerList) {
        return false;
      }
      var result = {
        key: item,
        isValid: true,
        message: []
      };

      // 遍历检查器
      for (var index = 0; index < checkerList.length; index++) {
        var checkerName = checkerList[index];
        var isValid = Validator.types[checkerName].validate;
        // 只处理非法的情况
        if (!isValid.call(this, val)) {
          var instruction = Validator.types[checkerName].instruction;
          result.isValid = false;
          result.message.push(instruction);
        }
      }
      return result;
    }
    // 最终验证

  }, {
    key: 'isSubmit',
    value: function isSubmit() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      console.log('Debug', this.result, data);
      data && this.validate(data);
      for (var item in this.data) {
        if (this.result[item] !== undefined && !this.result[item].isValid) {
          return false;
        }
      }
      return true;
    }

    // 结果格式化

  }, {
    key: 'formatRes',
    value: function formatRes(type) {
      var sign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

      return this.result[type] && this.result[type].message.join(sign);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.result = {};
    }
  }]);

  return Validator;
}();

// 检查处理器


Validator.types = {};

Validator.types.isEmpty = {
  validate: function validate(value) {
    return value !== '';
  },

  instruction: '不能为空'
};

Validator.types.isArrayEmpty = {
  validate: function validate(value) {
    return value.length !== 0;
  },

  instruction: '请作出正确的选择'
};

Validator.types.isSDK = {
  validate: function validate(value) {
    return (/^\w*.jar*$/.test(value)
    );
  },

  instruction: '文件不合法，仅传jar'
};

Validator.types.isInt = {
  validate: function validate(value) {
    return (/^[1-9]\d*$/.test(value)
    );
  },

  instruction: '必须为整数'
};

Validator.types.isName = {
  validate: function validate(value) {
    return (/^[\u4E00-\u9FA5A-Za-z0-9_]{1,10}$/.test(value)
    );
  },

  instruction: '十个字以内，不能包含特殊字符'
};

Validator.types.isEmail = {
  validate: function validate(value) {
    return (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
    );
  },

  instruction: '邮箱格式不正确'
};

Validator.types.isPw = {
  validate: function validate(value) {
    return (/^[!@#$%^&*_A-Za-z0-9]{8,15}$/.test(value)
    );
  },

  instruction: '由数组，字母，_@#$等组成，不少于8位'
};

Validator.types.isPwAgain = {
  validate: function validate(value) {
    console.log(this);
    if (this.data.password) {
      return this.data.password === value;
    } else {
      return false;
    }
  },

  instruction: '重复输入的密码不相同'
};

Validator.types.isValidString = {
  validate: function validate(value) {
    return !isNaN(value);
  },

  instruction: 'invail Number value'
};