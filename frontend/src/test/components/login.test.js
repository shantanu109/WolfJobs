import React from 'react';
import { shallow } from 'enzyme';
test('login', () => {
 const wrapper = shallow(<login-form />);
 expect(wrapper).toMatchSnapshot();
});