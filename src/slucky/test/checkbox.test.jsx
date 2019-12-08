import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Checkbox from '../src/component/checkbox';

describe('Component Checkbox', () => {
    it('点击一次后得到正确的输出', () => {
        const changeFn = jest.fn();
        const wrapper = mount(<Checkbox
            className="pb32"
            onChange={changeFn}
            label="Test"
        />);
        // wrapper.find('input[type=\'checkbox\']').simulate('change', {
        //     preventDefault() { },
        //     target: {
        //         checked: true
        //     }
        // });

        // expect(changeFn).toBeCalledWith(true);

        // wrapper.find('input[type=\'checkbox\']').simulate('change', {
        //     target: {
        //         checked: true
        //     }
        // });

        // expect(changeFn).toBeCalledWith(true);

        // wrapper.find('input[type=\'checkbox\']').simulate('change');
        wrapper.find('input[type=\'checkbox\']').simulate('change');


        // expect(changeFn).toHaveBeenCalledWith('');

        // wrapper.find('input[type=\'checkbox\']').simulate('change', {
        //     preventDefault() { },
        //     target: {
        //         checked: false
        //     }
        // });

        // expect(changeFn).toBeCalledWith(true);

        // expect(changeFn).toHaveBeenCalledWith('This is just for test');

        // console.log(changeFn.called);

        // expect(changeFn.calledOnce).toBe(true);

        // expect(changeFn.mock.calls[0][0]).toBe('checked');

        // expect(changeFn).toBeCalled();

        // expect(changeFn).toBeCalledWith(true);
        // const onChangeFn = wrapper.find("input[type='checkbox']").prop('onChange');
        // onChangeFn();
        // console.log(wrapper.debug());
        // console.log(wrapper.find('input[type=\'checkbox\']').props());
        // expect(wrapper.find('input[type=\'checkbox\']').props().checked).toEqual(true);
    });

    // it('点击取消后得到正确的输出', () => {
    //     const changeFn = jest.fn();
    //     const wrapper = shallow(<Checkbox
    //         className="pb32"
    //         onChange={changeFn}
    //         label="Test"
    //     />);
    //     wrapper.find('input[type=\'checkbox\']').simulate('change');
    //     // expect(changeFn).toBeCalledWith(false);
    //     expect(changeFn).toHaveBeenCalledWith(false);
    // });
});

describe('CheckboxGroup', () => {
    it('base', () => {
        const handleChange = jest.fn();
        const wrapper = mount(<Checkbox.Group
            // values={this.state.selected}
            defaultValue={['Pear']}
            className="pb32"
            onChange={handleChange}
            option={[
                { label: 'Apple', value: 'Apple' },
                { label: 'Pear', value: 'Pear' },
                { label: 'Orange', value: 'Orange' }
            ]} />);

        // wrapper.find('input[type=\'checkbox\']').at(0).simulate('change');
        // const changeFn = wrapper.find('input[type=\'checkbox\']').at(0).prop('onChange');

        // changeFn();

        // console.log(wrapper.find('input[type=\'checkbox\']').at(0).debug());

        // expect(handleChange).toHaveBeenCalledWith(['Apple', 'Pear']);

    });

    function drinkAll(callback, flavour) {
        if (flavour !== 'octopus') {
            callback(flavour);
        }
    }

    it('testFn something lemon-flavoured', () => {
        const testFn = jest.fn();
        drinkAll(testFn, {});
        expect(testFn).toHaveBeenCalledWith('');
    });
});
