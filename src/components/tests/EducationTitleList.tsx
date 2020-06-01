import React from 'react'
import { shallow } from 'enzyme'
import { EducationTitleList } from '../EducationTitleList'

it('Education List renders', () => {
  const wrapper = shallow(<EducationTitleList />)
  const educationTitleListContainer = wrapper.find('EducationTitleListContainer')
  expect(educationTitleListContainer.length).toBe(1)
})
