import React from 'react';
import { shallow } from 'enzyme';
import { AddEducation } from '../AddEducation';

it('Add Education component renders', () => {
  const wrapper = shallow(<AddEducation />);
  const addEducationComponent = wrapper.find('AddEducationContainer');
  expect(addEducationComponent.length).toBe(1);
});
