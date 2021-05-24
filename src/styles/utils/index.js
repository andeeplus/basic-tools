import { getRandomElementFromArray } from 'src/utils';
import { css } from 'styled-components';
import colors from '../theme/colors';

export const getThemedAttribute = (key, attribute, cssAttr) => css`
  ${({ theme: t }) => `${cssAttr}: ${t.mode[t.type][key][attribute]};`}
`;

export const getRandomSystemColor = (shouldBeHex) => {
  const choosenColors = [
    'gray',
    'blue',
    'green',
    'orange',
    'purple',
    'red',
    'yellow',
    'pink'
  ];

  const levels = [3, 4, 5, 6, 7, 8, 9];

  const color = getRandomElementFromArray(choosenColors);
  const level = getRandomElementFromArray(levels);
  if (shouldBeHex) return colors[color][level];
  return `${color}.${level}`;
};
