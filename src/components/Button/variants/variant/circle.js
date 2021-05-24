const circle = (props) => ({
  fill: props.color,
  minWidth: '32px',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  '&:hover': {
    boxShadow: 'medium'
  },
  '&:disabled': {
    opacity: 0.65,
    boxShadow: 'none'
  }
});

export default circle;
