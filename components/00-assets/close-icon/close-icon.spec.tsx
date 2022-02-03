import React from 'react';
import { render } from '@testing-library/react';
import { BasicCloseIcon } from './close-icon.composition';

test('snapshot', () => {
  const { asFragment } = render(<BasicCloseIcon />);

  expect(asFragment()).toMatchSnapshot();
});
