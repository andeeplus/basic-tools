import styled from 'styled-components';
import composers from 'src/styles/utils/composers';

export const StyledSpinner = styled.svg`
  ${composers.box}
  animation: rotate 1s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

StyledSpinner.defaultProps = {
  m: 0,
  p: 0
};

export const StyledCircle = styled.circle`
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
  ${composers.box}
`;

StyledCircle.defaultProps = {
  cx: '25',
  cy: '25',
  r: '20',
  fill: 'none'
};
