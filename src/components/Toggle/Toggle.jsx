import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import composers from 'src/utils/composers';

const Toggle = ({ onChange, ariaLabel, disabled, ...props }) => (
  <CheckBoxWrapper disabled={disabled} {...props}>
    <CheckBox
      aria-label={ariaLabel}
      disabled={disabled}
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
  ariaLabel: 'toggle-id',
  disabled: false
};

const CheckBoxWrapper = styled.div`
  position: relative;
  ${composers.box}
  ${(props) =>
    props.disabled
      ? `
     border-color: ${props.theme.colors.gray[2]};
  `
      : `
     border-color: ${props.theme.colors.borderColor};
  `}
`;

CheckBoxWrapper.defaultProps = {
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: 'gray.3',
  borderRadius: '15px',
  position: 'relative',
  width: '46px',
  maxWidth: '46px',
  height: '26px',
  m: 2
};

const CheckBoxLabel = styled.label`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
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
        : '1px 2px 2px 1px rgba(0, 0, 0, 0.2)'};
    transition: all 0.2s ease-in;
  }
  ${composers.box}
`;

CheckBoxLabel.defaultProps = {
  position: 'absolute',
  top: '-1px',
  left: '-1px',
  width: '44px',
  height: '24px',
  borderRadius: '15px',
  bg: 'gray.3'
};

const CheckBox = styled.input`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
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
