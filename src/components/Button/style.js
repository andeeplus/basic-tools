import styled from 'styled-components';
import { typography, buttonStyle } from 'styled-system';
import composers from 'src/utils/composers';
import { buttonShapeVariant } from '../../theme/buttonStyles';

export const InnerButton = styled.button`
  &:disabled {
    pointer-events: none;
  }
  ${buttonShapeVariant}
  ${buttonStyle}
  ${typography}
  ${composers.box}
`;

InnerButton.defaultProps = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  transition: 'all 0.15s ease-in',
  letterSpacing: '0.5',
  textAlign: 'center',
  m: 2
};
