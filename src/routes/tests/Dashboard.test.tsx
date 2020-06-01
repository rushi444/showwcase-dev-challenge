import React from 'react'
import { shallow } from 'enzyme'
import { Dashboard } from '../Dashboard'
import { storeFactory } from '../../test/testUtils'
import { Provider } from 'react-redux'

it('dashboard component renders', () => {
  const store = storeFactory({})
  const wrapper = shallow(
    <Provider store={store}>
      <Dashboard />
    </Provider>,
  )
  const dashboard = wrapper.find('Dashboard')
  expect(dashboard.length).toBe(1)
})
