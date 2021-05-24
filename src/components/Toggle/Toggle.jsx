import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import composers from 'src/styles/utils/composers';

const Toggle = ({ onChange, ...props }) => (
  <CheckBoxWrapper {...props}>
    <CheckBox id="checkbox" type="checkbox" onChange={onChange} />
    <CheckBoxLabel htmlFor="checkbox" />
  </CheckBoxWrapper>
);

Toggle.propTypes = {
  onChange: PropTypes.func
};

const CheckBoxWrapper = styled.div`
  position: relative;
  ${composers.box}
`;

CheckBoxWrapper.defaultProps = {
  position: 'relative',
  width: '42px',
  m: 2
};

const CheckBoxLabel = styled.label`
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${(props) => props.theme.colors.gray[6]};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
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
    background: ${(props) => props.theme.mode[props.theme.type].body.text};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

CheckBox.defaultProps = {
  opacity: 0,
  zIndex: 1,
  width: '24px',
  height: '20px',
  borderRadius: '15px',
  bg: 'gray.1'
};

export default Toggle;
