import {
  compose,
  flexbox,
  layout,
  space,
  color,
  border,
  position,
  background,
  shadow,
  typography,
  grid,
  system
} from 'styled-system';

const customTextProps = system({
  cursor: { property: 'cursor' },
  fill: { property: 'fill', scale: 'colors' },
  stroke: { property: 'stroke', scale: 'colors' },
  strokeWidth: { property: 'strokeWidth' },
  outline: { property: 'outline' },
  textDecoration: { property: 'textDecoration' },
  whiteSpace: { property: 'whiteSpace' },
  textTransform: { property: 'textTransform' },
  letterSpacing: { property: 'letterSpacing' },
  wordBreak: { property: 'wordBreak' }
});

const customBoxProps = system({
  boxSizing: { property: 'boxSizing' },
  pointerEvents: { property: 'pointerEvents' },
  transform: { property: 'transform' },
  transition: { property: 'transition' }
});

const composers = {
  box: compose(
    flexbox,
    layout,
    space,
    color,
    border,
    position,
    background,
    shadow,
    typography,
    grid,
    customTextProps,
    customBoxProps
  ),
  text: compose(typography, color, space, layout, position, flexbox, customTextProps)
};

export default composers