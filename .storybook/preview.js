import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '../src'

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    )
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
}
