import React from 'react'
import { mount } from 'enzyme'
import { EducationCard } from '../EducationCard'
import { testEducationData } from '../../shared/constants'
import { storeFactory } from '../../test/testUtils'
import { Provider } from 'react-redux'

const props = {
  data: { ...testEducationData },
  id: 0,
}

const store = storeFactory({})

it('Education card renders', () => {
  const wrapper = mount(
    <Provider store={store}>
      <EducationCard {...props} />
    </Provider>,
  )
  const EducationCardContainer = wrapper.find('EducationCardContainer')
  expect(EducationCardContainer.length).toBe(1)
})

it('Render correct amount of bullet points', () => {
  const wrapper = mount(
    <Provider store={store}>
      <EducationCard {...props} />
    </Provider>,
  )
  const educationCard = wrapper.find('EducationCard')
  const bulletPoints = educationCard.find('li')
  expect(bulletPoints.length).toBe(3)
})
