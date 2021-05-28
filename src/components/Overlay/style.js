import styled from 'styled-components';
import Box from 'src/components/Box';

const StyledOverlay = styled(Box)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: height 0.3s ease-out;
`;

StyledOverlay.defaultProps = {
  zIndex: 5,
  position: 'fixed',
  bg: 'blackfade35'
};

export default StyledOverlay;
