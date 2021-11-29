import React from 'react';
import { shallow } from 'enzyme';
test('error404', () => {
 const wrapper = shallow(<nopagee />);
 expect(wrapper).toMatchSnapshot();
});