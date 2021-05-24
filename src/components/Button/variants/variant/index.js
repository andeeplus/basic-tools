import { variant } from 'styled-system';
import filled from './filled';
import outlined from './outlined';
import text from './text';
import squared from './squared';
import circle from './circle';

const type = (props) =>
  variant({
    prop: 'variant',
    variants: {
      filled: filled(props),
      outlined: outlined(props),
      text: text(props),
      squared: squared(props),
      circle: circle(props)
    }
  });

export default type;
