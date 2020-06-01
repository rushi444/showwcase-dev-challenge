import React from 'react'
import { mount } from 'enzyme'
import { SchoolDropdownMemo } from '../SchoolDropdown'
import { Provider } from 'react-redux'
import { storeFactory } from '../../../test/testUtils'

const props = {
  school: '',
  setSchool: () => null,
}

it('dropdown component renders', () => {
  const store = storeFactory({})
  const wrapper = mount(
    <Provider store={store}>
      <SchoolDropdownMemo {...props} />
    </Provider>,
  )
  const dropdown = wrapper.find('SchoolDropdown')
  expect(dropdown.length).toBe(1)
})

describe('displays dropdown items accurately', () => {
  const store = storeFactory({})
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <SchoolDropdownMemo {...props} />
      </Provider>,
    )
  })

  it('dropdown not displayed when text input is empty', () => {
    const schoolDropdownComponent = wrapper.find('SchoolDropdown')
    const searchResults = schoolDropdownComponent.find('SearchResultsList')
    expect(searchResults.length).toBe(0)
  })

  it('dropdown ul displays when user inputs text', () => {
    const schoolDropdownComponent = wrapper.find('SchoolDropdown')
    const input = schoolDropdownComponent.find('input')
    input.simulate('change', {
      target: { value: 'irvine' },
    })
    const searchResultsList = wrapper.find('SchoolDropdown').find('SearchResultsList')
    expect(searchResultsList.length).toBe(1)
  })
})
