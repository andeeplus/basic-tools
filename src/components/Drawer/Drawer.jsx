import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { defaultPlacements } from './config';
import { DrawerContent, DrawerWrapper } from './styles';

const Drawer = ({ children, open, onDismiss, placement, side = 'top', ...props }) => {
  const enhancedPlacements = placement
    ? {
        ...defaultPlacements,
        [placement.key]: placement.value
      }
    : defaultPlacements;

  return (
    <DrawerWrapper as="div" open={open} side={side}>
      <DrawerContent
        data-testid="drawer__container"
        as="div"
        open={open}
        side={side}
        placements={enhancedPlacements}
        {...props}
      >
        {children}
      </DrawerContent>
    </DrawerWrapper>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  side: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  onDismiss: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  placement: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string])
    )
  })
};

export default memo(Drawer);
