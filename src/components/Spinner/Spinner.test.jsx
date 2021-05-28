import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { theme } from 'src/theme';
import Spinner from 'src/components/Spinner';
import { renderWithTheme } from 'src/private/test-utils/renderWithTheme';

const dataTestId = 'Spinner';

const renderBox = (props) =>
  renderWithTheme(<Spinner data-testid={dataTestId} {...props} />);

describe('spinner', () => {
  afterEach(cleanup);

  it('should render Spinner by default', () => {
    renderBox();
    const spinner = screen.getByTestId(dataTestId);
    expect(spinner).toHaveStyle('display: flex;');
  });

  it('should render Spinner with custom fill', () => {
    renderBox({ color: 'red.5' });
    const spinner = screen.getByTestId(dataTestId).firstChild.firstChild;
    expect(spinner).toHaveStyle(`stroke: ${theme.colors.red[5]};`);
  });

  it('should render Spinner with custom stroke width', () => {
    renderBox({ strokeWidth: 8 });
    const spinner = screen.getByTestId(dataTestId).firstChild.firstChild;
    expect(spinner).toHaveStyle(`stroke-width: 8;`);
  });
});
