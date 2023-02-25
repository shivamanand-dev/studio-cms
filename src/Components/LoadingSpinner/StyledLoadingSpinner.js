import styled from "styled-components";

export const StyledLoadingSpinner = styled.section`
  #loaderSvgWrapper {
    position: absolute;
    height: 200px;
    width: 200px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  img {
    z-index: 2;
  }
  circle {
    fill: none;
    stroke-width: 2px;
  }
  #red {
    stroke: #cc0000;
    stroke-dasharray: 4 11 4 0;
    animation: cr 3s linear infinite;
  }
  #orange {
    stroke: #ff6600;
    stroke-dasharray: 10 30 10 0;
    animation: co 2.75s linear infinite;
  }
  #yellow {
    stroke: #ffff33;
    stroke-dasharray: 17 48 17 0;
    animation: cy 2.5s linear infinite;
  }
  #green {
    stroke: #33ff33;
    stroke-dasharray: 23 69 23 0;
    animation: cg 2.25s linear infinite;
  }
  @keyframes cr {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 19;
    }
  }
  @keyframes co {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 50;
    }
  }
  @keyframes cy {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 82;
    }
  }
  @keyframes cg {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 114;
    }
  }
`;
