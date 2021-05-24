const circle = (props) => ({
  fill: props.color,
  minWidth: '40px',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  '&:hover': {
    boxShadow: 'medium'
  },
  '&:disabled': {
    opacity: 0.45,
    boxShadow: 'none'
  }
});

export default circle;
