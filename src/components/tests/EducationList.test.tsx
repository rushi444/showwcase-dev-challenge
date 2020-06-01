import React from 'react'
import { shallow } from 'enzyme'
import { EducationList } from '../EducationList'
import { Provider } from 'react-redux'
import { storeFactory } from '../../test/testUtils'

it('Education List renders', () => {
  const store = storeFactory({})
  const wrapper = shallow(
    <Provider store={store}>
      <EducationList />
    </Provider>,
  )
  const educationListContainer = wrapper.find('EducationList')
  expect(educationListContainer.length).toBe(1)
})
