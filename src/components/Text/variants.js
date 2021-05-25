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
    lineHeight: `${theme.fontSizes[7]}`,
    mb: 2
  },
  default: {
    fontFamily: 'title',
    fontSize: theme.fontSizes[6],
    fontWeight: theme.fontWeights.semibold,
    lineHeight: `${theme.fontSizes[6]}`,
    mb: 2
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
    lineHeight: `${theme.fontSizes[4]}`,
    mb: 2
  },
  xs: {
    fontFamily: 'title',
    fontSize: theme.fontSizes[3],
    fontWeight: theme.fontWeights.semibold,
    lineHeight: `${theme.fontSizes[3]}`,
    mb: 1
  }
};

const p = {
  lg: {
    fontSize: theme.fontSizes[3],
    lineHeight: theme.fontSizes[3]
  },
  default: {
    fontSize: theme.fontSizes[2],
    lineHeight: theme.fontSizes[2]
  },
  sm: {
    fontSize: theme.fontSizes[1],
    lineHeight: theme.fontSizes[1]
  },
  xs: {
    fontSize: theme.fontSizes[0],
    lineHeight: theme.fontSizes[0]
  }
};

const textVariants = {
  p,
  title,
  link
};

export default textVariants;
