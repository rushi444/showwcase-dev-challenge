import React from 'react';
import { shallow } from 'enzyme';
import { Education } from '../Education';

it('Education component renders', () => {
  const wrapper = shallow(<Education />);
  const educationComponent = wrapper.find('Education');
  expect(educationComponent.length).toBe(1);
});
