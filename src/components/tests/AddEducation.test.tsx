import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { AddEducation } from '../AddEducation'
import { storeFactory } from '../../test/testUtils'

it('Add Education component renders', () => {
  const store = storeFactory({})
  const wrapper = shallow(
    <Provider store={store}>
      <AddEducation />
    </Provider>,
  )
  const addEducationComponent = wrapper.find('AddEducation')
  expect(addEducationComponent.length).toBe(1)
})
