import React, { Component } from 'react'
import { Validator, Toast } from "slucky/src";
import { Input } from "slucky/src/component/input";
import { Radio } from "slucky/src/component/radio";
import { Checkbox } from "slucky/src/component/checkbox";
import { Switch } from "slucky/src/component/switch";
import { Tab } from "slucky/src/component/tab";
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

    handleChangeCheckbox = (selected) => {
        console.log(selected);
    }

    handleChangeSwitch = (e) => {
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
                <Checkbox.Group className="pb32" defaultValue="Pear" onChange={(selected) => { this.handleChangeCheckbox(selected) }} option={[
                    { label: 'Apple', value: 'Apple' },
                    { label: 'Pear', value: 'Pear' },
                    { label: 'Orange', value: 'Orange' }
                ]} />

                <Switch />

                <div className="d-f ac mb24">
                    <div className="w96 s0">
                        <label htmlFor="name">Name:</label>
                    </div>
                    <Input id="name" value={this.state.name} onChange={(name) => { this.setState({ name }) }} error={() => this.Validator.formatRes('name')} />
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
                <Tab.Group>
                    <Tab title='hello' defaultChecked={true}>123</Tab>
                    <Tab title='123'>qwer</Tab>
                    <Tab title='qwe'>12asdf3</Tab>
                </Tab.Group>
            </div>
        )
    }
}
