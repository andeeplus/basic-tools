import React from 'react';
import { ThemeProvider } from 'styled-components';
import { default as btTheme } from '../src/theme/theme';
import GlobalReset from '../src/styles/GlobalReset';

const theme = {
  ...btTheme,
  fonts: {
    normal: "Courier",
    title: "Helvetica"
  }
};
export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalReset />
        <Story />
      </ThemeProvider>
    );
  }
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewMode: 'docs'
};
