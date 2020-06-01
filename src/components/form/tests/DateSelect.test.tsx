import React from 'react'
import { shallow } from 'enzyme'
import { DateSelectMemo } from '../DateSelect'

let props = {
  dates: {
    monthStart: '',
    yearStart: '',
    monthEnd: '',
    yearEnd: '',
  },
  setDates: () => null,
}

it('DateSelect component renders both start and end date', () => {
  const wrapper = shallow(<DateSelectMemo {...props} />)
  const dateSelect = wrapper.find('DateSelect')
  expect(dateSelect.length).toBe(2)
})

describe('renders correct amount of options', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = shallow(<DateSelectMemo {...props} />)
  })

  it('12 months and empty options are rendered', () => {
    const monthEndSelect = wrapper.find('#monthEnd')
    const options = monthEndSelect.find('option')
    expect(options.length).toBe(13)
  })

  it('yearStart renders 32 years', () => {
    const yearStartSelect = wrapper.find('#yearStart')
    const options = yearStartSelect.find('option')
    expect(options.length).toBe(32)
  })
  // End year has 5 years into the future
  it('yearEnd renders 37 years', () => {
    const yearEndSelect = wrapper.find('#yearEnd')
    const options = yearEndSelect.find('option')
    expect(options.length).toBe(37)
  })
})
