import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { theme } from 'src/theme';
import Text from 'src/components/Text';
import { renderWithTheme } from 'src/private/test-utils/renderWithTheme';

const shortText = 'This is a text';
const largeText =
  'Tri-tip ham hock pig sirloin, ham kevin fatback landjaeger strip steak turkey shoulder picanha short loin meatloaf tongue.';

describe('Text Component', () => {
  afterEach(cleanup);

  it('renders the component', () => {
    renderWithTheme(<Text>{shortText}</Text>);
    expect(screen.getByText(shortText)).toBeInTheDocument();
  });

  it('renders the component with the right variant', () => {
    renderWithTheme(
      <Text textStyle="title.lg" ellipsis={2}>
        {largeText}
      </Text>
    );

    expect(screen.getByText(largeText)).toHaveStyle(`
      font-weight: bold;
       font-size: ${theme.fontSizes[6]};
    `);
  });

  it('renders the component as a link', () => {
    renderWithTheme(<Text link="cta">{largeText}</Text>);

    expect(screen.getByText(largeText)).toHaveStyle(`
      border: 2px solid;
      color: rgb(47, 54, 61);
      margin-top: -2px;
    `);
  });
});
