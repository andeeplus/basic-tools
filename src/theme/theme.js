import baseTheme from './baseTheme';
import themeColors from './themeColors';
import textStyles from './textStyles';
import linkStyles from './linkStyles';
import { buttonStyles, buttonShape } from './buttonStyles';

const enhancedColors = {
  ...themeColors
};

const theme = {
  ...baseTheme,
  buttons: buttonStyles,
  buttonShape,
  textStyles,
  linkStyles,
  colors: enhancedColors
};

export default theme;
