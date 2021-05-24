const text = (props) => ({
  bg: 'transparent',
  color: props.color !== 'white' ? props.color : props.theme.colors.black,
  fill: props.color !== 'white' ? props.color : props.theme.colors.black,
  '&:hover': {
    bg: 'gray.2'
  },
  '&:disabled': {
    color: 'gray.4',
    fill: 'gray.4',
    boxShadow: 'none'
  }
});

export default text;
