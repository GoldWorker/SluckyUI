<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 17:12:47
 * @LastEditTime: 2019-10-09 13:45:32
 * @LastEditors: Please set LastEditors
 -->
### Validator
关于校验类slucky提供了一些静态方法，使用方式和参数如下：
- `Validator.isSubmit(data)`
- `Validator.formatRes(type,splitSign)`

``` jsx
class ValidatorDemo extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.Validator = new Validator()
        Validator.types.isEmptyTest = {
            validate(value) {
                return value !== '';
            },
            instruction: '不为空自定义校验'
        };
        this.Validator.config = {
            name: ['isEmpty', 'isEmptyTest'],
            email: ['isEmpty', 'isEmptyTest'],
            password: ['isEmpty', 'isInt', 'isEmptyTest']
        };
    }
        
    handelClickSubmit = () => {
        //isSubmit只检测
        if (this.Validator.isSubmit(this.state)) {
            Toast.add('ok')
        } else {
            Toast.add({
                content: 'vali fail',
                status: 'fail'
            })
        }
        //更新校验信息
        this.forceUpdate();
    }
        
    render() {
        return (
            <div className="bor b-side p32 mtb32">
                <div className="d-f ac mb24">
                    <div className="w96 s0">
                    <label htmlFor="name">Name:</label>
                    </div>
                    <Inputs id="name" onChange={(name) => { this.setState({ name }) }} error={() => this.Validator.formatRes('name')} />
                </div>
                <div className="d-f ac mb24">
                    <div className="w96 s0">
                    <label htmlFor="email">Email:</label>
                    </div>
                    <Inputs id="email" onChange={(email) => { this.setState({ email }) }} error={() => this.Validator.formatRes('email')} />
                </div>
                <div className="d-f ac mb24">
                    <div className="w96 s0">
                    <label htmlFor="password">Password:</label>
                    </div>
                    <Inputs id="password" onChange={(password) => { this.setState({ password }) }} error={() => this.Validator.formatRes('password')} />
                </div>
                <div className="w384 ta-c">
                    <button className="btn-n ml8 plr16 ptb8" onClick={this.handelClickSubmit}>校验表单</button>
                </div>
            </div>
        )
    }
}
```
