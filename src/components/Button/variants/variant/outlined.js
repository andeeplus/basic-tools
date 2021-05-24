/*eslint no-dupe-keys: "error"*/
const outlined = (props) => ({
  color: props.bg,
  fill: props.bg,
  bg: 'transparent',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: props.bg,
  display: 'flex',
  '&:hover': {
    bg: props.bg,
    color: props.color,
    fill: props.color,
    borderColor: props.bg,
    boxShadow: 'medium',
    color: 'white',
    fill: 'white'
  },
  '&:disabled': {
    bg: 'transparent',
    borderColor: 'gray.4',
    color: 'gray.4',
    fill: 'gray.4',
    boxShadow: 'none'
  }
});

export default outlined;
