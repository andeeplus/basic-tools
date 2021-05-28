import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import composers from 'src/utils/composers';

const Toggle = ({ onChange, ariaLabel, disabled, ...props }) => (
  <CheckBoxWrapper disabled={disabled} {...props}>
    <CheckBox
      disabled={disabled}
      ariaLabel={ariaLabel}
      id={ariaLabel}
      type="checkbox"
      onChange={onChange}
    />
    <CheckBoxLabel disabled={disabled} htmlFor={ariaLabel} />
  </CheckBoxWrapper>
);

Toggle.propTypes = {
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

Toggle.defaultProps = {
  ariaLabel: 'toggle-id'
};

const CheckBoxWrapper = styled.div`
  position: relative;
  ${composers.box}
  border-color: ${(props) =>
    props.disabled ? props.theme.colors.gray[1] : props.borderColor};
`;

CheckBoxWrapper.defaultProps = {
  border: '2px solid',
  borderColor: 'gray.3',
  borderRadius: '15px',
  position: 'relative',
  width: '46px',
  maxWidth: '46px',
  m: 2
};

const CheckBoxLabel = styled.label`
  cursor: pointer;
  &::after {
    z-index: 10;
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${(props) =>
      props.disabled ? props.theme.colors.gray[4] : props.theme.colors.gray[6]};
    box-shadow: ${(props) =>
      props.disabled
        ? '1px 1px 1px 1px rgba(0, 0, 0, 0.1)'
        : '1px 3px 3px 1px rgba(0, 0, 0, 0.2)'};
    transition: all 0.2s ease-in;
  }
  ${composers.box}
`;

CheckBoxLabel.defaultProps = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '42px',
  height: '24px',
  borderRadius: '15px',
  bg: 'gray.3'
};

const CheckBox = styled.input`
  &:checked + ${CheckBoxLabel} {
    transition: all 0.2s ease-in;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
    }
  }
  &:not(:checked) + ${CheckBoxLabel} {
    background: ${(props) =>
      props.disabled ? props.theme.colors.gray[1] : props.theme.colors.white};
  }
`;

CheckBox.defaultProps = {
  zIndex: 1,
  width: '24px',
  height: '20px',
  borderRadius: '15px',
  bg: 'gray.1'
};

export default Toggle;
