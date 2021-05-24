const filled = (props) => ({
  fill: props.color,
  '&:hover': {
    boxShadow: 'medium'
  },
  '&:disabled': {
    opacity: 0.45,
    boxShadow: 'none'
  }
});

export default filled;
