import styled from 'styled-components';
import composers from 'src/styles/utils/composers';

const InputField = styled.input`
  ${composers.text}
  ${composers.box}
  ${({ theme }) => `
    &:focus {
      border-color:${theme.colors.blue[5]};
      background:${theme.colors.blue[0]};
    }
    &:active {
      border-color:${theme.colors.blue[5]};
    }
    &:disabled {
      border-color:${theme.colors.gray[4]};
      background:${theme.colors.gray[0]};
    }
  `}
`;

InputField.defaultProps = {
  boxSizing: 'border-box',
  fontFamily: 'normal',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'gray.2',
  borderRadius: 4,
  fontSize: 2,
  height: '40px',
  width: '100%'
};

export default InputField;
