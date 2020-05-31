import React from 'react';
import { shallow } from 'enzyme';
import { DescriptionMemo } from '../Description';

let props = {
  bullets: [],
  setBullets: () => null,
};

it('Description component renders', () => {
  const wrapper = shallow(<DescriptionMemo {...props} />);
  const descriptionComponent = wrapper.find('#description');
  expect(descriptionComponent.length).toBe(1);
});