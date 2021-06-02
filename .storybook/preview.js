import React from 'react';
import { ThemeProvider } from 'styled-components';
import { default as btTheme } from '../src/theme/theme';
import GlobalReset from '../src/styles/GlobalReset';


export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={btTheme}>
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
