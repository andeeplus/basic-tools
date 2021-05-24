import { createElement } from 'react';
import { Box } from 'src/components';

export const getResponsiveGridByArea = (area, config) => {
  const mediaQueries = Object.keys(config);
  const props = {};
  mediaQueries.forEach((mq) => {
    const attributes = config[mq][area];
    const keys = Object.keys(attributes);
    keys.forEach((key) => {
      if (!props[key]) props[key] = [];

      const valueToPush = attributes[key] !== undefined ? attributes[key] : 'hola';
      props[key].push(valueToPush);
    });
  });

  return props;
};

export const createGridElement = (as, area, props, gridConfig) =>
  createElement(Box, {
    ...getResponsiveGridByArea(area, gridConfig),
    as,
    ...props
  });
