import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Text from '../src/component/text';

const props = {
    value: 123123123
};

const setup = (props = { value: 123123123 }) => {
    const wrapper = shallow(<Text.Money {...props} />);
    return {
        props,
        wrapper
    };
};

const sum = function (a, b) {
    return a + b;
};

describe('# Component Text', () => {
    // console.log(<Text.Money />);
    const wrapper = mount(<Text.Money {...props} />);
    it('应该正确得到文本内容1', () => {
        expect(wrapper.find('div').text()).toBe('123,123,123');
    });
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
