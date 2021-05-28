import React from 'react';
import { cleanup } from '@testing-library/react';
import { theme } from 'src/theme';
import Button from 'src/components/Button';
import { renderWithTheme } from '../../private/test-utils/renderWithTheme';

const buttonText = 'Click';

describe('Button Component', () => {
  afterEach(() => cleanup());

  it('renders correctly if variant is "filled"', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button" variant="filled">
        {buttonText}
      </Button>
    );
    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: theme.colors.black,
      color: theme.colors.white
    });
  });

  it('renders correctly if variant is "outlined"', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button" variant="outlined" bg="red.5">
        {buttonText}
      </Button>
    );
    expect(getByTestId('button')).toHaveStyle({
      borderColor: theme.colors.red[5],
      backgroundColor: 'transparent',
      color: theme.colors.red[5]
    });
  });

  it('renders correctly if variant is "text"', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button" variant="text">
        {buttonText}
      </Button>
    );
    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: 'transparent',
      color: theme.colors.black
    });
  });

  it('renders correctly if it is an icon', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button" variant="filled" icon="arrowDown">
        {buttonText}
      </Button>
    );
    expect(getByTestId('bt__svg-icon')).toBeInTheDocument();
  });

  it('renders correctly if button is disabled', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button" variant="filled" disabled>
        {buttonText}
      </Button>
    );
    expect(getByTestId('button')).toHaveStyle({
      opacity: 0.45
    });
  });

  it('renders correctly if button color is custom', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button" variant="filled" bg="red.5" color="white">
        {buttonText}
      </Button>
    );
    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: theme.colors.red[5]
    });
  });

  it('renders correctly the text', () => {
    const { getByText } = renderWithTheme(
      <Button data-testid="button" variant="filled" bg="red.5" color="white">
        {buttonText}
      </Button>
    );
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it('renders the spinner if loading', () => {
    const { getByTestId, queryByText } = renderWithTheme(
      <Button data-testid="button" variant="filled" loading>
        {buttonText}
      </Button>
    );

    expect(queryByText(buttonText)).toBeNull();
    expect(getByTestId('bt__spinner')).toBeInTheDocument();
  });
});
