import { colorsPalette } from 'src/styles/theme';

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

export const generateDynamicColors = (colors) => {
  const dynamicColors = {};
  const colorsArray = {};

  Object.keys(colors).forEach((col) => {
    if (typeof colors[col] === 'object') colorsArray[col] = colors[col];
  });

  Object.keys(colorsArray).forEach((col) => {
    colorsArray[col].forEach((c, index) => {
      dynamicColors[`${col}.${index}`] = colorsArray[col][index];
    });
  });

  return dynamicColors;
};
