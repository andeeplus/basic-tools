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
  const isTitle = props.textStyle.includes('title');
  if (props.link)
    return {
      as: 'a',
      textDecoration: 'none',
      fontFamily: isTitle ? props.theme.fonts.title : props.theme.fonts.normal
    };

  if (isTitle) {
    return { fontFamily: props.theme.fonts.title };
  }

  return { fontFamily: props.theme.fonts.normal };
})`
  ${ellipsis};
  ${textStyle}
  ${variant({ prop: 'link', scale: 'linkStyles' })}
  ${composers.text};
  ${composers.box};
`;

Text.defaultProps = {
  textStyle: 'p.default',
  width: 'fit-content',
  transition: 'all 0.1s ease-in',
  lineHeight: 'default'
};

export default Text;
