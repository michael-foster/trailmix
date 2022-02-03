// tailwind.config.js
const kebabcase = require('lodash.kebabcase');

function getConfig(theme) {
  const tokens = require('@outside-interactive/style-dictionaries.js-tokens');
  // Grab Network Tokens
  const networkTokens = tokens.network;
  const themeTokens = tokens[theme];

  // Letter Spacing
  const letterSpacing = Object.fromEntries(
    Object.values(networkTokens.letterSpacing).map(({ attributes, value }) => [
      kebabcase(attributes.type),
      value
    ])
  );

  // Line Heights
  const lineHeight = Object.fromEntries(
    Object.values(networkTokens.lineHeights).map(({ attributes, value }) => [
      kebabcase(attributes.type),
      value
    ])
  );

  // Font Weights
  const fontWeight = Object.fromEntries(
    Object.entries(networkTokens.fontWeights.weights).map(
      ([key, { value }]) => [kebabcase(key), value]
    )
  );

  // Font Sizes
  const fontSize = Object.fromEntries(
    Object.values(networkTokens.fontSizes).map(({ attributes, value }) => [
      kebabcase(attributes.type),
      value
    ])
  );

  // Box Shadow
  const boxShadow = Object.fromEntries(
    Object.values(networkTokens.boxShadow).map(({ attributes, value }) => [
      kebabcase(`theme-shadow-${attributes.type}`),
      `${value.x}px  ${value.y}px  ${value.blur}px ${value.spread}px ${value.color}`
    ])
  );

  // Breakpoints
  const screens = Object.fromEntries(
    Object.values(networkTokens.breakpoints).map(({ attributes, value }) => [
      kebabcase(attributes.type),
      value
    ])
  );

  // Spacing
  const spacing = {};
  const paddingBase = networkTokens.space['padding-base'].value;
  const paddingBaseValue = parseInt(paddingBase.replace('px', ''));

  Array.from({ length: 100 }, (_, i) => i + 1).forEach((i) => {
    spacing[`${i}`] = `${i * paddingBaseValue}px`;
  });

  // Border Widths + Radii
  const borders = {};
  Array.from({ length: 20 }, (_, i) => i + 1).forEach((i) => {
    borders[`${i}`] = `${i}px`;
  });

  // TO DO: Color Function to process all the repeated tasks below?!

  // Gather Network + Theme Colors

  const networkColors = Object.fromEntries(
    Object.values({
      ...networkTokens.colors.primary,
      ...networkTokens.colors.secondary,
      ...networkTokens.colors.tertiary,
      ...networkTokens.colors.neutrals
    }).map(({ attributes, value }) => [
      kebabcase(`network-${attributes.item}`),
      value
    ])
  );

  const themePrimary = Object.fromEntries(
    Object.values({
      ...themeTokens['theme-colors'][theme].primary
    }).map(({ attributes, value }, index) => [
      kebabcase(`theme-${attributes.item}${index + 1}`),
      value
    ])
  );
  const themeSecondary = Object.fromEntries(
    Object.values({
      ...themeTokens['theme-colors'][theme].secondary
    }).map(({ attributes, value }, index) => [
      kebabcase(`theme-${attributes.item}${index + 1}`),
      value
    ])
  );
  const themeTertiary = Object.fromEntries(
    Object.values({
      ...themeTokens['theme-colors'][theme].tertiary
    }).map(({ attributes, value }, index) => [
      kebabcase(`theme-${attributes.item}${index + 1}`),
      value
    ])
  );
  // BUTTON COLORS
  // const {buttons} = themeTokens['theme-colors'][theme].variables;
  const colorVars = {
    ...themeTokens['theme-colors'][theme].variables.buttons,
    ...themeTokens['theme-colors'][theme].variables['default-bgs'],
    ...themeTokens['theme-colors'][theme].variables['default-colors'],
    ...themeTokens['theme-colors'][theme].variables['overlay-nav'],
    ...themeTokens['theme-colors'][theme].variables['primary-nav'],
    ...themeTokens['theme-colors'][theme].variables['secondary-nav'],
    ...themeTokens['theme-colors'][theme].variables.tags,
    ...themeTokens['theme-colors'][theme].variables.articles,
    ...themeTokens['theme-colors'][theme].variables['form-components'],
    ...themeTokens['theme-colors'][theme].variables.topics
  };

  const themeButtons = Object.fromEntries(
    Object.entries(colorVars).map(([key, { value }]) => [
      kebabcase(`theme-${key}`),
      value.value
    ])
  );

  const themeColors =
    theme === 'network'
      ? {}
      : {
          ...themePrimary,
          ...themeSecondary,
          ...themeTertiary,
          ...themeButtons
        };

  // FONTS

  const networkFontFamily = Object.fromEntries(
    Object.entries(networkTokens.fontFamilies.fonts).map(([key, { value }]) => [
      kebabcase(`network-${key}`),
      value
    ])
  );

  const themeFontFamily = Object.fromEntries(
    Object.entries(themeTokens['theme-fontFamilies'][theme].fonts).map(
      ([key, { value }]) => [kebabcase(`theme-${key}`), value]
    )
  );

  const networkFontUses = Object.fromEntries(
    Object.entries(networkTokens.fontFamilies.uses).map(([key, { value }]) => [
      kebabcase(`network-${key}`),
      value.value
    ])
  );

  const themeFontUses = Object.fromEntries(
    Object.entries(themeTokens['theme-fontFamilies'][theme].variables).map(
      ([key, { value }]) => [kebabcase(`theme-${key}`), value.value]
    )
  );

  // UTILITY TYPOGRAPHY - MOBILE (FIRST), TABLET, THEN DESKTOP!!

  const mobileNetworkTypographyTokens = {
    ...networkTokens.typography.mobile.headlines,
    ...networkTokens.typography.mobile[`utility-text`],
    ...networkTokens.typography.mobile[`paragraph-styles`],
    ...networkTokens.typography.mobile[`article-styles`]
  };

  const tabletNetworkTypographyTokens = {
    ...networkTokens.typography.tablet.headlines,
    ...networkTokens.typography.tablet[`utility-text`],
    ...networkTokens.typography.tablet[`paragraph-styles`],
    ...networkTokens.typography.tablet[`article-styles`]
  };

  const desktopNetworkTypographyTokens = {
    ...networkTokens.typography.desktop.headlines,
    ...networkTokens.typography.desktop[`utility-text`],
    ...networkTokens.typography.desktop[`paragraph-styles`],
    ...networkTokens.typography.desktop[`article-styles`]
  };

  /* MOBILE */
  const networkMobileUtilityFont = Object.fromEntries(
    Object.entries(mobileNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-mobile-family-${key}`),
      value.fontFamily.value.value
    ])
  );

  const networkMobileUtilityFontWeight = Object.fromEntries(
    Object.entries(mobileNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-mobile-weight-${key}`),
      value.fontWeight.value.value
    ])
  );

  const networkMobileUtilityFontSize = Object.fromEntries(
    Object.entries(mobileNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-mobile-size-${key}`),
      value.fontSize.value
    ])
  );

  const networkMobileUtilityLineHeight = Object.fromEntries(
    Object.entries(mobileNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-mobile-height-${key}`),
      value.lineHeight.value
    ])
  );

  const networkMobileUtilitySpacing = Object.fromEntries(
    Object.entries(mobileNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-mobile-tracking-${key}`),
      value.letterSpacing.value
    ])
  );

  /* TABLET */
  const networkTabletUtilityFont = Object.fromEntries(
    Object.entries(tabletNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-tablet-family-${key}`),
      value.fontFamily.value.value
    ])
  );

  const networkTabletUtilityFontWeight = Object.fromEntries(
    Object.entries(tabletNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-tablet-weight-${key}`),
      value.fontWeight.value.value
    ])
  );

  const networkTabletUtilityFontSize = Object.fromEntries(
    Object.entries(tabletNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-tablet-size-${key}`),
      value.fontSize.value
    ])
  );

  const networkTabletUtilityLineHeight = Object.fromEntries(
    Object.entries(tabletNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-tablet-height-${key}`),
      value.lineHeight.value
    ])
  );

  const networkTabletUtilitySpacing = Object.fromEntries(
    Object.entries(desktopNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-tablet-tracking-${key}`),
      value.letterSpacing.value
    ])
  );

  /* DESKTOP */
  const networkDesktopUtilityFont = Object.fromEntries(
    Object.entries(desktopNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-desktop-family-${key}`),
      value.fontFamily.value.value
    ])
  );

  const networkDesktopUtilityFontWeight = Object.fromEntries(
    Object.entries(desktopNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-desktop-weight-${key}`),
      value.fontWeight.value.value
    ])
  );

  const networkDesktopUtilityFontSize = Object.fromEntries(
    Object.entries(desktopNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-desktop-size-${key}`),
      value.fontSize.value
    ])
  );

  const networkDesktopUtilityLineHeight = Object.fromEntries(
    Object.entries(desktopNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-desktop-height-${key}`),
      value.lineHeight.value
    ])
  );

  const networkDesktopUtilitySpacing = Object.fromEntries(
    Object.entries(desktopNetworkTypographyTokens).map(([key, { value }]) => [
      kebabcase(`network-desktop-tracking-${key}`),
      value.letterSpacing.value
    ])
  );

  // THEME UTILITY TYPOGRAPHY
  const themeTypographyTokens = {
    ...themeTokens.typography.desktop.headlines,
    ...themeTokens.typography.desktop[`utility-text`],
    ...themeTokens.typography.desktop[`paragraph-styles`],
    ...themeTokens.typography.desktop[`article-styles`]
  };

  const themeUtilityFont = Object.fromEntries(
    Object.entries(themeTypographyTokens).map(([key, { value }]) => [
      kebabcase(`theme-family-${key}`),
      value.fontFamily.value.value
    ])
  );

  const themeUtilityFontWeight = Object.fromEntries(
    Object.entries(themeTypographyTokens).map(([key, { value }]) => [
      kebabcase(`theme-weight-${key}`),
      value.fontWeight.value.value
    ])
  );

  const themeUtilityFontSize = Object.fromEntries(
    Object.entries(themeTypographyTokens).map(([key, { value }]) => [
      kebabcase(`theme-size-${key}`),
      value.fontSize.value
    ])
  );

  const themeUtilityLineHeight = Object.fromEntries(
    Object.entries(themeTypographyTokens).map(([key, { value }]) => [
      kebabcase(`theme-height-${key}`),
      value.lineHeight.value
    ])
  );

  const themeUtilitySpacing = Object.fromEntries(
    Object.entries(themeTypographyTokens).map(([key, { value }]) => [
      kebabcase(`theme-tracking-${key}`),
      value.letterSpacing.value
    ])
  );

  // Border Radius
  const borderRadius = Object.fromEntries(
    Object.entries(themeTokens.borderRadius).map(([key, { value }]) => [
      kebabcase(`theme-border-${key}`),
      value
    ])
  );

  // Return TW Config
  return {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: { ...networkColors, ...themeColors },
        fontFamily: {
          ...networkFontFamily,
          ...themeFontFamily,
          ...networkFontUses,
          ...themeFontUses,
          ...networkMobileUtilityFont,
          ...networkTabletUtilityFont,
          ...networkDesktopUtilityFont,
          ...themeUtilityFont
        },
        lineHeight: {
          ...lineHeight,
          ...networkMobileUtilityLineHeight,
          ...networkTabletUtilityLineHeight,
          ...networkDesktopUtilityLineHeight,
          ...themeUtilityLineHeight
        },
        fontWeight: {
          ...fontWeight,
          ...themeUtilityFontWeight,
          ...networkMobileUtilityFontWeight,
          ...networkTabletUtilityFontWeight,
          ...networkDesktopUtilityFontWeight
        },
        fontSize: {
          ...fontSize,
          ...networkMobileUtilityFontSize,
          ...networkTabletUtilityFontSize,
          ...networkDesktopUtilityFontSize,
          ...themeUtilityFontSize
        },
        boxShadow,
        screens,
        spacing,
        letterSpacing: {
          ...letterSpacing,
          ...networkMobileUtilitySpacing,
          ...networkTabletUtilitySpacing,
          ...networkDesktopUtilitySpacing,
          ...themeUtilitySpacing
        },
        borderRadius,
        borderWidth: borders
      }
    },
    variants: {
      extend: {}
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/line-clamp')
    ]
  };
}

module.exports = getConfig;
