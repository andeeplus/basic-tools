const baseTheme = {
  borderWidths: [0, '3px'],
  breakpoints: ['444px', '768px', '1080px', '1640px'],

  fonts: {
    normal:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    title:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '28x', '34px', '40px', '48px'],
  fontWeights: {
    light: 100,
    normal: 400,
    semibold: 600,
    bold: 700
  },
  lineHeights: {
    condensedUltra: 1,
    condensed: 1.25,
    default: 1.5
  },
  radii: ['0', '3px', '6px', '100px'],
  shadows: {
    sm: '0 1px 0 rgba(149, 157, 165, 0.2)',
    md: '0 3px 6px rgb(2 13 25 / 42%)',
    lg: '0 8px 24px rgba(149, 157, 165, 0.15)',
    xl: '0 12px 48px rgba(149, 157, 165, 0.23)'
  },
  space: [
    '0',
    '4px',
    '8px',
    '16px',
    '24px',
    '32px',
    '40px',
    '48px',
    '64px',
    '80px',
    '96px',
    '112px',
    '128px'
  ]
};

export default baseTheme;
