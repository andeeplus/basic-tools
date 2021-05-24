import styled from 'styled-components';
import composers from 'src/styles/utils/composers';
import { variant } from 'styled-system';
import textVariants from './variants';

const ellipsis = (props) =>
  props.ellipsis &&
  `
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${props.ellipsis};
  `;

const Text = styled.span`
  ${ellipsis};
  ${composers.text};
  ${composers.box};
  ${variant({ variants: textVariants })}
`;

Text.defaultProps = {
  variant: 'paragraph',
  width: 'fit-content',
  transition: 'all 0.1s ease-in',
  fontFamily: 'normal'
};

export default Text;
