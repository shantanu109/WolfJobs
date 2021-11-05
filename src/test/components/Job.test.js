import React from 'react';
import { shallow } from 'enzyme';
test('Job', () => {
 const wrapper = shallow(<post />);
 expect(wrapper).toMatchSnapshot();
});