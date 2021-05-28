import baseTheme from './baseTheme';
import themeColors from './themeColors';

const linkProps = {
  cursor: 'pointer',
  marginTop: '-1px',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'transparent',
  height: 'min-content',
  textDecoration: 'none'
};

const linkStyles = {
  default: {
    ...linkProps,
    color: themeColors.purple[4],
    '&:hover': {
      borderBottomColor: themeColors.purple[4],
      borderBottomWidth: '1px'
    }
  },
  lg: {
    ...linkProps,
    color: 'blue.6',
    '&:hover': {
      borderBottomColor: 'white',
      borderBottomWidth: '1px'
    }
  },
  external: {
    ...linkProps,
    color: themeColors.red[4],
    '&:hover': {
      borderBottomColor: themeColors.red[4],
      borderBottomWidth: '1px'
    }
  },
  cta: {
    paddingLeft: baseTheme.space[1],
    paddingRight: baseTheme.space[1],
    marginTop: '-2px',
    marginLeft: baseTheme.space[1],
    marginRight: baseTheme.space[1],
    cursor: 'pointer',
    borderColor: themeColors.gray[8],
    color: themeColors.gray[8],
    border: '2px solid',
    minHeight: '24px',
    borderRadius: '3px',
    '&:hover': {
      backgroundColor: themeColors.gray[8],
      color: themeColors.gray[0],
      borderColor: themeColors.gray[8]
    }
  }
};

export default linkStyles;
