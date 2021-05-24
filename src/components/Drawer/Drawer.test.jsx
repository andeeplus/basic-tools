import React from 'react';
import { render } from '@testing-library/react';
import Drawer from './Drawer';

const contentText = 'I am the content';
const drawerTestId = 'drawer__container';

describe('Drawer', () => {
  it('renders closed', () => {
    const { getByTestId } = render(<Drawer open={false} onDismiss={() => {}} />);
    expect(getByTestId(drawerTestId)).toHaveStyle({
      transform: 'translateY(-100%)'
    });
  });

  it('it opens with default values', () => {
    const { getByText, getByTestId } = render(
      <Drawer open onDismiss={() => {}}>
        {contentText}
      </Drawer>
    );

    const text = getByText(contentText);
    const content = getByTestId(drawerTestId);
    expect(content).toContainElement(text);
    expect(content).toHaveStyle({ position: 'fixed', top: 0, left: 0 });
  });

  it('it opens to bottom', () => {
    const { getByText, getByTestId } = render(
      <Drawer open side="bottom" onDismiss={() => {}}>
        {contentText}
      </Drawer>
    );

    const text = getByText(contentText);
    const content = getByTestId(drawerTestId);
    expect(content).toContainElement(text);
    expect(content).toHaveStyle({ position: 'fixed', bottom: 0, left: 0 });
  });

  it('it opens to top', () => {
    const { getByText, getByTestId } = render(
      <Drawer open side="top" onDismiss={() => {}}>
        {contentText}
      </Drawer>
    );

    const text = getByText(contentText);
    const content = getByTestId(drawerTestId);
    expect(content).toContainElement(text);
    expect(content).toHaveStyle({ position: 'fixed', top: 0, right: 0 });
  });

  it('it opens to a custom Placement', () => {
    const { getByText, getByTestId } = render(
      <Drawer
        open
        side="top"
        placement={{
          key: 'top',
          value: {
            top: '80px',
            right: 0,
            bottom: 0
          }
        }}
        onDismiss={() => {}}
      >
        {contentText}
      </Drawer>
    );

    const text = getByText(contentText);
    const content = getByTestId(drawerTestId);
    expect(content).toContainElement(text);
    expect(content).toHaveStyle({ position: 'fixed', top: '80px', right: 0 });
  });
});
