import React from 'react';
import { shallow, mount } from 'enzyme';
import { Onboard } from '../Onboard';
import { Provider } from 'react-redux';
import { storeFactory } from '../../test/testUtils';

it('Onboard Component Renders!', () => {
  const store = storeFactory({});
  const wrapper = shallow(
    <Provider store={store}>
      <Onboard />
    </Provider>,
  );
  const onboardComponent = wrapper.dive().find('Onboard');
  expect(onboardComponent.length).toBe(1);
});

describe('Form tests', () => {
  const store = storeFactory({});
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Onboard />
      </Provider>,
    );
  });

  it('Name Input Renders', () => {
    const inputs = wrapper.find('Onboard').find('input');
    expect(inputs.length).toBe(1);
  });

  it('Button renders', () => {
    const buttons = wrapper.find('Onboard').find('Button');
    expect(buttons.length).toBe(1);
  });

  it('Button disabled when no input text', () => {
    const button = wrapper.find('Onboard').find('Button');
    expect(button.props()['disabled']).toBe(true);
  });

  it('button enabled when name is entered', () => {
    const input = wrapper.find('Onboard').find('input');
    input.simulate('change', {
      target: { value: 'Bob' },
    });
    const button = wrapper.find('Onboard').find('Button');
    expect(button.props()['disabled']).toBe(false);
  });
});
