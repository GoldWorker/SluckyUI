import React, { Component } from 'react';
import Validator from 'slucky/src/component/validator';
import Input from 'slucky/src/component/input';
// import Input from "slucky/distTest";
import Radio from 'slucky/src/component/radio';
import Checkbox from 'slucky/src/component/checkbox';
import Switch from 'slucky/src/component/switch';
import Tab from 'slucky/src/component/tab';
import Select from 'slucky/src/component/select';
import Search from 'slucky/src/component/search';
import Steps from 'slucky/src/component/steps';
import Text from 'slucky/src/component/text';
import Toast from 'slucky/src/component/toast';
// import Checkbox from 'antd';
// import Search from "slucky/distTest/component/search";

export class ValidatorDemo extends Component {
    constructor() {
        super();
        this.state = {
            name: 1,
            email: '123',
            password: '',
            checked: false,
            checkboxDefaultValue: ['Apple'],
            testDemoList: [],
            selected: ['Pear'],
            radioValue: 'Pear',
            numberValue: 1,
            selectValue: ''
        };
        this.Validator = new Validator();
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
            Toast.add('ok');
        } else {
            Toast.add({
                content: 'vali fail',
                status: 'fail'
            });
        }
        //更新校验信息
        this.forceUpdate();
    }

    handleChangeRadio = (e) => {
        console.log(e.target.value);
        this.setState({
            radioValue: e.target.value
        });
    }

    handleChangeCheckbox = (selected) => {
        console.log(selected);
        this.setState({
            selected
        });
    }

    handleChangeSwitch = (e) => {
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="bor b-side p32 mtb32">
                <Text.Money value={''} />
                <button className="btn-n" onClick={() => this.setState({ selected: ['Apple', 'Pear'] })}>t</button>
                {/* <Checkbox.Group
                    options={[
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                    ]}
                    disabled
                    defaultValue={this.state.checkboxDefaultValue}
                    onChange={(checkedValues) => this.handleChangeCheckbox(checkedValues)}
                /> */}
                <button className="btn-n" onClick={() => {
                    this.setState({
                        testDemoList: [
                            { label: 'Apple', value: '1', checked: true },
                            { label: 'Pear', value: '2', checked: true },
                            { label: 'Orange', value: '3' },
                            { label: 'Orange', value: '4' }
                        ]
                    }, () => console.log(this.state));
                }}>TEST</button>

                <Input.Number value={this.state.numberValue} onChange={(value) => this.setState({ numberValue: value })} />

                <Search onSearch={(v) => { console.log(v); }} onChange={(v) => { console.log(v); }} option={['asdf', '123', 'qwer123', 'zxcvqwe23', '2333hhh']} />

                <Select defaultValue="选项2" onChange={(v) => { console.log(v); }} option={[{
                    label: '选项1',
                    value: 'v1'
                }, {
                    label: '选项2',
                    value: 'v2'
                }, {
                    label: '选项3',
                    value: 'v3'
                }]} />

                <Select value={this.state.selectValue} onChange={(v) => { console.log(v); }} option={[{
                    label: '选项1',
                    value: 'v1'
                }, {
                    label: '选项2',
                    value: 'v2'
                }, {
                    label: '选项3',
                    value: 'v3'
                }]} />

                <button onClick={() => this.setState({ selectValue: '选项3' })}>click</button>

                <Search onSearch={(v) => { console.log(v); }} onChange={(v) => { console.log(v); }} option={['asdf', '123', 'qwer123', 'zxcvqwe23', '2333hhh']} />

                <Radio.Group value={this.state.radioValue} className="pb32" onChange={(e) => { this.handleChangeRadio(e); }} option={[
                    { label: 'Apple', value: 'Apple' },
                    { label: 'Pear', value: 'Pear' },
                    { label: 'Orange', value: 'Orange' }
                ]} />
                <Radio.GroupBorder value={this.state.radioValue} className="pb32" onChange={(e) => { this.handleChangeRadio(e); }} option={[
                    { label: 'Apple', value: 'Apple' },
                    { label: 'Pear', value: 'Pear' },
                    { label: 'Orange', value: 'Orange' }
                ]} />

                {/* <Checkbox.Group className="pb32" onChange={(selected, res) => { this.handleChangeCheckbox(selected, res); }} option={this.state.testDemoList} /> */}

                <Checkbox
                    // values={this.state.selected}
                    // defaultValue={['Pear']}
                    className="pb32"
                    onChange={(e) => { console.log(e.target.checked); }}
                    label="Test"
                />

                <Checkbox.Group
                    values={this.state.selected}
                    defaultValue={['Pear']}
                    className="pb32"
                    onChange={(selected) => { this.handleChangeCheckbox(selected); }}
                    option={[
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                    ]} />

                <Checkbox.GroupFontIn
                    values={this.state.selected}
                    defaultValue={['Pear']}
                    className="pb32"
                    onChange={(selected) => { this.handleChangeCheckbox(selected); }}
                    option={[
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                    ]} />

                <Checkbox.GroupBorder
                    values={this.state.selected}
                    defaultValue={['Pear']}
                    className="pb32"
                    onChange={(selected) => { this.handleChangeCheckbox(selected); }}
                    option={[
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                    ]} />

                {/* <Checkbox.GroupBorder className="pb32" defaultValue={['Apple', 'Pear']} onChange={(selected) => { this.handleChangeCheckbox(selected); }} option={[
                    { label: 'Apple', value: 'Apple' },
                    { label: <div className="border-sign">Pear</div>, value: 'Pear' },
                    { label: 'Orange', value: 'Orange' }
                ]} /> */}

                <Switch />

                <div className="d-f ac mb24 mt36">
                    <div className="w96 s0">
                        <label htmlFor="name">Name:</label>
                    </div>
                    <Input type="money" id="name" width="100%" value={this.state.name} onChange={(name) => { this.setState({ name }); }} error={() => this.Validator.formatRes('name')} />
                </div>
                <div className="d-f ac mb24">
                    <div className="w96 s0">
                        <label htmlFor="email">Email:</label>
                    </div>
                    <Input readOnly id="email" value={this.state.email} onChange={(email) => { this.setState({ email }); }} error={() => this.Validator.formatRes('email')} />
                </div>
                <div className="d-f ac mb24">
                    <div className="w96 s0">
                        <label htmlFor="password">Password:</label>
                    </div>
                    <Input id="password" onChange={(password) => { this.setState({ password }); }} error={() => this.Validator.formatRes('password')} />
                </div>
                <div className="w384 ta-c">
                    <button className="btn-n ml8 plr16 ptb8" onClick={this.handelClickSubmit}>校验表单</button>
                </div>

            </div>
        );
    }
}
