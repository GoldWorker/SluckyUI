import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Text from '../src/component/text';

// const props = {
//   value: 123123123
//   // list: ['first', 'second'],
//   // deleteTodo: jest.fn()
// };

const setup = (props = { value: 123123123 }) => {
    const wrapper = shallow(<Text.Money {...props} />);
    return {
      props,
      wrapper
    };
  };
  
  // const setupByRender = () => {
  //   const wrapper = render(<Text.Money {...props} />);
  //   return {
  //     props,
  //     wrapper
  //   };
  // };
  
  // const setupByMount = () => {
  //   const wrapper = mount(<Text.Money {...props} />);
  //   return {
  //     props,
  //     wrapper
  //   };
  // };
  
  // it('should has Input', () => {
  //   const { wrapper } = setup();
  //   expect(wrapper.find('Input').length).toBe(0);
  // });
  
  describe('<Text />', () => {
    // const props = {
    //   value: 123123123
    // };
    const { wrapper } = setup();
    // const wrapper = shallow(<Text.Money {...props} />);
    // it('should render Text', () => {
    //   console.log(wrapper.debug());
    // });
  
    // it('2. class为"d-il"的元素能正常被渲染', () => {
    //   expect(wrapper.find('.d-il').exists()).toBeTruthy();
    // });
  
    // it('3. div的class为“.d-il”', () => {
    //   expect(wrapper.find('div').hasClass('d-il')).toBeTruthy();
    // });
  
    // it('4. 有1个子元素', () => {
    //   expect(wrapper.find('div').children().length).toBe(1);
    // });
  
    it('应该正确得到文本内容1', () => {
      expect(wrapper.find('div').text()).toBe('123,123,123');
    });
    it('应该正确获取组件类实例', function () {
      // const wrapper = mount(
      //   <Text
      //     value={123123123} />
      // );
  
      const { wrapper } = setup();
  
      const wi = wrapper.instance();
  
      expect(wi.props.value).toEqual(123123123);
    });
  
    // it('6. 测试image标签class', () => {
    //   expect(wrapper.find({ alt: 'logo' }).hasClass('logo')).toBeTruthy();
    // });
  });
  
  // it('calls component toThousands', () => { // class中使用箭头函数来定义方法
  //   const { wrapper } = setup();
  //   const spyFunction = jest.spyOn(wrapper.instance(), 'toThousands');
  //   wrapper.instance().toThousands();
  //   expect(spyFunction).toHaveBeenCalled();
  //   spyFunction.mockRestore();
  // });
