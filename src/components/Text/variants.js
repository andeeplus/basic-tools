import theme from 'src/styles/theme';

const linkProps = {
  fontSize: theme.fontSizes[2],
  cursor: 'pointer',
  marginTop: '-1px',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'transparent',
  height: 'min-content',
  textDecoration: 'none'
};

const link = {
  default: {
    ...linkProps,
    color: 'purple.4',
    '&:hover': {
      borderBottomColor: 'purple.4',
      borderBottomWidth: '1px'
    }
  },
  lg: {
    ...linkProps,
    fontSize: theme.fontSizes[3],
    color: 'blue.6',
    '&:hover': {
      borderBottomColor: 'white',
      borderBottomWidth: '1px'
    }
  },
  internal: {
    ...linkProps,
    color: 'gray.6',
    '&:hover': {
      borderBottomColor: 'gray.6',
      borderBottomWidth: '1px'
    }
  },
  external: {
    ...linkProps,
    color: 'red.4',
    '&:hover': {
      borderBottomColor: 'red.4',
      borderBottomWidth: '1px'
    }
  },
  cta: {
    px: 1,
    mx: 1,
    fontSize: theme.fontSizes[2],
    cursor: 'pointer',
    borderColor: 'gray.8',
    color: 'gray.8',
    border: '2px solid',
    minHeight: '24px',
    borderRadius: '3px',
    mt: '-2px',
    '&:hover': {
      bg: 'gray.8',
      color: 'gray.0',
      borderColor: 'gray.8'
    }
  }
};

const title = {
  lg: {
    fontFamily: 'title',
    fontSize: [theme.fontSizes[6], theme.fontSizes[7]],
    fontWeight: theme.fontWeights.bold,
    lineHeight: '1.7'
  },
  default: {
    fontFamily: 'title',
    fontSize: theme.fontSizes[6],
    fontWeight: theme.fontWeights.semibold
  },
  sm: {
    fontFamily: 'title',
    fontSize: [
      theme.fontSizes[3],
      theme.fontSizes[4],
      theme.fontSizes[4],
      theme.fontSizes[5]
    ],
    fontWeight: theme.fontWeights.semibold,
    lineHeight: '1.6'
  },
  xs: {
    fontFamily: 'title',
    fontSize: theme.fontSizes[3],
    fontWeight: theme.fontWeights.semibold,
    lineHeight: '1.5'
  }
};

const p = {
  lg: {
    fontSize: theme.fontSizes[3],
    lineHeight: '1.3'
  },
  default: {
    fontSize: theme.fontSizes[2],
    lineHeight: '1.5'
  },
  sm: {
    fontSize: theme.fontSizes[1],
    lineHeight: '1.3'
  },
  xs: {
    fontSize: theme.fontSizes[0],
    lineHeight: '1.3'
  }
};

const textVariants = {
  p,
  title,
  link
};

export default textVariants;
