import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import InnerInput from './style';
import Text from '../Text';

const InputField = ({ label, ...props }) => (
  <Box className="bt__input--container" flexDirection="column">
    {label && (
      <Text
        ml={1}
        className="bt__input--label"
        color="gray.9"
        textStyle="p.xs"
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
