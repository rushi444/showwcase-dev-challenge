import React from 'react';
import { shallow } from 'enzyme';
import { Onboard } from './Onboard';

it('Onboard Component Renders!', () => {
  const wrapper = shallow(<Onboard />);
  expect(wrapper.length).toBe(1);
});

describe('Form tests', () => {
  it('Name Input Renders', () => {
    const wrapper = shallow(<Onboard />);
    const inputs = wrapper.find('input');
    expect(inputs.length).toBe(1);
  });
  it('Button renders', () => {
    const wrapper = shallow(<Onboard />);
    const buttons = wrapper.find('Button');
    expect(buttons.length).toBe(1);
  });
  it('Button disabled when no input text', () => {
    const wrapper = shallow(<Onboard />);
    const button = wrapper.find('Button');
    expect(button.props()['disabled']).toBe(true);
  });
  it('button enabled when name is entered', () => {
    const wrapper = shallow(<Onboard />);
    const input = wrapper.find('input');
    input.simulate('change', {
      target: { value: 'Bob' },
    });
    const button = wrapper.find('Button');
    expect(button.props()['disabled']).toBe(false);
  });
});
