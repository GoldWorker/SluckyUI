import React, { Component } from 'react'
import { Validator, Toast } from "slucky/src";
import { Input } from "slucky/src/component/input";
import { Radio } from "slucky/src/component/radio";
export class ValidatorDemo extends Component {
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

    handleChangeRadio = (e) => {
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="bor b-side p32 mtb32">
                <Radio.Group className="pb32" defaultValue="Pear" onChange={(e) => { this.handleChangeRadio(e) }} option={[
                    { label: 'Apple', value: 'Apple' },
                    { label: 'Pear', value: 'Pear' },
                    { label: 'Orange', value: 'Orange' }
                ]} />
                <div className="d-f ac mb24">
                    <div className="w96 s0">
                        <label htmlFor="name">Name:</label>
                    </div>
                    <Input id="name" onChange={(name) => { this.setState({ name }) }} error={() => this.Validator.formatRes('name')} />
                </div>
                <div className="d-f ac mb24">
                    <div className="w96 s0">
                        <label htmlFor="email">Email:</label>
                    </div>
                    <Input id="email" onChange={(email) => { this.setState({ email }) }} error={() => this.Validator.formatRes('email')} />
                </div>
                <div className="d-f ac mb24">
                    <div className="w96 s0">
                        <label htmlFor="password">Password:</label>
                    </div>
                    <Input id="password" onChange={(password) => { this.setState({ password }) }} error={() => this.Validator.formatRes('password')} />
                </div>
                <div className="w384 ta-c">
                    <button className="btn-n ml8 plr16 ptb8" onClick={this.handelClickSubmit}>校验表单</button>
                </div>
            </div>
        )
    }
}
