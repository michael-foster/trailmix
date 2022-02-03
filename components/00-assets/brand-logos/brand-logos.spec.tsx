import React from 'react';
import { render } from '@testing-library/react';
import { BasicBrandLogos } from './brand-logos.composition';
import { BRAND_LOGOS_LIST } from './brand-logos';

jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ inView: true })
}));

describe('Brand Logos', () => {
  it('should have all the logos', () => {
    const { getAllByRole } = render(<BasicBrandLogos />);
    const rendered = getAllByRole('img');
    expect(rendered).toBeTruthy();
    expect(rendered.length).toBe(BRAND_LOGOS_LIST.length);
  });
});
