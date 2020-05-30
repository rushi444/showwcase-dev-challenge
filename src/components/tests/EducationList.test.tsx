import React from 'react';
import { shallow } from 'enzyme';
import { EducationList } from '../EducationList';

it('Education List renders', () => {
  const wrapper = shallow(<EducationList />);
  const educationListContainer = wrapper.find('EducationListContainer');
  expect(educationListContainer.length).toBe(1);
});
