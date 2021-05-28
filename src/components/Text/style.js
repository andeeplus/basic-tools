import styled from 'styled-components';
import composers from 'src/utils/composers';
import { textStyle, variant } from 'styled-system';

const ellipsis = (props) =>
  props.ellipsis &&
  `
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${props.ellipsis};
  `;

const Text = styled.span.attrs((props) => {
  if (props.link)
    return {
      as: 'a',
      href: props.href
    };
  return props;
})`
  ${ellipsis};
  ${textStyle}
  ${composers.text};
  ${composers.box};
  ${variant({ prop: 'link', scale: 'linkStyles' })}
`;

Text.defaultProps = {
  variant: 'p.default',
  width: 'fit-content',
  transition: 'all 0.1s ease-in',
  fontFamily: 'normal',
  lineHeight: 'default'
};

export default Text;
