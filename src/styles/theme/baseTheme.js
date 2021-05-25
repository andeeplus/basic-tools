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
    regular: 400,
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
    xs: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    sm: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    md: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    lg: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    xl: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
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
