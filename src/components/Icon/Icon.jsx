import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from 'src/components/Box';
import paths from './paths';

const Icon = forwardRef(
  ({ title, size = 24, viewBox = '0 0 24 24', fill = 'gray.7', icon, ...props }, ref) => (
    <Box
      as="span"
      justifyContent="center"
      alignItems="center"
      size={size}
      ref={ref}
      {...props}
    >
      <Box
        as="svg"
        data-testid="bt__svg-icon"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill={fill}
      >
        {title && <title>{title}</title>}
        <path d={paths[icon]} />
      </Box>
    </Box>
  )
);

export default Icon;

Icon.propTypes = {
  size: PropTypes.number,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string
};
