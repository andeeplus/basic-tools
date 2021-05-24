const filled = (props) => ({
  fill: props.color,
  minWidth: '40px',
  width: '40px',
  height: '40px',
  '&:hover': {
    boxShadow: 'medium'
  },
  '&:disabled': {
    opacity: 0.65,
    boxShadow: 'none'
  }
});

export default filled;
