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
