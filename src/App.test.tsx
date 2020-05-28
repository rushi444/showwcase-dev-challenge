import React from 'react';
import { render } from 'enzyme';
import { App } from './App';

test('App Component Renders', () => {
  const wrapper = render(<App />);
  expect(wrapper.length).toBe(1);
});
