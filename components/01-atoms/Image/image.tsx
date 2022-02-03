import React from 'react';
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';
import { useInView } from 'react-intersection-observer';

export type ImageProps = {
  /** Maps to the <img> tag's alt attribute */
  alt: string;
  /** Class names to pass to <img> */
  classes?: string;
  /** Image height */
  height?: string;
  /** Determines if the image is lazy loaded */
  shouldLazyLoad?: boolean;
  /** Maps to the media attribute on the <source> tags within the <picture> tag. The sizes should be comma-separated.  */
  sizes?: string;
  /** Maps to the <img> tag's src attribute */
  src: string;
  /** Maps to the the srcSet attribute on the <source> tags within the <picture> tag. The sources should be comma-separated. */
  srcSet?: string;
  /** Image width */
  width?: string;
  /** whether or not to apply full width to the image */
  fullWidth?: boolean;
};

type PictureProps = {
  testId: string;
};

export const Image = ({
  alt,
  classes = '',
  height = 'auto',
  shouldLazyLoad = true,
  sizes = '',
  src = '',
  srcSet = '',
  width = 'auto',
  fullWidth = true
}: ImageProps) => {
  const supportsLazyLoading = useNativeLazyLoading();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    skip: supportsLazyLoading !== false
  });

  const Picture = ({ testId }: PictureProps) => {
    const loadingType = shouldLazyLoad ? 'lazy' : 'eager';
    const sourcesArray = srcSet.split(', ');
    const sizesArray = sizes.split(', ');
    const showImage = inView || supportsLazyLoading || !shouldLazyLoad;
    const imageClasses = `${classes} ${fullWidth ? 'min-w-full' : ''}`.trim();

    if (sourcesArray.length > 1) {
      return (
        <picture data-testid={testId}>
          {sourcesArray.map((source, i) => (
            <source
              /* eslint-disable react/no-array-index-key */
              key={`${source}-${i}`}
              media={sizesArray?.[i] || ''}
              srcSet={source}
            />
          ))}
          {showImage ? (
            <img
              className={imageClasses}
              alt={alt}
              src={src}
              loading={loadingType}
              style={{ height, width }}
            />
          ) : null}
        </picture>
      );
    }

    if (showImage) {
      return (
        <img
          data-testid={testId}
          alt={alt}
          className={imageClasses}
          loading={loadingType}
          src={src}
          srcSet={srcSet}
          style={{ height, width }}
        />
      );
    }
    return null;
  };

  if (shouldLazyLoad) {
    return (
      <div ref={ref}>
        <Picture testId="lazy-loaded-picture" />
      </div>
    );
  }

  return <Picture testId="eager-loaded-picture" />;
};
