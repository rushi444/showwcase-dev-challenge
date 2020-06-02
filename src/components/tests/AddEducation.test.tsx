import React from 'react'
import { shallow, mount, ReactWrapper, ShallowWrapper, MountRendererProps } from 'enzyme'
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

describe('Add Education form tests', () => {
  let wrapper: any
  let store = storeFactory({})
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <AddEducation />
      </Provider>,
    )
  })

  it('Empty form fields do not close modal and throws alert ', () => {
    //**jest dom does not have browser alert */
    window.alert = jest.fn()
    const addEducationButton = wrapper.find('button')
    addEducationButton.simulate('click')
    wrapper.update()
    const sumbitButton = wrapper.find('SubmitButton')
    sumbitButton.simulate('click')
    const modal = wrapper.find('Modal')
    expect(window.alert).toBeCalledTimes(1)
    expect(modal.props()['isOpen']).toBe(true)
  })
})
