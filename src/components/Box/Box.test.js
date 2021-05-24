import React from 'react'
import { cleanup, screen } from '@testing-library/react'
import theme from 'src/styles/theme'
import Box from 'src/components/Box'
import { renderWithTheme } from 'src/private/test-utils/renderWithTheme'

const dataTestId = 'box'

const renderBox = (props) =>
  renderWithTheme(<Box data-testid={dataTestId} {...props} />)

describe('Box', () => {
  afterEach(cleanup)

  it('should render box by default', () => {
    renderBox()
    const box = screen.getByTestId(dataTestId)
    expect(box).toHaveStyle('display: flex;')
  })

  it('should render box with custom color', () => {
    renderBox({ color: 'red.5' })
    const box = screen.getByTestId(dataTestId)
    expect(box).toHaveStyle(`color: ${theme.colors.red[5]};`)
  })

  it('should render box padding from theme', () => {
    renderBox({ padding: 2 })
    const box = screen.getByTestId(dataTestId)
    expect(box).toHaveStyle(`padding: 8px;`)
  })
})
