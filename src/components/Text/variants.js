import theme from 'src/styles/theme'

const linkProps = {
  fontSize: theme.fontSizes[2],
  cursor: 'pointer',
  marginTop: '-1px',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'transparent',
  height: 'min-content',
  textDecoration: 'none',
}

const textVariants = {
  'title-nav': {
    fontFamily: 'title',
    fontSize: theme.fontSizes[5],
    fontWeight: theme.fontWeights.bold,
    lineHeight: '1.5',
    mb: 2,
  },
  'title-lg': {
    fontFamily: 'title',
    fontSize: [
      theme.fontSizes[6],
      theme.fontSizes[7],
      theme.fontSizes[7],
      theme.fontSizes[7],
    ],
    fontWeight: theme.fontWeights.bold,
    lineHeight: '1.7',
  },
  title: {
    fontFamily: 'title',
    fontSize: theme.fontSizes[6],
    fontWeight: theme.fontWeights.semibold,
  },
  'title-sm': {
    fontFamily: 'title',
    fontSize: [
      theme.fontSizes[3],
      theme.fontSizes[4],
      theme.fontSizes[4],
      theme.fontSizes[5],
    ],
    fontWeight: theme.fontWeights.semibold,
    lineHeight: '1.6',
  },
  'title-xs': {
    fontFamily: 'title',
    fontSize: theme.fontSizes[4],
    fontWeight: theme.fontWeights.semibold,
    lineHeight: '1.5',
  },
  paragraph: {
    fontSize: theme.fontSizes[2],
    lineHeight: '1.5',
  },
  'p-large': {
    fontSize: theme.fontSizes[2],
    fontWeight: theme.fontWeights.light,
    lineHeight: '1.3',
  },
  'p-thin': {
    fontSize: theme.fontSizes[2],
    fontWeight: theme.fontWeights.light,
    lineHeight: '1.3',
  },
  'p-bold': {
    fontFamily: 'title',
    fontSize: theme.fontSizes[2],
    fontWeight: theme.fontWeights.bold,
    lineHeight: '1.3',
  },
  'p-semibold': {
    fontSize: theme.fontSizes[2],
    fontWeight: theme.fontWeights.semibold,
    lineHeight: '1.3',
  },
  xs: {
    fontSize: theme.fontSizes[1],
    lineHeight: '1.3',
  },
  link: {
    default: {
      ...linkProps,
      color: 'purple.4',
      '&:hover': {
        borderBottomColor: 'purple.4',
        borderBottomWidth: '1px',
      },
    },
    fat: {
      ...linkProps,
      fontSize: theme.fontSizes[3],
      color: 'blue.6',
      '&:hover': {
        borderBottomColor: 'white',
        borderBottomWidth: '1px',
      },
    },
    internal: {
      ...linkProps,
      color: 'gray.6',
      '&:hover': {
        borderBottomColor: 'gray.6',
        borderBottomWidth: '1px',
      },
    },
    external: {
      ...linkProps,
      color: 'red.4',
      '&:hover': {
        borderBottomColor: 'red.4',
        borderBottomWidth: '1px',
      },
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
      },
    },
  },
}

export default textVariants
