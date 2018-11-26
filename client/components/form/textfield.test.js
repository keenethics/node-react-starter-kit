import React from 'react';
import renderer from 'react-test-renderer';

import Textfield from './Textfield';

test('Render textfield without any props', () => {
  const component = renderer.create(
    <Textfield id="textfield-id" />,
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Render textfield with placeholder', () => {
  const component = renderer.create(
    <Textfield
      id="textfield-id"
      palceholder="Placeholder"
    />,
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Render disable textfield', () => {
  const component = renderer.create(
    <Textfield
      id="textfield-id"
      isDisabled
    />,
  );

  expect(component.toJSON()).toMatchSnapshot();
});
