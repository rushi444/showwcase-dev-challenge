import React from 'react';
import { shallow } from 'enzyme';
import { DegreeInfoMemo } from '../DegreeInfo';

let props = {
  studyInfo: {
    degree: '',
    fieldOfStudy: '',
    GPA: '',
  },
  setStudyInfo: () => null,
};

it('DegreeInfo component renders', () => {
  const wrapper = shallow(<DegreeInfoMemo {...props} />);
  const degreeInfo = wrapper.find('DegreeInfo')
  expect(degreeInfo.length).toBe(1)
});
