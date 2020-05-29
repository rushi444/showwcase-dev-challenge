import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { storeFactory } from './test/testUtils';
import { Provider } from 'react-redux';

it('App Renders!', () => {
  const store = storeFactory({});
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const app = wrapper.dive().dive().find('.App');
  expect(app.length).toBe(1);
});
