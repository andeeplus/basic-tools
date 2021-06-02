import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import composers from 'src/utils/composers';
import Box from 'src/components/Box';
import paths from './paths';

const Svg = styled.svg.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['height', 'width'].includes(prop) && defaultValidatorFn(prop)
})`
  ${composers.box}
`;

const Icon = forwardRef(
  ({ title, size = 24, viewBox = '0 0 24 24', fill = 'gray.9', icon, ...props }, ref) => (
    <Box as="span" justifyContent="center" alignItems="center" ref={ref} {...props}>
      <Svg
        data-testid="bt__svg-icon"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill={fill}
      >
        {title && <title>{title}</title>}
        <path d={paths[icon]} />
      </Svg>
    </Box>
  )
);

export default Icon;

Icon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string
};
