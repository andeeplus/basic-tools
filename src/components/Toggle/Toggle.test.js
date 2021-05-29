import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toggle from 'src/components/Toggle';
import { renderWithTheme } from 'src/private/test-utils/renderWithTheme';

const ariaLabel = 'toggle-label';

const mockOnChange = jest.fn();

const renderToggle = (props) =>
  renderWithTheme(<Toggle ariaLabel={ariaLabel} onChange={mockOnChange} {...props} />);

describe('Toggle', () => {
  beforeEach(cleanup);

  it('should render toggle', () => {
    renderToggle();
    expect(screen.getByLabelText(ariaLabel)).toBeInTheDocument();
  });

  it('should call on change', async () => {
    renderToggle();
    const toggle = screen.getByLabelText(ariaLabel);
    userEvent.click(toggle);
    expect(toggle).toBeChecked();
  });

  it('should not call on change if disabled', async () => {
    renderToggle({ disabled: true });
    const toggle = screen.getByLabelText(ariaLabel);
    userEvent.click(toggle);
    expect(toggle).not.toBeChecked();
  });
});
