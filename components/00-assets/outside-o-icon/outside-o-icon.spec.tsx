import React from 'react';
import { render } from '@testing-library/react';
import { BasicOutsideOIcon } from './outside-o-icon.composition';

test('snapshot', () => {
  const { asFragment } = render(<BasicOutsideOIcon />);

  expect(asFragment()).toMatchSnapshot();
});
