import React from 'react';
import { shallow } from 'enzyme';
test('signup', () => {
 const wrapper = shallow(<login-form />);
 expect(wrapper).toMatchSnapshot();
});