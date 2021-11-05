import React from 'react';
import { shallow } from 'enzyme';
test('navbar', () => {
 const wrapper = shallow(<header />);
 expect(wrapper).toMatchSnapshot();
});