import styled from 'styled-components';
import composers from 'src/utils/composers';

const TextArea = styled.textarea`
  ${composers.box}
  ${composers.text}
  box-sizing: border-box;
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

TextArea.defaultProps = {
  boxSizing: 'border-box',
  fontFamily: 'normal',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'gray.2',
  borderRadius: 4,
  fontSize: 2,
  width: '100%'
};

export default TextArea;
