import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import { StyledSpinner, StyledCircle } from './styles';

const Spinner = ({ size = 50, color, margin, padding, strokeWidth = 6, ...props }) => (
  <Box data-testid="bt__spinner" {...props}>
    <StyledSpinner
      size={size}
      margin={margin}
      padding={padding}
      viewBox={`0 0 ${size} ${size}`}
    >
      <StyledCircle stroke={color} strokeWidth={strokeWidth} />
    </StyledSpinner>
  </Box>
);

export default Spinner;

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  margin: PropTypes.number,
  padding: PropTypes.number,
  strokeWidth: PropTypes.number
};
