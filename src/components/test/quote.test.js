import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../../../math-magician/src/components/Quote';

it('renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
