import styled from 'styled-components';
import { typography } from 'styled-system';
import composers from 'src/utils/composers';
import { enhancedHover } from './utils';
import { variantProp } from './variants';

export const InnerButton = styled.button`
  &:disabled {
    pointer-events: none;
  }
  ${enhancedHover}
  ${typography}
  ${composers.box}
  ${(props) => variantProp(props)}
`;

InnerButton.defaultProps = {
  px: 2,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  cirsor: 'pointer',
  transition: 'all ease-in 0.15s',
  lineHeight: '16px',
  letterSpacing: '0.5',
  textAlign: 'center',
  height: '40px',
  border: '0',
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  m: 2
};
