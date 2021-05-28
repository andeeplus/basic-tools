import { generateDynamicColors } from 'src/utils/theme';
import baseTheme from './baseTheme';
import themeColors from './themeColors';
import textStyles from './textStyles';
import linkStyles from './linkStyles';

const enhancedColors = {
  ...themeColors,
  ...generateDynamicColors(themeColors)
};

const theme = {
  ...baseTheme,
  textStyles,
  linkStyles,
  colors: enhancedColors
};

export default theme;
