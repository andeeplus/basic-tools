import { colorsPalette } from '../theme/colorsPalette';

export const getRandomElementFromArray = (array) =>
  array[Math.floor(Math.random() * array.length)];

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
  if (shouldBeHex) return colorsPalette[color][level];
  return `${color}.${level}`;
};
