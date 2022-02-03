import React from 'react';
import { render } from '@testing-library/react';
import { BasicCheckMarkIcon } from './check-mark-icon.composition';

describe('CheckMarkIcon', () => {
  test('snapshot', () => {
    const { asFragment } = render(<BasicCheckMarkIcon />);

    expect(asFragment()).toMatchSnapshot();
  });
});
