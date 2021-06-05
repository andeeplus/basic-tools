import { minWidth, variant } from 'styled-system';
import baseTheme from './baseTheme';
import themeColors from './themeColors';

const disabledStyles = {
  backgroundColor: themeColors.gray[2],
  borderColor: themeColors.gray[2],
  color: themeColors.gray[4],
  '& svg > path': {
    fill: themeColors.gray[4]
  }
};

const commonDefault = {
  borderWidth: '2px',
  borderStyle: 'solid'
};

export const buttonStyles = {
  text: {
    color: themeColors.black,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: '2px',
    borderStyle: 'solid',
    '& svg > path': {
      fill: themeColors.black
    },
    '&:hover': {
      backgroundColor: themeColors.gray[1],
      borderColor: themeColors.gray[1]
    },
    '&:active': {
      backgroundColor: themeColors.gray[2],
      borderColor: themeColors.gray[2]
    },
    '&:disabled': disabledStyles
  },
  primary: {
    color: themeColors.white,
    backgroundColor: themeColors.gray[8],
    borderColor: themeColors.gray[9],
    ...commonDefault,
    '& svg > path': {
      fill: themeColors.white
    },
    '&:hover': {
      backgroundColor: themeColors.gray[7],
      fill: themeColors.white,
      borderColor: themeColors.gray[7]
    },
    '&:active': {
      color: themeColors.white,
      fill: themeColors.white,
      backgroundColor: themeColors.gray[8],
      borderColor: themeColors.gray[8]
    },
    '&:disabled': disabledStyles
  },
  secondary: {
    color: themeColors.gray[7],
    backgroundColor: themeColors.white,
    borderColor: themeColors.gray[7],
    ...commonDefault,
    '& svg > path': {
      fill: themeColors.gray[7]
    },
    '&:hover': {
      color: themeColors.white,
      fill: themeColors.white,
      backgroundColor: themeColors.gray[7],
      borderColor: themeColors.gray[7],
      '& svg > path': {
        fill: themeColors.white
      }
    },
    '&:active': {
      color: themeColors.white,
      fill: themeColors.white,
      backgroundColor: themeColors.gray[8],
      borderColor: themeColors.gray[8]
    },
    '&:disabled': disabledStyles
  },
  danger: {
    color: themeColors.white,
    backgroundColor: themeColors.red[4],
    borderColor: themeColors.red[4],
    ...commonDefault,
    '& svg > path': {
      fill: themeColors.white
    },
    '&:hover': {
      backgroundColor: themeColors.red[5],
      borderColor: themeColors.red[5]
    },
    '&:active': {
      backgroundColor: themeColors.red[6],
      borderColor: themeColors.red[6]
    },
    '&:disabled': disabledStyles
  },
  warning: {
    color: themeColors.red[6],
    backgroundColor: themeColors.yellow[4],
    borderColor: themeColors.yellow[4],
    ...commonDefault,
    '& svg > path': {
      fill: themeColors.red[6]
    },
    '&:hover': {
      backgroundColor: themeColors.yellow[5],
      borderColor: themeColors.yellow[5]
    },
    '&:active': {
      backgroundColor: themeColors.yellow[6],
      borderColor: themeColors.yellow[6]
    },
    '&:disabled': disabledStyles
  },
  info: {
    color: themeColors.white,
    backgroundColor: themeColors.blue[4],
    borderColor: themeColors.blue[4],
    ...commonDefault,
    '& svg > path': {
      fill: themeColors.white
    },
    '&:hover': {
      backgroundColor: themeColors.blue[5],
      borderColor: themeColors.blue[5]
    },
    '&:active': {
      backgroundColor: themeColors.blue[6],
      borderColor: themeColors.blue[6]
    },
    '&:disabled': disabledStyles
  },
  success: {
    color: themeColors.white,
    backgroundColor: themeColors.green[7],
    borderColor: themeColors.green[7],
    ...commonDefault,
    '& svg > path': {
      fill: themeColors.green
    },
    '&:hover': {
      backgroundColor: themeColors.green[6],
      borderColor: themeColors.green[6]
    },
    '&:active': {
      backgroundColor: themeColors.green[7],
      borderColor: themeColors.green[7]
    },
    '&:disabled': disabledStyles
  }
};

export const buttonShapeVariant = variant({
  prop: 'shape',
  key: 'buttonShape'
});

export const buttonShape = {
  default: {
    sm: {
      height: '32px',
      fontSize: baseTheme.fontSizes[1],
      lineHeight: baseTheme.fontSizes[1],
      borderRadius: baseTheme.radii[1],
      padding: `0 4px`
    },
    md: {
      height: '40px',
      fontSize: baseTheme.fontSizes[2],
      borderRadius: baseTheme.radii[1],
      padding: '0 16px'
    },
    lg: {
      height: '48px',
      fontSize: baseTheme.fontSizes[3],
      lineHeight: baseTheme.fontSizes[3],
      borderRadius: baseTheme.radii[2],
      padding: `0 32px`
    }
  },
  circle: {
    sm: {
      height: '32px',
      width: '32px',
      maxWidth: '32px',
      borderRadius: '50%',
      fontSize: baseTheme.fontSizes[1],
      '& svg': {
        width: '20px',
        height: '20px',
        minWidth: '20px'
      }
    },
    md: {
      height: '40px',
      width: '40px',
      maxWidth: '40px',
      borderRadius: '50%',
      fontSize: baseTheme.fontSizes[2],
      '& svg': {
        width: '24px',
        height: '24px',
        minWidth: '24px'
      }
    },
    lg: {
      height: '48px',
      width: '48px',
      maxWidth: '48px',
      borderRadius: '50%',
      fontSize: baseTheme.fontSizes[3],
      '& svg': {
        width: '32px',
        height: '32px',
        minWidth: '32px'
      }
    }
  },
  squared: {
    sm: {
      height: '32px',
      width: '32px',
      maxWidth: '32px',
      borderRadius: baseTheme.radii[1],
      fontSize: baseTheme.fontSizes[1],
      '& svg': {
        width: '20px',
        height: '20px',
        minWidth: '20px'
      }
    },
    md: {
      height: '40px',
      width: '40px',
      maxWidth: '40px',
      borderRadius: baseTheme.radii[1],
      fontSize: baseTheme.fontSizes[2],
      '& svg': {
        width: '24px',
        height: '24px',
        minWidth: '24px'
      }
    },
    lg: {
      height: '48px',
      width: '48px',
      maxWidth: '48px',
      borderRadius: baseTheme.radii[1],
      fontSize: baseTheme.fontSizes[3],
      '& svg': {
        width: '40px',
        height: '40px',
        minWidth: '40px'
      }
    }
  }
};
