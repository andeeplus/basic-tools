import React from 'react'
import { screen, cleanup } from '@testing-library/react'
import theme from 'src/styles/theme'
import Icon from 'src/components/Icon'
import { renderWithTheme } from '../../private/test-utils/renderWithTheme'
import iconPaths from './paths'

const dataTestId = 'icon'
const iconTitle = 'icon title'

const renderIcon = (props) =>
  renderWithTheme(<Icon data-testid={dataTestId} {...props} />)

describe('Icon Component', () => {
  afterEach(cleanup)

  it('renders a custom icon', () => {
    renderIcon({ icon: 'arrowDown' })
    expect(
      screen.getByTestId(dataTestId).firstChild.firstChild,
    ).toHaveAttribute('d', iconPaths.arrowDown)
  })

  it('renders the title', () => {
    renderIcon({ icon: 'arrowDown', title: iconTitle })
    expect(screen.getByTitle(iconTitle)).toBeInTheDocument()
  })

  it('renders icon size correctly', () => {
    renderIcon({ icon: 'arrowDown', size: 32 })
    expect(screen.getByTestId(dataTestId).firstChild).toHaveStyle({
      width: '32px',
      height: '32px',
    })
  })

  it('renders icon color prop correctly', () => {
    renderIcon({ icon: 'arrowDown', fill: 'red.1' })
    expect(screen.getByTestId(dataTestId).firstChild).toHaveStyle({
      fill: theme.colors.red[1],
    })
  })
})
