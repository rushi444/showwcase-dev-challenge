import React from 'react'
import { shallow, mount } from 'enzyme'
import { DescriptionMemo } from '../Description'

let props = {
  bullets: [],
  setBullets: () => null,
}

it('Description component renders', () => {
  const wrapper = shallow(<DescriptionMemo {...props} />)
  const descriptionComponent = wrapper.find("[data-test='description']")
  expect(descriptionComponent.length).toBe(1)
})

describe('Description & bullet points', () => {
  let wrapper: any
  let setBullets = jest.fn()
  beforeEach(() => {
    wrapper = mount(<DescriptionMemo bullets={[]} setBullets={setBullets} />)
  })

  it('adds a bullet to bullets list', () => {
    const bulletInput = wrapper.find('FormInput')
    const bulletInputButton = wrapper.find('Button')
    bulletInput.simulate('change', {
      target: { value: 'Example Bullet' },
    })
    bulletInputButton.simulate('click')
    expect(wrapper.props().setBullets).toBeCalledTimes(1)
  })

  it('bullet cannot be added if empty', () => {
    const bulletInputButton = wrapper.find('Button')
    bulletInputButton.simulate('click')
    expect(wrapper.props().bullets.length).toBe(0)
  })
})
