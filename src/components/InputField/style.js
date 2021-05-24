import styled from 'styled-components';
import composers from 'src/styles/utils/composers';

const InputField = styled.input`
  ${composers.text}
  ${composers.box}
`;

InputField.defaultProps = {
  boxSizing: 'border-box',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'gray.2',
  borderRadius: 4,
  fontSize: 2,
  height: '40px',
  width: '100%'
};

export default InputField;
