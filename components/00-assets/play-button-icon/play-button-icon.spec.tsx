import React from 'react';
import { render } from '@testing-library/react';
import { BasicPlayButtonIcon } from './play-button-icon.composition';

describe('PlayButtonIcon', () => {
  test('snapshot', () => {
    const { asFragment } = render(<BasicPlayButtonIcon />);

    expect(asFragment()).toMatchSnapshot();
  });
});
