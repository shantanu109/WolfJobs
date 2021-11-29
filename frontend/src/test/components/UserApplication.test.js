import React from 'react';
import { shallow } from 'enzyme';
test('UserApplication', () => {
 const wrapper = shallow(<helloooooooooo />);
 expect(wrapper).toMatchSnapshot();
});