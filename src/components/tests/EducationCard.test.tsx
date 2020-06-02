import React from 'react'
import { shallow } from 'enzyme'
import { EducationCard } from '../EducationCard'
import { testEducationData } from '../../shared/constants'

const props = {
  data: { ...testEducationData },
  id: 0,
}

it('Education card renders', () => {
  const wrapper = shallow(<EducationCard {...props} />)
  const EducationCardContainer = wrapper.find('EducationCardContainer')
  expect(EducationCardContainer.length).toBe(1)
})

it('Render correct amount of bullet points', () => {
  const wrapper = shallow(<EducationCard {...props} />)
  const bulletPoints = wrapper.find('li')
  expect(bulletPoints.length).toBe(3)
})
