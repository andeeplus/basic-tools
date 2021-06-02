import baseTheme from './baseTheme';

const title = {
  xl: {
    fontSize: baseTheme.fontSizes[7],
    fontWeight: 'bold',
    marginBottom: baseTheme.space[2]
  },
  lg: {
    fontSize: baseTheme.fontSizes[6],
    fontWeight: 'bold',
    marginBottom: baseTheme.space[2]
  },
  default: {
    fontSize: baseTheme.fontSizes[5],
    fontWeight: 'bold',
    marginBottom: baseTheme.space[2]
  },
  sm: {
    fontSize: baseTheme.fontSizes[4],
    fontWeight: 'bold',
    marginBottom: baseTheme.space[2]
  },
  xs: {
    fontSize: baseTheme.fontSizes[3],
    fontWeight: 'bold',
    marginBottom: 1
  }
};

const p = {
  xl: {
    fontSize: baseTheme.fontSizes[4]
  },
  lg: {
    fontSize: baseTheme.fontSizes[3]
  },
  default: {
    fontSize: baseTheme.fontSizes[2]
  },
  sm: {
    fontSize: baseTheme.fontSizes[1]
  },
  xs: {
    fontSize: baseTheme.fontSizes[0]
  }
};

const textStyles = {
  p,
  title
};

export default textStyles;
