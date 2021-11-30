import React from 'react';
import { shallow } from 'enzyme';
test('widgets', () => {
 const wrapper = shallow(<widgets />);
 expect(wrapper).toMatchSnapshot();
});