import React from 'react';
import { render } from '@testing-library/react';
import { BasicPlayIcon } from './play-icon.composition';

describe('PlayIcon', () => {
  test('snapshot', () => {
    const { asFragment } = render(<BasicPlayIcon />);

    expect(asFragment()).toMatchSnapshot();
  });
});
