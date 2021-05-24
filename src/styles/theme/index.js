import { generateDynamicColors } from '../utils/theme'
import themeColors from './colors'
import common from './common'

const colors = {
  ...themeColors,
  ...generateDynamicColors(themeColors),
}

const theme = {
  ...common,
  colors
}

export default theme
