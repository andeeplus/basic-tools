import * as React from 'react'
import { render } from '@testing-library/react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from 'src/styles/theme'

export const TestProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

TestProvider.propTypes = {
  children: PropTypes.node,
}

export const renderWithTheme = (Component) =>
  render(<TestProvider>{Component}</TestProvider>)
