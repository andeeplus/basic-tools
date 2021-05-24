import styled from 'styled-components';
import composers from 'src/styles/utils/composers';

const Box = styled.div`
  ${composers.box}
`;

Box.defaultProps = {
  display: 'flex',
  position: 'relative'
};

Box.displayName = 'Box';

export default Box;
