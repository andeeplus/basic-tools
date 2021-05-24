const filled = (props) => ({
  fill: props.color,
  '&:hover': {
    boxShadow: 'medium'
  },
  '&:disabled': {
    opacity: 0.65,
    boxShadow: 'none'
  }
});

export default filled;
