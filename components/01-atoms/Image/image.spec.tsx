import React from 'react';
import { render, screen } from '@testing-library/react';
import { useInView } from 'react-intersection-observer';
import * as useNativeLazyLoading from '@charlietango/use-native-lazy-loading';
import { Image } from './image';

jest.mock('react-intersection-observer');

const mockUseInView = useInView as jest.Mock;

type PropOverrides = {
  shouldLazyLoad?: boolean;
  sizes?: string;
  srcSet?: string;
  fullWidth?: boolean;
};

const setup = (propOverrides: PropOverrides = {}) => {
  const props = {
    alt: 'runner',
    classes: 'cool neat wow',
    src: 'https://www.womensrunning.com/runner.jpg',
    ...propOverrides
  };
  const { asFragment } = render(<Image {...props} />);

  return { asFragment };
};

const mockInView = (isInView: boolean) => {
  mockUseInView.mockImplementation(() => ({
    inView: isInView
  }));
};

const mockUseNativeLazyLoading = (isSupported: boolean) => {
  jest.spyOn(useNativeLazyLoading, 'default').mockReturnValue(isSupported);
};

describe('Image', () => {
  beforeEach(() => {
    mockInView(true);
    mockUseNativeLazyLoading(true);
  });

  test('single source snapshot', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });

  test('multi-source snapshot', () => {
    const { asFragment } = setup({
      srcSet:
        'http://www.outside.com/canoe-small.jpg, http://www.outside.com/canoe-large.jpg, http://www.outside.com/canoe-large.jpg',
      sizes: '(max-width: 300px), (max-width: 600px), (max-width: 900px)'
    });

    expect(asFragment()).toMatchSnapshot();
  });

  test('optional full width snapshot', () => {
    const { asFragment } = setup({ fullWidth: false });

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a lazy loaded image when in view and native lazy loading unavailable', () => {
    mockInView(true);
    mockUseNativeLazyLoading(false);

    setup();

    const lazyLoadedPicture = screen.getByTestId('lazy-loaded-picture');

    expect(lazyLoadedPicture).toBeTruthy();
  });

  it('renders a lazy loaded image natively', () => {
    mockInView(false);
    mockUseNativeLazyLoading(true);

    setup();

    const lazyLoadedPicture = screen.getByTestId('lazy-loaded-picture');

    expect(lazyLoadedPicture).toBeTruthy();
  });

  it('renders an eager loaded image', () => {
    setup({ shouldLazyLoad: false });

    const eagerLoadedPicture = screen.getByTestId('eager-loaded-picture');

    expect(eagerLoadedPicture).toBeTruthy();
  });

  it("doesn't render an image if it's not in view and lazy loading isn't supported by the browser", () => {
    mockInView(false);
    mockUseNativeLazyLoading(false);

    setup();

    const image = screen.queryByRole('img');

    expect(image).not.toBeInTheDocument();
  });
});
