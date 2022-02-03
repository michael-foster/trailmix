import React from 'react';
import { render } from '@testing-library/react';
import { BasicRefreshIcon } from './refresh-icon.composition';

describe('BasicRefreshIcon', () => {
  test('snapshot', () => {
    const { asFragment } = render(<BasicRefreshIcon />);

    expect(asFragment()).toMatchSnapshot();
  });
});
