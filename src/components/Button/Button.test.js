import React from 'react';
import { cleanup } from '@testing-library/react';
import { theme } from 'src/theme';
import Button from 'src/components/Button';
import { renderWithTheme } from '../../private/test-utils/renderWithTheme';
import themeColors from '../../theme/themeColors';

const buttonText = 'Click';

describe('Button Component', () => {
  afterEach(() => cleanup());

  it('renders correctly if variant is not declared', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button">{buttonText}</Button>
    );
    expect(getByTestId('button')).toHaveStyle({
      color: themeColors.white,
      backgroundColor: themeColors.gray[8],
      borderColor: themeColors.gray[9],
      borderWidth: '2px',
      borderStyle: 'solid'
    });
  });

  it('renders correctly if variant is "secondary"', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button" variant="secondary">
        {buttonText}
      </Button>
    );
    expect(getByTestId('button')).toHaveStyle({
      color: themeColors.gray[7],
      backgroundColor: themeColors.white,
      borderColor: themeColors.gray[7],
      borderWidth: '2px',
      borderStyle: 'solid'
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
      borderColor: 'transparent',
      borderWidth: '2px',
      borderStyle: 'solid'
    });
  });

  it('renders correctly if it is an icon', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button" variant="circle" icon="arrowDown">
        {buttonText}
      </Button>
    );
    expect(getByTestId('bt__svg-icon')).toBeInTheDocument();
  });

  it('renders correctly if button is disabled', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button" disabled>
        {buttonText}
      </Button>
    );
    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: themeColors.gray[2],
      borderColor: themeColors.gray[2],
      color: themeColors.gray[4]
    });
  });

  it('renders correctly if button bg is custom', () => {
    const { getByTestId } = renderWithTheme(
      <Button data-testid="button" bg="red.5">
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
