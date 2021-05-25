import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import InnerInput from './style';
import Text from '../Text';

const InputField = ({ label, ...props }) => (
  <Box className="bt__input--container" flexDirection="column">
    {label && (
      <Text
        className="bt__input--label"
        color="gray.9"
        variant="p.xs"
        fontWeight="semibold"
      >
        {label}
      </Text>
    )}
    <InnerInput {...props} />
  </Box>
);

InputField.propTypes = {
  label: PropTypes.string
};

export default InputField;
