import React from 'react'
import { shallow } from 'enzyme'
import { EducationList } from '../EducationList'
import { Provider } from 'react-redux'
import { storeFactory } from '../../test/testUtils'
import { testEducationData, testEducationData2, testEducationData3 } from '../../shared/constants'

it('Education List renders', () => {
  const store = storeFactory({})
  const wrapper = shallow(
    <Provider store={store}>
      <EducationList educationList={[]} />
    </Provider>,
  )
  const educationListContainer = wrapper.find('EducationList')
  expect(educationListContainer.length).toBe(1)
})

it('renders the correct amount of Education Cards', () => {
  const educationList = [
    { ...testEducationData },
    { ...testEducationData2 },
    { ...testEducationData3 },
  ]
  const wrapper = shallow(<EducationList educationList={educationList} />)
  const educationCards = wrapper.find('EducationCard')
  expect(educationCards.length).toBe(3)
})
