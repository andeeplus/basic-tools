const outlined = (props) => ({
  fill: props.color,
  bg: 'transparent',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: props.color,
  display: 'flex',
  '&:hover': {
    bg: props.color,
    boxShadow: 'medium',
    color: 'white',
    fill: 'white'
  },
  '&:disabled': {
    bg: 'transparent',
    borderColor: 'gray.2',
    color: 'gray.2',
    fill: 'gray.2',
    boxShadow: 'none'
  }
});

export default outlined;
