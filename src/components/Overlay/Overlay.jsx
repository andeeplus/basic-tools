import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledOverlay from './style';

const Overlay = ({ isVisible, ...props }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  return (
    <StyledOverlay key="overlay" display={isVisible ? 'block' : 'none'} {...props} />
  );
};

Overlay.displayName = 'Overlay';

Overlay.propTypes = {
  isVisible: PropTypes.bool
};

export default Overlay;
