import React from 'react';
import { shallow } from 'enzyme';
test('settings', () => {
 const wrapper = shallow(<settings />);
 expect(wrapper).toMatchSnapshot();
});