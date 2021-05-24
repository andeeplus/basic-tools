import { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const enhancedHover = css`
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(95%);
  }
`;
